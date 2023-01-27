<script setup lang="ts">
const mat: number[][] = Array(+import.meta.env.VITE_GAME_SETTING_MATRIX_ROW).fill(
  Array(+import.meta.env.VITE_GAME_SETTING_MATRIX_COL).fill(2)
)
</script>
<template>
  <div class="wrapper">
    <template v-for="rows in mat">
      <div class="box" v-for="row in rows">{{ row }}</div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.wrapper {
  width: 470px;
  height: 470px;
  margin: auto;
  padding: 10px;
  flex-wrap: wrap;
  display: flex;
  gap: 10px;
  border: 1px solid #ddd;
  justify-content: flex-start;
  align-content: flex-start;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
}
</style>
