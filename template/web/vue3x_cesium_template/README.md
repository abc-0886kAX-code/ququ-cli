<!--
 * @FilePath: \ququ-cli\template\web\vue3x_cesium_template\README.md
 * @Author: abc-0886kAX-code
 * @Date: 2023-11-16 15:34:41
 * @LastEditors: zhangxin
 * @LastEditTime: 2024-07-19 16:30:18
 * @Description:
-->
<h1 align="center">Vue3x_Cesium_Template</h1>

<br>

<strong>Demo</strong>

-   📍&nbsp;&nbsp;[Address](http://152.136.167.65:8083/#/)
-   📍&nbsp;&nbsp;[source code](https://github.com/abc-0886kAX-code/vue3x_cesium_template)
    <br>

<strong>vite/cesium</strong>
`package.json`

```json
"cesium": "1.111.0",
"@cesium/engine": "6.1.0",
"@cesium/widgets": "4.3.0",
"vite-plugin-cesium": "1.2.22"
```

`vite.config.js`

```javascript
import cesium from "vite-plugin-cesium";
plugins: [cesium()];
```

<strong>webpack/cesium</strong>
`自行百度`

<strong>Render Component</strong>
`cesium-container.vue`
`整个项目仅需要一个map以及mapview实体，通过provide/inject传递，所以把握好放在什么地方(特殊情况业务除外)`

```vue
<CesiumContainer :config="config" :layers="layers">
    <component :is="Component" />
</CesiumContainer>
```
