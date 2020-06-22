<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="waterfall">
          <router-link to="/peach-cropper">
            <el-card class="box-card" shadow="hover" @click="toPage('peach-cropper')">
              <div slot="header" class="card-header">
                <span>peach-cropper</span>
              </div>
              <div class="card-item">
                基于cropperjs封装的图片裁剪Vue组件，增加圆形裁剪功能，适用于PC和移动端。
                <br />A cropper component for Vue.js based on cropperjs, add round crop function, available for PC & mobile.
              </div>
            </el-card>
          </router-link>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="waterfall">
          <router-link to="/vue-cesium-scale">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="card-header">
                <span>vue-cesium-scale</span>
              </div>
              <div class="card-item">vue+cesium开发环境下的比例尺功能demo。</div>
            </el-card>
          </router-link>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="waterfall" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  padding: 20px;
  .waterfall {
    width: 100%;
    display: flex;
    flex-direction: column;
    .box-card {
      width: 100%;
      margin-bottom: 20px;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
      .card-item {
        line-height: 1.5;
      }
    }
  }
}
</style>
