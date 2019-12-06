<template>
  <div class="home">
    <el-row>
      <el-col class="left" :span="12">
        <span class="main-title">Ne restez pas bloqués avec les démarches administratives</span>
        <span class="small-title">REST, une communauté impliquée et prête à vous aider</span>
        <el-button type="primary" plain>Explorer</el-button>
      </el-col>
      <el-col class="right" :span="12">
        <img src="../assets/HomePage.svg">
      </el-col>
    </el-row>
    

    <el-row class="home-content">
      <el-row>
        <span class="medium-title">
          Rubriques d'aide
        </span>
      </el-row>

      <el-row 
        class="themes"
        :gutter="20">
        <el-col 
          :span="6"
          class="theme"
          v-for="theme in themes"
          :key="theme.title">
            <div class="icon">
              <Home 
                :size="24"
                fillColor="#fff"/>
            </div>
            <span class="theme-title">
              {{ theme.title }}
            </span>
            <span class="theme-desc">
              {{ theme.desc }}
            </span>
            <el-button 
              type="text"
              @click="switchTheme(theme.categoryId)">
              Parcourir
            </el-button>
        </el-col>
      </el-row>
    </el-row>

    <el-row class="category">
      <router-view/>
    </el-row>
  </div>
</template>

<script>
import Home from 'vue-material-design-icons/HomeCityOutline.vue';
import axios from 'axios'

export default {
    name: 'home',
    data: () => ({
      themes: [
        { name: "Logements" },
        { name: "Administration" },
        { name: "Formations" }
      ]
    }),
    methods: {
      switchTheme(id) {
        console.log(id);
        this.$router.push({ path: `/home/${id}` })
      }
    },
    mounted () {
      axios
        .get('http://192.168.1.45:5000/api/category')
        .then(response => {
          console.log(response.result);
          this.themes = response.data.result
          }
        )
    },
    components: {
      Home
    }
}
</script>

<style lang="scss" scoped>
.home {
  .el-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    justify-content: center;
    > * {
      margin: 12px 0;
    }
  }
  .right {
    img {
      max-height: 50vh;
    }
  }
  .main-title {
    margin: 24px 0;
    font-weight: 700;
    font-size: 3em
  }
  .small-title {
    font-size: 1.5em;
  }
  .home-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    text-align: left;
    .medium-title {
      font-size: 1.5em;
      font-weight: 600;
      margin-bottom: 24px;
    }
    .themes {
      justify-content: start;
      align-items: flex-start;
      width: 100%;
      margin: 0 !important;
    }
    .theme {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      padding: 24px !important;
      box-sizing: border-box;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      border-radius: 18px;
      .icon {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #66DED0;
        margin-bottom: 10px;
      }
      .theme-title {
        font-weight: 500;
      }
      .theme-desc {
        font-weight: 400;
        font-size: 14px;
        color: #888;
      }
      button {
        text-align: left;
      }
    }
  }
  .category {
    justify-content: start;
  }
}
</style>