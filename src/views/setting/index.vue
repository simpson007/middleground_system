<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-tabs>
          <el-tab-pane label="角色管理">
            <el-row style="height:60px">
              <el-button size="small" type="primary">新增角色</el-button>
            </el-row>
            <el-table border="">
              <el-table-column label="序号" width="150px" />
              <el-table-column label="角色" width="300px" />
              <el-table-column label="描述" />
              <el-table-column label="操作">
                <el-button size="small" type="success">分配权限</el-button>
                <el-button size="small" type="primary">编辑</el-button>
                <el-button size="small" type="danger">删除</el-button>
              </el-table-column>
            </el-table>
            <el-row type="flex" justify="center" align="middle" style="height:60px">
              <el-pagination layout="prev, pager, next" />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="公司信息">
            <el-alert type="info" show-icon :closable="false" title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改" />
            <el-form label-width="120px" style="margin-top:40px">
              <el-form-item label="公司名称">
                <el-input :disabled="true" style="width:400px" />
              </el-form-item>
              <el-form-item label="公司地址">
                <el-input :disabled="true" style="width:400px" />
              </el-form-item>
              <el-form-item label="公司邮箱">
                <el-input :disabled="true" style="width:400px" />
              </el-form-item>
              <el-form-item label="备注">
                <el-input :disabled="true" style="width:400px" type="textarea" :rows="3" />
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

  <style>

  </style>
