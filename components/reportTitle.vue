<template>
  <div class="title-wrap">
    <img :src="titleInfo.imgURL" />
    <h1>{{ titleInfo.title }}</h1>
    <h2>{{ titleInfo.subTitle }}</h2>
    <h2>{{ titleInfo.reportName }}</h2>
  </div>
</template>

<script>
import img from '../assets/logo.png'
export default {
  name: 'ReportTitle',
  props: {
    titleInfo: {
      type: Object,
      default() {
        return {
          imgURL: img,
          title: '中国科学院大学附属肿瘤医院',
          subTitle: '（浙江省肿瘤医院）',
          reportName: '分子病理检测报告单'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title-wrap {
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5mm;
  img {
    position: absolute;
    top: 0;
    left: -26mm;
    width: 63pt;
    height: 63pt;
  }
  h1,
  h2 {
    height: 21px;
    line-height: 21pt;
    margin: 0 0 2mm 0;
    padding: 0;
    font-size: 14pt;
    font-weight: bold;
    text-align: center;
  }
}
</style>
