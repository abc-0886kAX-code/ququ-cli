<!--
 * @FilePath: \ququ-cli\template\web\vue3x_admin_template\src\layout\Popup.vue
 * @Author: maggot-code
 * @Date: 2023-01-03 16:58:44
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-07 16:48:23
 * @Description:
-->
<script setup>
import { definePopup } from '@/biz/Popup/usecase/definePopup'

const { pond, pondFind, pondRelease } = definePopup()
</script>

<template>
  <div class="furnace-popup">
    <template v-for="key in pond" :key="key">
      <el-dialog
        :before-close="pondRelease(key)"  :model-value="pondFind(key).visible.value" :visible="pondFind(key).visible.value"
        :title="pondFind(key).title.value" :width="pondFind(key).width.value" :top="pondFind(key).top.value"
        v-bind="pondFind(key).constProps"
      >
        <div :ref="pondFind(key).refs" class="furnace-popup-main" :style="{ height: pondFind(key).height.value }">
          <template v-if="pondFind(key).visible.value">
            <component :is="pondFind(key).template" :popup-keyword="key" />
          </template>
        </div>
      </el-dialog>
    </template>
    <slot />
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dialog__title) {
  min-width: 100px;
  text-align: center;
  display: block;
  position: relative;
}

:deep(.el-dialog__title)::after {
  width: 35px;
  height: 35px;
  content: '';
  position: absolute;
  left: -40px;
  top: -5px;
  background: url('@/assets/images/dialog/titimg.png') no-repeat;
  background-position: 0px 0px;
}

:deep(.el-dialog__title)::before {
  width: 35px;
  height: 35px;
  content: '';
  position: absolute;
  right: -40px;
  top: -5px;
  background: url('@/assets/images/dialog/titimg-ri.png') no-repeat;
  background-position: 0px 0px;
}
</style>
