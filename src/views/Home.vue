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
    
    <el-row>
      <el-col :span="9"/>
      <el-col :span="6">
        <div class="login-card">
          <div class="header">
            <span>Login</span>
            <Google 
              :size="24"
              fillColor="#fff"/>
          </div>
          <div class="body">
            <el-input placeholder="First name" v-model="firstName"></el-input>
            <el-input placeholder="Email" v-model="lastName"></el-input>
            <el-input placeholder="Password" v-model="password" show-password></el-input>
          </div>
          <div class="footer">
            <el-button round>Connexion</el-button>
            <el-button round>Inscription</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="9"/>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Google from 'vue-material-design-icons/Google.vue';

export default {
  name: 'home',
  data: () => ({
    firstName: '',
    lastName: '',
    password: ''
  }),
  components: {
    HelloWorld,
    Google
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
  .login-card {
    margin-top: 36px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    .header {
      background: #c6e2ff;
      color: #fff;
      font-weight: 600;
      box-sizing: border-box;
      padding: 24px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      span {
        margin: 4px 0;
      }
    }
    .body {
      padding: 24px;
      > * {
        margin: 10px 0;
      }
    }
    .footer {
      margin-bottom: 24px;
    }
  }
}
.el-row {
  height: 10px;
  .el-col {
    min-height: 50px;
  }
}
</style>
