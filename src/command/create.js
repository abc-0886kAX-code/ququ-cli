/*
 * @FilePath: \Create_Cesium_Template\src\command\create.js
 * @Author: zhangxin
 * @Date: 2024-07-18 13:32:03
 * @LastEditors: zhangxin
 * @LastEditTime: 2024-07-19 14:59:07
 * @Description: 
 */
//检查文件名是否重复，并做相应处理
//根据用户选择，生成相应模板
const fs = require('fs-extra');

const chalk = require('chalk');
const inquirer = require('inquirer');

const prompts = require('../config/prompts');

const generateFile = require('../utils/generateFile')

async function create(appName) {
  // 判断名称是否重复
  const nameRepeat = fs.existsSync(`./${appName}`);
  // 判断是与文件名还是文件夹名重复
  const isFile = nameRepeat ? fs.statSync(`./${appName}`).isFile() : false;

  const newPrompts = prompts(isFile, appName);

  // 检查名称是否重复
  if (nameRepeat) {
    const { fileRepeat } = await inquirer.prompt(newPrompts['fileRepeat']);
    // 选择退出后中断程序
    if (!fileRepeat) return;
  }


  //询问应用类型
  const { appType } = await inquirer.prompt(newPrompts['appType']);
  //询问模板类型
  const { scaffoldType } = await inquirer.prompt(newPrompts['scaffoldType'][appType]);

  const templatePath = `/template/${appType}/${scaffoldType}`;

  // 后续把这个方法完善成从git上档项目
  generateFile(templatePath, appName, isFile);
}

//将create作为函数导出
module.exports = (...args) => {
  return create(...args).catch(err => {
    console.log(chalk.red('项目创建出错:', err));
  })
}