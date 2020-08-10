<template>
  <el-row :gutter="10" class="base-info-wrap">
    <el-col :span="6">
      <div class="base-info-title">姓<span>行</span>名：</div>
      <div class="cont" :class="{ center: !baseInfo.patientName }">
        {{ baseInfo.patientName || '/' }}
      </div>
    </el-col>
    <el-col :span="4">
      <div class="base-info-title">性别：</div>
      <div class="cont" :class="{ center: !baseInfo.patientSex }">
        {{ baseInfo.patientSex || '/' }}
      </div>
    </el-col>
    <el-col :span="4">
      <div class="base-info-title">年龄：</div>
      <div class="cont" :class="{ center: !baseInfo.patientAge }">
        {{ baseInfo.patientAge || '/' }}
      </div>
    </el-col>
    <el-col :span="10">
      <div class="base-info-title">送检单位：</div>
      <div class="cont" :class="{ center: !baseInfo.applyHospital }">
        {{ baseInfo.applyHospital || '/' }}
      </div>
    </el-col>
    <el-col :span="6">
      <div class="base-info-title" :class="{ center: !baseInfo.hospitalNo }">
        住院号：
      </div>
      <div class="cont">{{ baseInfo.hospitalNo || '/' }}</div>
    </el-col>
    <el-col :span="8">
      <div class="base-info-title">病区：</div>
      <div class="cont" :class="{ center: !baseInfo.patientWard }">
        {{ baseInfo.patientWard || '/' }}
      </div>
    </el-col>
    <el-col :span="10">
      <div class="base-info-title">床<span>行行</span>号：</div>
      <div class="cont" :class="{ center: !baseInfo.patientBedNo }">
        {{ baseInfo.patientBedNo || '/' }}
      </div>
    </el-col>
    <el-col :span="14">
      <div class="base-info-title">门诊号：</div>
      <div class="cont" :class="{ center: !baseInfo.sectionNo }">
        {{ baseInfo.sectionNo || '/' }}
      </div>
    </el-col>
    <el-col :span="10">
      <div class="base-info-title">送检医师：</div>
      <div class="cont" :class="{ center: !baseInfo.applyDoctor }">
        {{ baseInfo.applyDoctor || '/' }}
      </div>
    </el-col>
    <el-col :span="14">
      <div class="base-info-title">申请日期：</div>
      <div class="cont" :class="{ center: !baseInfo.applyTime }">
        {{ baseInfo.applyTime || '/' }}
      </div>
    </el-col>
    <el-col :span="10">
      <div class="base-info-title">报告日期：</div>
      <div class="cont" :class="{ center: !baseInfo.reportTime }">
        {{ baseInfo.reportTime || '/' }}
      </div>
    </el-col>
    <el-col :span="24">
      <div class="base-info-title">临床诊断：</div>
      <div class="cont" :class="{ center: !baseInfo.clinicalDiagnosis }">
        {{ baseInfo.clinicalDiagnosis || '/' }}
      </div>
    </el-col>
    <el-col :span="24">
      <div class="base-info-title">病理诊断：</div>
      <div class="cont" :class="{ center: !baseInfo.primaryDiagnosis }">
        {{ baseInfo.primaryDiagnosis || '/' }}
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'BaseInfo',
  props: {
    baseInfo: {
      type: Object,
      default() {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-info-wrap /deep/ {
  padding-bottom: 1em;
  border-bottom: 2px solid #000;
  .el-col {
    display: flex;
    line-height: 1.5em;
    margin-bottom: 0.5em;
  }
  .base-info-title {
    display: inline-block;
    white-space: nowrap;
    font-weight: bold;
    span {
      opacity: 0;
    }
  }
  .cont {
    flex: 1;
    word-break: break-word;
    border-bottom: 1px solid #000;
    &.center {
      text-align: center;
    }
  }
}
</style>
