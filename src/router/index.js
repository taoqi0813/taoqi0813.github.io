import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Index/index.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/peach-cropper',
      component: () => import('@/views/Cropper/index.vue'),
      meta: {
        title: 'peach-cropper'
      }
    },
    {
      path: '/vue-cesium-scale',
      component: () => import('@/views/Scale/index.vue'),
      meta: {
        title: 'vue-cesium-scale'
      }
    }
  ]
})
