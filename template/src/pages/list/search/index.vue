<template>
  <div>
    <div class="bread-box">
      <cloud-breadcrumb :items="items"></cloud-breadcrumb>
    </div>
    <div class="outer-wrap">
      <cloud-query-form
        :schema="querySchema"
        v-model="queryObj"
        @query="query">
      </cloud-query-form>
      <cloud-table
        style="margin-top: 10px;"
        v-loading="loading"
        :option="tableOption"
        @pagination-current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :currentPage="currentPage"
        :pageSize="pageSize">
      </cloud-table>
    </div>
  </div>
</template>

<script>
let schema = [
  {
    name: 'name',
    label: '名称:',
    type: 'input'
  },
  {
    name: 'mobile',
    label: '手机号:',
    placeholder: '请选择手机号',
    type: 'select',
    filterable: true,
    options: [{
      id: 11,
      value: '13111111111',
      label: '13111111111'
    },
    {
      id: 22,
      value: '15888888888',
      label: '15888888888'
    }]
  },
  {
    name: 'like',
    label: '喜欢:',
    type: 'checkbox',
    options: [{
      id: 11,
      name: 'run'
    },
    {
      id: 22,
      name: 'swim'
    }]
  },
  {
    name: 'sex',
    label: '性别:',
    type: 'radio',
    options: [{
      id: 1,
      name: '女'
    },
    {
      id: 2,
      name: '男'
    }]
  },
  {
    name: 'flowname',
    label: '流程名称:',
    type: 'select',
    options: []
  },
  {
    name: 'else',
    label: '其他:',
    type: 'input'
  },
  {
    name: 'person',
    label: '申请人:',
    type: 'input'
  },
  {
    name: 'else222',
    label: '其他222:',
    type: 'input'
  },
  {
    name: 'staff',
    label: '相关人',
    type: 'remote', // 远程搜索
    options: [],
    funs: null // 远程搜索回调
  }
]
export default {
  name: 'index',
  data () {
    return {
      items: this.$route.meta.breadcrumb,
      querySchema: schema,
      queryObj: { // 对应搜索表单字段,自定义
        name: '',
        mobile: '',
        like: [],
        sex: '',
        flowname: '',
        else: '',
        person: '',
        else222: '',
        staff: ''
      },
      loading: false,
      tableOption: {
        data: [],
        th: [{
          title: '消费日期',
          name: 'costStartDate',
          width: 150,
          hasTips: true
        }, {
          title: '流水号',
          name: 'billFlowNum',
          width: 180,
          hasTips: true
        }, {
          title: '使用BU',
          name: 'buName',
          width: 150,
          hasTips: true
        }, {
          title: '使用业务线',
          width: 120,
          name: 'blName',
          hasTips: true
        }, {
          title: '资源分类',
          width: 100,
          name: 'costTypeName',
          hasTips: true
        }, {
          title: '计费项',
          name: 'costOptionName',
          hasTips: true
        }, {
          title: '价格表达',
          name: 'costUnitPrice',
          hasTips: true
        }],
        total: 0, // 表格数据总数量
        pagination: true
      },
      currentPage: 1,
      pageSize: 10
    }
  },
  methods: {
    init () {
      this.$funs.getFieldFromSchema(schema, 'flowname').options = [{
        value: '流程1',
        label: '流程1'
      }]
    },
    query () {
    },
    handleCurrentChange (page) {
      this.currentPage = page
    },
    handleSizeChange (size) {
      this.pageSize = size
    }
  },
  created () {
    this.init()
  }

}
</script>

<style scoped>

</style>
