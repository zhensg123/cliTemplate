<template>
  <div style="background-color: #ffffff">
    <el-card class="box-card" shadow='never'>
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <el-form label-width="108px" class="cloud-form">
        <el-form-item label="分组名称:"  required>
          <cloud-input v-model.trim="basicInfo.gname" maxlength="64"></cloud-input>
          <div class="form-item-tip">
            <i class="el-icon-warning"></i>支持英文、数字、下划线，且以英文开头，4~64个字符，名字唯一
          </div>
        </el-form-item>
        <el-form-item label="访问类型:" required>
          <cloud-select v-model="basicInfo.visitType" filterable :items="visitTypeList">
          </cloud-select>
        </el-form-item>
        <el-form-item label="所属团队:" required>
          <cloud-select v-model="basicInfo.teamId" filterable :items="teamList">
          </cloud-select>
        </el-form-item>
        <el-form-item label="描述信息:" >
          <cloud-input type="textarea" :rows="4" v-model="basicInfo.gdesc" maxlength="1024" show-word-limit></cloud-input>
          <div class="form-item-tip">
            <i class="el-icon-warning"></i>不超过1024个字符
          </div>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      basicInfo: {
        gname: '',
        visitType: 1,
        teamId: '',
        gdesc: ''
      },
      visitTypeList: [{
        value: 1,
        label: '内网访问'
      }, {
        value: 2,
        label: '公网访问'
      }]
    }
  },
  computed: {
    teamList () {
      let teams = this.$me.teams
      return teams.map(item => {
        return {
          label: item.name,
          value: item.id
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
