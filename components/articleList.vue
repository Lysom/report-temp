<template>
  <div class="article-wrap">
    <el-row
      type="flex"
      v-for="(item, index) in articleList"
      :key="`article-item-${index}`"
    >
      <el-col class="code-col"> {{ index + 1 }}{{ dotType }} </el-col>
      <el-col>
        {{ item }}
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  props: {
    articleList: {
      type: Array,
      default() {
        return []
      }
    },
    dotType: {
      type: String,
      default: '、'
    }
  }
}
</script>

<style lang="scss" scoped>
.article-wrap /deep/ {
  .el-row {
    line-height: 1.4em;
    margin-bottom: .3em;
  }
  .code-col {
    width: 30px;
  }
}
</style>
