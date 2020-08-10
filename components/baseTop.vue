<template>
  <div class="base-info-top">
    <span style="float: left;"
      ><b>会诊号：</b>{{ topInfo.consultationNumber }}</span
    >
    <span style="float: right;"
      ><b>分子病理号：</b>{{ topInfo.molecularPathologyNumber }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'BaseTop',
  props: {
    topInfo: {
      type: Object,
      default() {
        return {
          consultationNumber: '',
          molecularPathologyNumber: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-info-top /deep/ {
  line-height: 2em;
  margin: 0.8em 0;
  overflow: hidden;
  border-bottom: 2px solid #000;
}
</style>
