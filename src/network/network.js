import axios from 'axios'

export function request(options) {
    //创建axios实例对象
    const instance = axios.create({
      baseURL: "http://152.136.185.210:8000/api/w6",
      timeout:5000
    })

    //拦截器
    instance.interceptors.request.use(config => {
      console.log(config)
      return config
    }, err => {
      console.log(err);
    })
  
    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
        console.log(err)
    })

    //通过实例发送网络请求
    return instance(options)
}