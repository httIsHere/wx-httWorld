// pages/main/main.js
const common = require('../../libs/common.js');
var bmap = require('../../libs/bmap-wx.js');
var BMap;
const api = require('../../utils/api.js');

const app = getApp();

Page({
  data: {
    postList: [],
    temperature: '',
    city: '',
    head_img: ''
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
    wx.request({
      url: api.getAllMsg,
      success: function(data) {
        _this.setData({
          postList: data.data
        });
      }
    })
  },
  //下拉刷新
  onPullDownRefresh: function() {
    const _this = this;
    wx.stopPullDownRefresh();
    wx.request({
      url: api.getAllMsg,
      success: function (data) {
        console.log(data.data)
        _this.setData({
          postList: data.data
        });
      }
    })
  },

  toTimer: function() {
    wx.navigateTo({
      url: '../timer/timer',
    })
  },
  toDetail: function(e) {
    let index = e.currentTarget.dataset.index;
    // app.globalData.currentMsg = this.data.postList[index]._id;
    wx.navigateTo({
      url: './subPages/detail/detail?id=' + this.data.postList[index]._id
    })
  }
})