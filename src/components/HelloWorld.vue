<template>
  <div class="hello">
      <div class="box">红烧豆腐</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello{
    .box{
        width: 100px;
        height: 100px;
        background: red;
    }
}
</style>
