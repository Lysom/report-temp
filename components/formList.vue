<template>
  <div class="form-list-wrap">
    <el-row type="flex" v-for="(item, index) in formInfo" :key="`form-item-${index}`">
      <el-col class="title-col">{{ item.title }}</el-col>
      <el-col>{{ item.cont }}</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'FormList',
  props: {
    formInfo: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-list-wrap /deep/ {
  .el-row {
    line-height: 2em;
  }
  .title-col {
    width: auto;
    font-weight: 600;
    text-align: right;
    white-space: nowrap;
  }
}
</style>
