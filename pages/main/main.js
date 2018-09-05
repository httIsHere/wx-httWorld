// pages/main/main.js
const common = require('../../libs/common.js');
var bmap = require('../../libs/bmap-wx.js');
var BMap;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList: [{
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
    ],
    temperature: '',
    city: ''
  },

  onLoad: function() {
    const _this = this;
    BMap = new bmap.BMapWX({
      ak: common.bmapKey
    }); 
    BMap.weather({
      success: function(data) {
        _this.setData({
          city: data.currentWeather[0].currentCity,
          temperature: data.currentWeather[0].temperature
        })
      }
    }); 
  },

  toTimer: function() {
    wx.navigateTo({
      url: '../timer/timer',
    })
  }
})