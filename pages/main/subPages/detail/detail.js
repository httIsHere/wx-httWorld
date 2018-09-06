// pages/main/subPages/detail/detail.js

const api = require('../../../../utils/api.js');
const utils = require('../../../../utils/util.js');

Page({
  data: {
  },
  onLoad: function(options) {
    const _this = this;
    wx.request({
      url: api.getDetail,
      method: 'post',
      data: {
        id: options.id || '5b90e0624ac6a30d38e05e41'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(data) {
        _this.setData(data.data);
        if (data.data.resources.length === 0) {
          _this.setData({
            defaultImage: '../../../../assets/cat.jpg'
          })
        }
        let _time = parseInt(parseInt(data.data.date) / 1);
        let _newTime = new Date(_time);
        _this.setData({
          year: utils.formatNumber(_newTime.getFullYear()),
          month: utils.formatNumber(_newTime.getMonth() + 1),
            day: utils.formatNumber(_newTime.getDate())
        })
      }
    })
  },
  backPre: function() {
    wx.navigateBack();
  }
})