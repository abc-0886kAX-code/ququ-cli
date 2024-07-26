<!--
 * @FilePath: \vue3x_template\src\components\EmptyView.vue
 * @Author: maggot-code
 * @Date: 2022-11-26 16:03:34
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-07-26 14:59:38
 * @Description:
-->
<script setup>
defineProps({
  desc: {
    type: String,
    default: '抱歉，访问资源不存在',
  },
})
</script>

<template>
  <el-empty class="furnace-empty" :description="desc" />
</template>

<style scoped lang="scss"></style>
