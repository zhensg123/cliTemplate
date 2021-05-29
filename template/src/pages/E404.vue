<template>
  <div class="war-con" style="background-color: #f7f9fa">
    <div class="clearfix block">
        <img src="@/assets/imgs/404.png">
        <br/>
        <el-button type="primary" @click="gotoBack" style="margin-top:20px;">返回上一级</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Operation',
  data () {
    return {}
  },
  methods: {
    gotoBack () {
      history.go(-1)
    }
  }
}

</script>
<style scoped lang="scss">
.war-con {
  min-height: 100vh;
  background: #f0f2f5;
  .block {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}

</style>
