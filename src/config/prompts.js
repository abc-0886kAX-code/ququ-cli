/*
 * @FilePath: \Create_Cesium_Template\src\config\prompts.js
 * @Author: zhangxin
 * @Date: 2024-07-18 17:24:26
 * @LastEditors: zhangxin
 * @LastEditTime: 2024-07-19 14:47:01
 * @Description: 
 */
/*
* @FileName: prompts.js
* @Description:交互项
*/
const chalk = require('chalk');

const PROMPTS = (isFile, appName) => {
  return {
    fileRepeat: {
      name: 'fileRepeat',
      type: 'list',
      message: `当前路径中已存在${isFile ? '文件' : '文件夹'}${chalk.bgBlue(
        ' ' + appName + ' '
      )}，请确认操作：`,
      choices: [
        {
          name: '覆盖',
          value: 1,
        },
        {
          name: '退出',
          value: 0,
        },
      ],
    },

    appType: {
      name: 'appType',
      type: 'list',
      message: `请选择应用类型：`,
      choices: [
        {
          name: 'Web/H5应用',
          value: 'web',
        },
      ],
    },

    scaffoldType: {
      web: {
        name: 'scaffoldType',
        type: 'list',
        message: `请选用预设模板类型：`,
        choices: [
          {
            name: `${chalk.bold(
              'vue3x_cesium_template'
            )}`,
            value: 'vue3x_cesium_template',
          },
          {
            name: `${chalk.bold('vue3x_admin_template')}`,
            value: 'vue3x_admin_template',
          },
        ],
      }
    },
  };
};
module.exports = PROMPTS;
