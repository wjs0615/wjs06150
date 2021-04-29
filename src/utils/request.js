//1. 导入axios依赖包,axios确定已经装上了
import axios from "axios";

//导入vuex配置文件信息
import store from "@/store.js";

//2. 创建axios实例对象
const Server = axios.create({
    baseURL:"",//接口基准地址，比如管理后台的地址
    timeout:5000,//超时时间
});

//3. 定义请求拦截器的代码? 管理后台token值统一在此处添加
Server.interceptors.request.use((config)=>{
    console.log('请求拦截器',config);

    //请求拦截器中，在header头中，添加token值  
    // config['headers']['Authorization'] = store.state.admin_token;

    //返回axios的配置信息即可。 如果不返回会报错的。
    return  config;
},(error)=>{
    //错误的时候触发的方法
    return Promise.reject(error);
})

//4. 定义相应拦截器，接口返回的数据统一处理
Server.interceptors.response.use((response)=>{
    console.log("相应拦截器",response);

    //从服务端返回过来的数据中，成功的情况下,取出data数据
    if(response.status == 200){
        return response.data;
    }

   return response;//返回响应的数据信息
},(error)=>{
    //错误的时候触发的方法
    return Promise.reject(error);
});

//5. 抛出server对象
export default Server;