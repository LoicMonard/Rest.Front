<template>
  <el-container id="app" v-loading="loading">
    <el-header>
      <el-row>
        <el-col :span="12" style="text-align: left">
          <img src="./assets/sacred-cow.svg">
          <span id="brand">REST</span>
        </el-col>
        <el-col class="right" :span="12" style="justify-content: flex-end">
          <el-button round>Inscription</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'loading'
      // ...
    ])
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
}

#app {
  font-family: 'Google Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header {
  border-bottom: 1px solid #ebebeb;
  #brand {
    font-weight: 800;
    font-size: 24px;
    color: #383838;
  }
  padding: 10px 15% !important;
  align-items: center;
  div {
    height: 100%;
  }
  img {
    height: 100%;
    margin-right: 10px;
  }
  .el-col {
    display: flex;
    align-items: center;
  }
}

.el-main {
  height: calc(100vh - 60px);
  padding: 64px 15% 0 15% !important;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
