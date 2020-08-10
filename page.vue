<template>
  <div class="print-page">
    <head-area v-if="pageInfo.currentPage > 1" :header="headerInfo"></head-area>
    <div class="content">
      <reportTitle v-if="pageInfo.currentPage === 1"></reportTitle>
      <slot name="content"></slot>
    </div>
    <foot-area :page-info="pageInfo"></foot-area>
  </div>
</template>

<script>
import reportTitle from './components/reportTitle'
import headArea from './pageHeader'
import footArea from './pageFooter'
export default {
  name: 'Page',
  components: {
    reportTitle,
    headArea,
    footArea
  },
  props: {
    headerInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    pageInfo: {
      type: Object,
      default() {
        return {
          currentPage: 1,
          sumPage: 2
        }
      }
    }
  },
  data() {
    return {}
  },
  created() {}
}
</script>

<style lang="scss" scoped>
@page {
  margin: 0;
}
.print-page /deep/ {
  position: relative;
  width: 210mm;
  height: 297mm;
  padding: 25mm 20mm;
  font-family: '新宋体', 'Microsoft YaHei', serif;
  font-size: 12pt;
  background: #fff;
  overflow: hidden;
  .content {
    position: relative;
    height: 247mm;
    overflow: hidden;
    .part-head {
      margin: 1em 0;
      font-size: 12pt;
      font-weight: bold;
    }
    .limitations {
      position: absolute;
      bottom: 30mm;
    }
    p {
      line-height: 1.5em;
    }
    .ft8 {
      font-size: 8pt;
    }
    .ft9 {
      font-size: 9pt;
    }
    .ft10 {
      font-size: 10pt;
    }
    .mt5px {
      margin-top: 5px;
    }
    .mt10px {
      margin-top: 10px;
    }
    .mt20px {
      margin-top: 20px;
    }
    table {
      margin-top: 1em;
      width: 100%;
      font-size: 11pt;
      border: 1px solid #000;
      border-collapse: collapse;
      thead {
        td {
          text-align: center;
          text-align-last: center;
          font-weight: 600;
        }
      }
      td {
        min-height: 1.5em;
        padding: 0 1em;
        line-height: 1.5em;
        text-align: justify;
        text-align-last: left;
        border: 1px solid #000;
      }
    }
  }
}
</style>
