<template>
  <el-row class="signature-row">
    <el-col :span="8">实验操作：</el-col>
    <el-col :span="8">报告分析：</el-col>
    <el-col :span="8">报告审核：</el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Signature'
}
</script>

<style lang="scss" scoped>
.signature-row {
  position: absolute;
  bottom: 5mm;
  width: 100%;
}
</style>
