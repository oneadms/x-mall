const Mock = require('mockjs')
const express = require('express')
const MockData = require('./mock.js')



const app = express()

app.use((req, res, next) => {
    // 在这里可以对请求进行处理或记录
    console.log('Request intercepted!');
    console.log(req.originalUrl)
    // 如果你想要继续处理请求，需要调用 next() 方法
    res.send(Mock.mock(MockData[req.originalUrl]))
    next();
});

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})