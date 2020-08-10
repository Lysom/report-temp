<template>
  <div class="page-footer">
    <slot name="head">
      <p class="announce">{{ footer.announce }}</p>
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="width: 80mm; vertical-align: top;">
            地址：{{ footer.address }}
          </td>
          <td style="width: 30mm; vertical-align: top;">
            邮编：{{ footer.zipCode }}
          </td>
          <td style="width: 60mm; vertical-align: top;">
            联系电话：{{ footer.tel }}
          </td>
        </tr>
      </table>

      <p class="pagination">
        第 {{ pageInfo.currentPage }} 页 / 共 {{ pageInfo.sumPage }} 页
      </p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  props: {
    footer: {
      type: Object,
      default() {
        return {
          announce: '本结论只针对此次样本，如有疑议，请及时与我科联系。',
          address: '浙江省杭州市拱墅区半山东路1号',
          zipCode: '310022',
          tel: '0571-88128271'
        }
      }
    },
    pageInfo: {
      type: Object,
      default() {
        return {
          currentPage: 1,
          sumPage: 1
        }
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page-footer {
  position: absolute;
  top: 272mm;
  width: 170mm;
  line-height: 2em;
  border-top: 1px solid #000;
  overflow: hidden;
  color: #000;
  font-size: 10pt;
  table {
    width: 100%;
    line-height: 1.3em;
  }
  .pagination {
    text-align: center;
  }
}
</style>
