import axios from 'axios'
import store from '@/store'
import { getCookie } from '@/utils/cookie'
// 需要用application/x-www-form-urlencoded的话，打开以下备注
// import qs from 'qs';

// 创建一个自定义配置的axios实例
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // 环境变量中的api
    timeout: 10000, // 超时时间（ms），0 表示无超时时间
    responseType: 'json', // 默认
})

// 添加一个请求拦截器
instance.interceptors.request.use(
    config => {
        // 将登录数据加入到headers中
        if (store.getters.token && store.getters.username) {
            config.headers['token'] = getCookie('token')
            config.headers['username'] = getCookie('username')
        }
        // 判断传入的数据类型
        // 判断是否是formdata类型
        let isFormData = (v) => {
            return Object.prototype.toString.call(v) === '[object FormData]';
        }

        // 将传入数据打印到控制台
        console.log("发送给" + config.url + "的数据为：")
        if (isFormData(config.data)) {
            for (var [a, b] of config.data.entries()) {
                console.log(a + "：", b);
            }
        } else {
            console.log(config.data)
        }

        // axios的默认请求类型是application/json，
        // 根据项目需求，如果需要用application/x-www-form-urlencoded的话，打开以下备注
        // config.data = qs.stringify(config.data)

        return config
    },
    error => {
        console.log('报错了！', error)
        return Promise.reject(error)
    }
)

// 添加一个响应拦截器
instance.interceptors.response.use(
    response => {
        const res = response.data
        // 判断返回数据类型
        // 如果返回数据类型是JSON，打印到控制台，并根据返回code值做拦截
        // 判断是否是object类型
        let isObject = (v) => {
            return Object.prototype.toString.call(v) === '[object Object]';
        }
        if (isObject(res)) {
            // 将返回数据打印到控制台
            console.log(response.config.url + "返回的数据为：", res)
            // 后端返回数据code=0时，为成功
            if (res.code !== 0) {
                // 返回交互消息，可自行替换成交互组件
                console.log(res.msg || '数据异常')
                return Promise.reject(new Error(res.msg || 'Error'))
            }
        }
        else {
            return res
        }
    },
    error => {
        console.log(error)
        // 返回交互消息，可自行替换成交互组件
        console.log(error.message || '返回数据出错')
        return Promise.reject(error)
    }
)

export default instance