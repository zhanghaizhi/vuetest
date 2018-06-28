import axios from 'axios'
import qs from 'qs'
import { Message } from "element-ui";
import router from "../router";

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = "";
axios.defaults.withCredentials = false

axios.interceptors.request.use((config) => {
    if(undefined != config.headers['Content-Type'] && config.headers['Content-Type'].toLowerCase().indexOf("application/json") >= 0) {
        return config;
    }
    if(config.method === 'post' || config.method === "put" || config.method === "delete") {
        if (!(config.data instanceof FormData)){
         	config.data = qs.stringify(config.data, {
            	indices: false
        	});
    	}
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
    const code = res.data.resCode
    if(code == 200) {
        return res;
    } else if(code == 401) {
        Message({
            showClose: true,
            type: 'error',
            message: "登录超时，请重新登录"
        });
        router.push({
            path: "/login"
        });
        return res;
    } else {
        // 若不是正确的返回code，且已经登录，就抛出错误
        if(code) {
        	Message({
	            showClose: true,
	            type: 'error',
	            message: res.data.resMsg
	        });
        }
        return res
    }
}, (err) => {
    if(err && err.response) {
        switch(err.response.status) {
            case 400:
                err.message = '请求错误'
                break

            case 401:
                err.message = '未授权，请登录'
                break

            case 403:
                err.message = '拒绝访问'
                break

            case 404:
                err.message = `登录失效`
                break

            case 408:
                err.message = '请求超时'
                break

            case 500:
                err.message = '服务器内部错误'
                break

            case 501:
                err.message = '服务未实现'
                break

            case 502:
                err.message = '网关错误'
                break

            case 503:
                err.message = '服务不可用'
                break

            case 504:
                err.message = '网关超时'
                break

            case 505:
                err.message = 'HTTP版本不受支持'
                break

            default:
        }
        Message({
            showClose: true,
            type: 'error',
            message: err.message
        });
        if(err.response.status == 401 || err.response.status == 403 || err.response.status == 404){
            router.push({
              path: "/login"
            });
        }
        
    }
});

export default axios