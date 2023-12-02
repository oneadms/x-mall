const Mock = require('mockjs')
module.exports = {
    // 模拟一个获取用户信息的接口
    '/api/user': {
        code: 0,
        message: '',
        data: {
            name: '@ctitle',
            'age|1-100': 18,
            'gender': () => Mock.Random.pick(['男', '女'])
        }
    },
    // 模拟一个获取商品列表的接口
    '/api/goods': {
        code: 0,
        message: '',
        'data|18': [
            {
                'id|1-1000': 1,
                name: '@ctitle',
                price: () => Mock.Random.float(9.9, 10000).toFixed(2),
                imgUrl: () => Mock.Random.image('200x200',
                    Mock.Random.color(), Mock.Random.color(), Mock.Random.ctitle(1, 10)),


            }
        ]
    },

    '/api/goods/detail': {
        code: 0,
        message: '',
        'data':
            {
                'id|1-1000': 1,
                name: () => Mock.Random.ctitle(35, 50),
                'price|1-10000': 1,
                "bannerList|4": [() => Mock.Random.image('200x200',
                    Mock.Random.color(), Mock.Random.color(), Mock.Random.ctitle(1, 10))],
                "genuine|1": false,//是否正品

                "provideInvoice|1": false,//提供发票
                "params|3": [
                    {
                        title: () => Mock.Random.ctitle(4, 4),
                        content: () => Mock.Random.ctitle(4, 4)
                    }

                ],
                "shoppedUserList|5": [
                    {
                        "userId|1-1000": 1,
                        "avatar": () => Mock.Random.image('200x200',
                            Mock.Random.color(), Mock.Random.color(), Mock.Random.ctitle(1, 10)),
                        "userName": "@ctitle"

                    }],
                "comments|10-20": [
                    {
                        "name": "@ctitle",
                        "avatar": () => Mock.Random.image('200x200',
                            Mock.Random.color(), Mock.Random.color(), Mock.Random.ctitle(1, 10)),
                        "content":()=>Mock.Random.ctitle(16,255),
                        "children|3-5": [
                            {
                                "name": "@ctitle",
                                "avatar": () => Mock.Random.image('200x200',
                                    Mock.Random.color(), Mock.Random.color(), Mock.Random.ctitle(1, 10)),
                                "content":"@ctitle",
                                "children|3-5": [
                                    {
                                        "name": "@ctitle",
                                        "avatar": () => Mock.Random.image('200x200',
                                            Mock.Random.color(), Mock.Random.color(), Mock.Random.ctitle(1, 10)),
                                        "content":()=>Mock.Random.ctitle(16,255),
                                        "children": [
                                            {
                                                "name": "@ctitle",
                                                "avatar": () => Mock.Random.image('200x200',
                                                    Mock.Random.color(), Mock.Random.color(), Mock.Random.ctitle(1, 10)),
                                                "content":()=>Mock.Random.ctitle(16,255),
                                            }
                                        ]

                                    }
                                ]
                            }
                        ]
                    }

                ]
            }

    },


    //模拟消息列表
    '/api/message': {
        code: 0,
        message: '',
        'data|100': [{
            'roomId|1-1000': 1,
            roomName: "@ctitle",
            roomLogo: () => Mock.Random.image('200x200', Mock.Random.color(),
                Mock.Random.color(), Mock.Random.ctitle(1, 10)),
            lastMessage:
                {
                    userInfo: {
                        'id|1-1000': 1,
                        name: "@ctitle",
                        avatar: () => Mock.Random.image('200x200', Mock.Random.color(),
                            Mock.Random.color(), Mock.Random.ctitle(1, 10))
                    },
                    content: "@ctitle"
                }

        }
        ]
    }
}