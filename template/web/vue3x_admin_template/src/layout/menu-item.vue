<!--
 * @FilePath: \vue3x_template\src\layout\menu-item.vue
 * @Author: zhangxin
 * @Date: 2023-11-16 15:34:41
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-07-26 15:03:21
 * @Description:
-->
<script setup>
import { useMenu } from '@/hooks/useMenu.js'

const props = defineProps({
  cell: {
    type: Object,
    default: ()=>{},
  },
})
const menu = useMenu()
</script>

<template>
  <el-sub-menu :key="props.cell.name" :index="props.cell.name">
    <template #title>
      <i :class="menu.getIcon(props.cell)" />
      <span>{{ menu.getTitle(props.cell) }}</span>
    </template>

    <template v-for="item in props.cell.children" :key="item.name">
      <menu-item v-if="menu.renderSubmenu(item)" :cell="item" />

      <el-menu-item v-else-if="menu.renderMenu(item)" :index="item.name">
        <i :class="menu.getIcon(item)" />
        <span>{{ menu.getTitle(item) }}</span>
      </el-menu-item>
    </template>
  </el-sub-menu>
</template>

<style scoped lang='scss'>
</style>
