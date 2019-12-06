<template>
  <div class="login">
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
      <el-col :span="8"/>
      <el-col :span="8">
        <el-card class="login-card">
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
            <el-button round @click="load(true)">Connexion</el-button>
            <el-button round>Inscription</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8"/>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Google from 'vue-material-design-icons/Google.vue';
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data: () => ({
    firstName: '',
    lastName: '',
    password: ''
  }),
  methods: {
    ...mapActions([
      'load'
    ])
  },
  components: {
    Google
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  .main-message {
    font-weight: 500;
    font-size: 48px;
  }
  .login-card {
    margin-top: 48px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    .header {
      background: #c6e2ff;
      color: #fff;
      font-weight: 600;
      box-sizing: border-box;
      padding: 24px 0;
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
      padding: 24px 0;
      > * {
        margin: 10px 0;
      }
    }
    .footer {
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
