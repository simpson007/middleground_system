<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <el-row type="flex" justify="space-between" align="middle" style="height: 40px">
          <el-col>
            <span>江苏天泽科技有限公司</span>
          </el-col>
          <el-col :span="4">
            <el-row type="flex" justify="end">
              <el-col>
                负责人
              </el-col>
              <el-col>
                <el-dropdown>
                  <span>操作<i class="el-icon-arrow-down" /></span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      添加子部门
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-tree :data="departs" :props="defaultProps" :default-expend-all="true">
          <el-row slot-scope="{data}" type="flex" justify="space-between" align="middle" style="width: 100%;height: 40px">
            <el-col>
              <span>{{ data.name }}</span>
            </el-col>
            <el-col :span="4">
              <el-row type="flex" justify="end">
                <el-col>
                  {{ data.manager }}
                </el-col>
                <el-col>
                  <el-dropdown>
                    <span>操作<i class="el-icon-arrow-down" /></span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>
                        添加子部门
                      </el-dropdown-item>
                      <el-dropdown-item>
                        编辑部门
                      </el-dropdown-item>
                      <el-dropdown-item>
                        删除部门
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
