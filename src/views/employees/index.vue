<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tools :show-before="true">
        <template v-slot:before>
          <span>共50条记录</span>
        </template>
        <template v-slot:after>
          <el-button size="small" type="danger">普通excel导出</el-button>
          <el-button size="small" type="info">复杂表头excel导出</el-button>
          <el-button size="small" type="success">excel导入</el-button>
          <el-button size="small" type="primary">新增员工</el-button>
        </template>
      </page-tools>
    </div>
  </div>
</template>

<script>
import pageTools from '@/components/pageTools'
export default {
  components: {
    pageTools
  }
}
</script>

  <style>

  </style>
