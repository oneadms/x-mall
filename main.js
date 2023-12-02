import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import {Request} from "@/api/request";
Request.mount()
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
import {createSSRApp} from 'vue'
app.$mount()
// #endif

// #ifdef VUE3
export function createApp() {
    const app = createSSRApp(App)
    return {
        app
    }
}

// #endif