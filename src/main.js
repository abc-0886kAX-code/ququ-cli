// 定义脚手架主界面
//脚手架版本介绍、功能列表展示等内容

const { program } = require('commander');
const chalk = require("chalk")

//注册版本
program.version(require('../package').version);


//注册create功能
program.command('create <appName>').description('创建一个新项目').action((name) => {
  if (process.argv.slice(3).length > 1) {
    console.log(chalk.yellow('\n 文件名中请勿包含空格！'));
  }
  //为方便管理，create功能的详细逻辑单独放在如下文件中管理
  const create = require('./command/create');
  create(name);
});


program.parse(process.argv);