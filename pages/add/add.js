// pages/add/add.js
const app = getApp();
Page({
  data: {
    currentWords: 0,
    maxWords: 200,
    wordsNumColor: '#999',
    resources: [],
    showPreview: false,
    enableSubmit: false,
    msg: ""
  },
  //对输入字数的限制
  inputMsg: function(e) {
    var _msg = e.detail.value;
    if (_msg.length > this.data.maxWords) {
      this.setData({
        currentWords: _msg.length,
        wordsNumColor: "rgb(200,0,0)"
      });
    } else {
      if(_msg.length > 0 || this.data.resources.length) {
        this.setData({
          enableSubmit: true
        })
      } else if (_msg.length == 0) {
        this.setData({
          enableSubmit: false
        })
      }
      this.setData({
        currentWords: _msg.length,
        wordsNumColor: "#999"
      });
    }
  },
  //选取图片
  chooseImage: function() {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        _this.setData({
          resources: tempFilePaths,
          enableSubmit: true
        })
      }
    })
  },
  //删除图片
  deleteImage: function() {
    this.setData({
      resources: []
    });
    if (this.data.currentWords == 0) {
      this.setData({
        enableSubmit: false
      })
    }
  },
  //发布短消息
  submitMsg: function(e) {
    if(this.data.enableSubmit) {
      var postDetail = {
        posterId: 111,
        posterName: app.globalData.userInfo.nickName,
        postMsg: e.detail.value.textarea,
        resources: this.data.resources,
        date: new Date().getTime(),
      }
      console.log(app.globalData)
    }
  }
})