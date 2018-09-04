// pages/home/home.js
const app = getApp();
Page({
  data: {
    hasUserInfo: true,
    userInfo: {},
    postList: [
      {
        posterId: 121212,
        posterName: '汪里个汪',
        postMsg: "在页面上使用该模板，通过is判断使用哪个模板,这里我们使用name为courseStudent模板（此处使用的是列表循环，所以data值为item）；",
        resources: [
          'https://developers.weixin.qq.com/miniprogram/dev/image/tabbar.png?t=18082922'
        ],
        date: new Date().getTime(),
        like: 123,
        comments: []
      },
      {
        posterId: 121212,
        posterName: '汪里个汪',
        postMsg: "在页面上使用该模板，通过is判断使用哪个模板,这里我们使用name为courseStudent模板（此处使用的是列表循环，所以data值为item）；",
        resources: [
          'https://developers.weixin.qq.com/miniprogram/dev/image/tabbar.png?t=18082922'
        ],
        date: new Date().getTime(),
        like: 123,
        comments: []
      },
      {
        posterId: 121212,
        posterName: '汪里个汪',
        postMsg: "在页面上使用该模板，通过is判断使用哪个模板,这里我们使用name为courseStudent模板（此处使用的是列表循环，所以data值为item）；",
        resources: [
          'https://developers.weixin.qq.com/miniprogram/dev/image/tabbar.png?t=18082922'
        ],
        date: new Date().getTime(),
        like: 123,
        comments: []
      },
      {
        posterId: 121212,
        posterName: '汪里个汪',
        postMsg: "在页面上使用该模板，通过is判断使用哪个模板,这里我们使用name为courseStudent模板（此处使用的是列表循环，所以data值为item）；",
        resources: [
          'https://developers.weixin.qq.com/miniprogram/dev/image/tabbar.png?t=18082922'
        ],
        date: new Date().getTime(),
        like: 123,
        comments: []
      },
      {
        posterId: 121212,
        posterName: '汪里个汪',
        postMsg: "在页面上使用该模板，通过is判断使用哪个模板,这里我们使用name为courseStudent模板（此处使用的是列表循环，所以data值为item）；",
        resources: [
          'https://developers.weixin.qq.com/miniprogram/dev/image/tabbar.png?t=18082922'
        ],
        date: new Date().getTime(),
        like: 123,
        comments: []
      },
    ]
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: app.globalData.userInfo
      })
    }
  },
  getUserInfo: function() {
    const _this = this;
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              app.globalData.userInfo = res.userInfo
              _this.setData({
                hasUserInfo: true,
                userInfo: app.globalData.userInfo
              })

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (app.userInfoReadyCallback) {
                app.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  }
})