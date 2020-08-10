<template>
  <div class="page-header">
    <slot name="head">
      <span class="left" style="float: left;"> 姓名：{{ header.name }} </span>
      <span class="right" style="float: right">
        分子病理号：{{ header.number }}
      </span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    header: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.page-header {
  position: absolute;
  bottom: 272mm;
  width: 170mm;
  line-height: 2em;
  border-bottom: 1px solid #000;
  overflow: hidden;
  color: #000;
  font-size: 10pt;
}
</style>
