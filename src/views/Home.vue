<template>
  <div class="home">
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col 
        :span="12"
        class="main-message">
          Relax, vous allez être aidé.
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .main-message {
    font-weight: 500;
    font-size: 48px;
  }
}
.el-row {
  height: 10px;
  .el-col {
    min-height: 50px;
  }
}
</style>
