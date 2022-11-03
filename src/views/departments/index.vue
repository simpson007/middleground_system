<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <tree-tools :tree-node="company" :is-root="true" @addDepts="addDepts" />
        <el-tree :data="departs" :props="defaultProps" default-expand-all>
          <tree-tools slot-scope="{data}" :tree-node="data" @delDepts="getDepartments" @addDepts="addDepts" />
        </el-tree>
      </el-card>
      <add-dept :show-dialog="showDialog" />
    </div>
  </div>
</template>

<script>
import TreeTools from './components/tree-tools.vue'
import AddDept from './components/add-dept.vue'
import { getDepartments } from '@/api/departments'
import { tranListToTreeData } from '@/utils'
export default {
  components: {
    TreeTools, AddDept
  },
  data() {
    return {
      company: {},
      departs: [],
      defaultProps: {
        label: 'name'
      },
      showDialog: false
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      const result = await getDepartments()
      this.company = { name: result.companyName, manager: '负责人' }
      this.departs = tranListToTreeData(result.depts, '')
      console.log(result)
    },
    addDepts(node) {
      this.showDialog = true
      this.node = node
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
