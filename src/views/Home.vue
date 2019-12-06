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
  </div>
</template>

<script>
export default {
    
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
}
</style>