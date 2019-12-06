<template>
  <div class="category">
    <el-row>
      <span class="title">
        Dans cette catégorie, vous trouverez des aides relatives à la section {{$route.params.theme}}
      </span>
    </el-row>

    <el-row 
      :gutter="20"
      class="sub-categories">
      <el-col 
        :span="4"
        class="sub-category"
        v-for="subCategory in subCategories"
        :key="subCategory.title">
        <div class="icon">
          <Laptop 
            :size="24"
            fillColor="#fff"/>
        </div>
        <span class="sub-category-title">
          {{ subCategory.title }}
        </span>
        <el-button 
          type="text">
          Parcourir
        </el-button>
      </el-col>
    </el-row>
  </div>
  
</template>

<script>
import Laptop from 'vue-material-design-icons/Laptop.vue';
import axios from 'axios';

export default {
  name: 'category',
  data: () => ({
    subCategories: [
      { name: "Sub name 1" },
      { name: "Sub name 2" },
      { name: "Sub name 3" }
    ]
  }),
  watch: {
    '$route.params.theme': {
      handler: function(search) {
        axios
          .get(`http://192.168.1.45:5000/api/subcategory/parent/${this.$route.params.theme}`)
          .then(response => {
            console.log(response.result);
            this.subCategories = response.data.result
            }
          )
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    axios
      .get(`http://192.168.1.45:5000/api/subcategory/parent/${this.$route.params.theme}`)
      .then(response => {
        console.log(response.result);
        this.subCategories = response.data.result
        }
      )
  },
  components: {
    Laptop
  }
}
</script>

<style scoped lang="scss">
.category {
  width: 100%;
  margin: 24px 0;
  .el-row {
    text-align: left;
    .title {
      font-size: 1.2em;
      font-weight: 500;
      margin-bottom: 24px;
    }
  }
  .sub-categories {
    margin: 20px 0 0 0 !important;
    .sub-category {
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
        background: #ff5959;
        margin-bottom: 10px;
      }
      .sub-category-title {
        font-weight: 500;
      }
      button {
        text-align: left;
      }
    }
  }
}
</style>
