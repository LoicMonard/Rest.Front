<template>
  <el-container id="app">
    <el-header>
      <el-row>
        <el-col :span="12" style="text-align: left">
          <img src="./assets/sacred-cow.svg">
          <span id="brand">REST</span>
        </el-col>
        <el-col class="right" :span="12" style="justify-content: flex-end">
          Ok
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

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
