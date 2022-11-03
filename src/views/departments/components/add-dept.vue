<template>
  <el-dialog title="新增部门" :visible="showDialog" @close="btnCancel">
    <el-form ref="deptForm" :model="formData" :rules="rules" label-width="120px">
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="formData.name" style="width:80%" placeholder="1-50个字符" />
      </el-form-item>
      <el-form-item label="部门编码" prop="code">
        <el-input v-model="formData.code" style="width:80%" placeholder="1-50个字符" />
      </el-form-item>
      <el-form-item label="部门负责人" prop="manager">
        <el-select v-model="formData.manager" placeholder="请选择" @focus="getEmployeeSimple">
          <el-option v-for="item in peoples" :key="item.id" :label="item.username" :value="item.username" />
        </el-select>
      </el-form-item>
      <el-form-item label="部门介绍" prop="introduce">
        <el-input v-model="formData.introduce" style="width:80%" placeholder="1-300个字符" type="textarea" :rows="3" />
      </el-form-item>
    </el-form>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-button size="small" @click="btnCancel">取消</el-button>
        <el-button type="primary" size="small" @click="btnOk">确定</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { getDepartments, addDepartments } from '@/api/departments'
import { getEmployeeSimple } from '@/api/employees'
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    treeNode: {
      type: Object,
      default: null
    }
  },
  data() {
    const checkNameRepeat = async(rule, value, callback) => {
      const { depts } = await getDepartments()
      const isRepeat = depts.filter(item => item.pid === this.treeNode.id).some(item => item.name === value)
      isRepeat ? callback(new Error(`同级部门下已经有${value}部门了`)) : callback()
    }
    const checkCodeRepeat = async(rule, value, callback) => {
      const { depts } = await getDepartments()
      const isRepeat = depts.some(item => item.code === value && value)
      isRepeat ? callback(new Error(`组织架构下已经有部门使用${value}编码了`)) : callback()
    }
    return {
      formData: {
        name: '',
        code: '',
        manager: '',
        introduce: ''
      },
      rules: {
        name: [{ required: true, message: '部门名称不能为空', trigger: 'blur' }, {
          min: 1, max: 50, message: '部门名称长度需为1-50个字符'
        }, { trigger: 'blur', validator: checkNameRepeat }],
        code: [{ required: true, message: '部门编码不能为空', trigger: 'blur' }, {
          min: 1, max: 50, message: '部门编码长度需为1-50个字符'
        }, { trigger: 'blur', validator: checkCodeRepeat }],
        manager: [{ required: true, message: '部门负责人不能为空', trigger: 'blur' }],
        introduce: [{ required: true, message: '部门介绍不能为空', trigger: 'blur' }, {
          min: 1, max: 300, message: '部门介绍长度需为1-300个字符'
        }]
      },
      peoples: []
    }
  },
  methods: {
    async getEmployeeSimple() {
      this.peoples = await getEmployeeSimple()
    },
    btnOk() {
      this.$refs.deptForm.validate(async isOk => {
        if (isOk) {
          await addDepartments({ ...this.formData, pid: this.treeNode.id })
          this.$emit('addDepts')
          this.$emit('update:showDialog', false)
        }
      })
    },
    btnCancel() {
      this.$refs.deptForm.resetFields()
      this.$emit('update:showDialog', false)
    }
  }
}
</script>

<style>

</style>
