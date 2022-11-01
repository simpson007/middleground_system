<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <tree-tools :tree-node="company" :is-root="true" />
        <el-tree :data="departs" :props="defaultProps" default-expand-all>
          <tree-tools slot-scope="{data}" :tree-node="data" />
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
import TreeTools from './components/tree-tools.vue'
export default {
  components: {
    TreeTools
  },
  data() {
    return {
      company: { name: '江苏天泽科技有限公司', manager: '负责人' },
      departs: [{ name: '总裁办', manager: '孙策', children: [{ name: '董事会', manager: '孙权' }] },
        { name: '行政部', manager: '周瑜' }, { name: '人事部', manager: '张昭' }
      ],
      defaultProps: {
        label: 'name'
      }
    }
  }

}
</script>

  <style scoped>
    .tree-card{
      padding: 30px 140px;
      font-size: 14px;
    }
  </style>
