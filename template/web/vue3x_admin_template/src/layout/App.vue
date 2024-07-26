<!--
 * @FilePath: \vue3x_template\src\layout\App.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: zhangxin
 * @LastEditTime: 2024-01-03 10:41:33
 * @Description:
-->
<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import MainLayout from '@/layout/main-layout'
import Popup from '@/layout/Popup.vue'
import ProgressMask from '@/components/ProgressMask.vue'
</script>

<template>
  <div id="app">
    <ElConfigProvider :locale="zhCn">
      <ProgressMask />
      <Popup>
        <MainLayout />
      </Popup>
    </ElConfigProvider>
  </div>
</template>

<style scoped lang="scss">
</style>
