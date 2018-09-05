// pages/add/add.js
var qiniuUploader = require('../../libs/qiniuUploader.js');
const app = getApp();

// 初始化七牛相关参数
function initQiniu() {
  var options = {
    region: 'NCN', // 华北区
    uptokenURL: 'https://portal.qiniu.com/api/kodo/bucket/file/httishere-20180905/uptoken?ftype=0',
    domain: 'http://pektftzre.bkt.clouddn.com',
    shouldUseQiniuFileName: false
  };
  qiniuUploader.init(options);
}

Page({
  data: {
    currentWords: 0,
    maxWords: 200,
    wordsNumColor: '#999',
    resources: [],
    showPreview: false,
    enableSubmit: false,
    msg: "",
    imageObject: {}
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
      if (_msg.length > 0 || this.data.resources.length) {
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
      success: function(res) {
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
  didPressChooesImage: function() {
    var that = this;
    didPressChooesImage(that);
  },
  didCancelTask: function() {
    this.data.cancelTask()
  },
  //发布短消息
  submitMsg: function(e) {
    if (this.data.enableSubmit) {
      var postDetail = {
        posterId: 111,
        posterName: app.globalData.userInfo.nickName,
        postMsg: e.detail.value.textarea,
        resources: this.data.resources,
        date: new Date().getTime(),
      }
      //先上传图片
    }
  }
})

function didPressChooesImage(that) {
  initQiniu();
  // 微信 API 选文件
  wx.chooseImage({
    count: 1,
    success: function(res) {
      var filePath = res.tempFilePaths[0];
      // 交给七牛上传
      qiniuUploader.upload(filePath, (res) => {
          that.setData({
            'imageObject': res
          });
        }, (error) => {
          console.error('error: ' + JSON.stringify(error));
        },
        null,
        (progress) => {
          console.log('上传进度', progress.progress)
          console.log('已经上传的数据长度', progress.totalBytesSent)
          console.log('预期需要上传的数据总长度', progress.totalBytesExpectedToSend)
        }, cancelTask => that.setData({
          cancelTask
        })
      );
    }
  })
}