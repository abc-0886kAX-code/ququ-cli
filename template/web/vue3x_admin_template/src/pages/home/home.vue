<script setup>

</script>

<template>
  <div class="home">
    <div class="home-plate-head" />
    <div class="home-plate-center">
      <div class="home-plate-center-left" />
      <div class="home-plate-center-right" />
    </div>
    <div class="home-plate-foot" />
  </div>
</template>

<style scoped lang='scss'>
.home {
  width: 100%;
  height: auto !important;
  padding: 25px;
  box-sizing: border-box;
  overflow-y: auto;

  &-plate-head {
    width: 100%;
    border-radius: 15px;
    height: 250px;
    background-color: #fff;
  }

  &-plate-center {
    width: 100%;
    border-radius: 10px;
    padding: 25px 0;
    box-sizing: border-box;
    height: 450px;
    display: flex;
    justify-content: space-between;

    &-left {
      width: 40%;
      height: 100%;
      background-color: #fff;
      border-radius: 15px;
    }

    &-right {
      width: 57%;
      height: 100%;
      background-color: #fff;
      border-radius: 15px;
    }
  }

  &-plate-foot {
    width: 100%;
    border-radius: 15px;
    height: 400px;
    padding: 25px;
    box-sizing: border-box;
    background-color: #fff;
  }
}
</style>
