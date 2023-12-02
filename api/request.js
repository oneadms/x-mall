import Vue from 'vue'
import request from "../api/request";

export default {

    BASE_URL: "http://192.168.1.5:8081",

    $post: function (url, data, loading = false) {
        if (loading) {

            uni.showLoading("加载中");
        }
        return new Promise((resolve, reject) => {
            uni.request({
                url: `${this.BASE_URL}${url}`,
                method: "POST",
                data: data
            }).then(resp => {


                resolve(resp);
                if (loading) {
                    setTimeout(() => {

                        uni.hideLoading();
                    }, 200)
                }
            }).catch(e => {
                reject(e)
            })
        })

    },
    $get: function (url, data) {

        return uni.request({
            url: `${this.BASE_URL}${url}`,
            method: "GET",
            data: data
        })
    }

}

export const Request = {

    mount() {
        for (let methodName in request) {
            Vue.prototype[methodName] = request[methodName];
        }

    }
}