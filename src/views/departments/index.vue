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
import { getDepartments } from '@/api/departments'
export default {
  components: {
    TreeTools
  },
  data() {
    return {
      company: {},
      departs: [],
      defaultProps: {
        label: 'name'
      }
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      const result = await getDepartments()
      this.company = { name: result.companyName, manager: '负责人' }
      this.departs = result.depts
      console.log(result)
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
