/*
 * @FilePath: \Create_Cesium_Template\src\utils\generateFile.js
 * @Author: zhangxin
 * @Date: 2024-07-19 14:50:36
 * @LastEditors: zhangxin
 * @LastEditTime: 2024-07-19 14:57:51
 * @Description: 
 */
/*
* @FileName: generateFile.js
* @Description:文件、文件夹生成函数
*/

const fs = require('fs-extra');
const ora = require('ora');

//加载等待效果
const oraIns = ora({
  text: '努力处理中···',
  spinner: 'dots',
  color: 'yellow',
  interval: 150,
});

function generateFile(templatePath, appName, isFile) {
  //解析模板地址
  const resourcePath = process.argv[1].replace('\\bin\\cmd', templatePath);
  //定义输出地址
  const outputPath = process.cwd() + '/' + appName;
  //加载动画开始
  oraIns.start();

  try {
    //存在重名文件时先将其删除
    isFile && fs.removeSync(outputPath);
    //克隆文件夹
    fs.copySync(resourcePath, outputPath);

    //加载动画开始
    oraIns.stop();
  } catch (error) {
    console.log(error);
    oraIns.stop();
  }
}

module.exports = generateFile;
