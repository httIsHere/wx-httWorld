// pages/timer/timer.js
const util = require('../../utils/util.js');
const { $Toast } = require('../components/dist/base/index');

const initTime = {
  text: '05:00',
  time: 5
};

const initDeg = {
  left: 45,
  right: -45
};

Page({

  data: {
    leftDeg: initDeg.left,
    rightDeg: initDeg.right,
    remainTime: initTime.text,
    missionName: '',
    missionTime: initTime.time,
    isRunning: false,//倒计时是否进行中
    completed:false, //倒计时是否完成
    remainingTime: 0,
    startTime: 0,
    endTime: 0,
    showLogs: false, //是否展示记录modal
    logs: wx.getStorageSync('timer_logs')
  },
  changeMissionName: function(e) {
    this.setData({
      missionName: e.detail.value
    });
  },
  changeMissionTime: function(e) {
    let _time = e.detail.value;
    if (isNaN(_time)) {
      return $Toast({ content: '输入正确时间格式', duration: 1});
    }
    if (_time < 1) {
      if ((_time * 60) % 1 !== 0 || _time === 0) {
        return $Toast({ content: '输入正确时间格式', duration: 1});
      }
      _time = '00:' + (_time * 60 < 10 ? '0' + _time * 60 : _time * 60);
    } else {
      _time = (parseInt(e.detail.value) < 10 ? ('0' + e.detail.value) : e.detail.value) + ':00';
    }
    this.setData({
      missionTime: e.detail.value,
      remainTime: _time
    })
  },
  startTimer: function (e) {
    const _this = this;
    let _type = e.target.dataset.type;
    let _taskName = '';
    let _isRunning = this.data.isRunning;
    if(_type !== 'mission') {
      _taskName = _type === 'rest' ? '主子运动' : '陪主子玩耍';
    } else {
      _taskName = this.data.missionName;
    }
    if(!_isRunning) {
      this.setData({
        remainingTime: _this.data.missionTime * 60,
        startTime: Date.now(),
        endTime: _this.data.missionTime * 60 + parseInt(Date.now() / 1000)
      })
      //创建timer
      this.timer = setInterval((function(){
        _this.updateTimer();
        _this.startNameAnimation()
      }).bind(this), 1000);

      this.setData({
        isRunning: true,
        missionName: _taskName
      })
    } else {
      //关闭timer
      this.stopTimer();
    }
  },
  startNameAnimation: function () {
    let animation = wx.createAnimation({
      duration: 450
    })
    animation.opacity(0.2).step()
    animation.opacity(1).step()
    this.setData({
      nameAnimation: animation.export()
    })
  },
  updateTimer: function() {
    let _now = parseInt(Date.now() / 1000);
    let remainingTime = this.data.endTime - _now;
    let halfTime;
    if(remainingTime > 0) {
      let _m = parseInt(remainingTime / 60) < 10 ? '0' + parseInt(remainingTime / 60) : parseInt(remainingTime / 60);
      let _s = remainingTime % 60 < 10 ? '0' + (remainingTime % 60) : remainingTime % 60;
      this.setData({
        remainTime: _m + ':' + _s
      });
    } else {
      this.setData({
        completed: true
      });
      this.stopTimer();
    }

    //倒计时progress
    halfTime = this.data.remainingTime / 2;
    if(remainingTime > halfTime) {
      //left progress
      this.setData({
        leftDeg: initDeg.left - (180 * (this.data.remainingTime - remainingTime) / halfTime)
      })
    } else {
      this.setData({
        leftDeg: -135,
        rightDeg: initDeg.right + (180 * (remainingTime - halfTime) / halfTime)
      })
    }

  },
  stopTimer: function() {
    // reset circle progress
    this.setData({
      leftDeg: initDeg.left,
      rightDeg: initDeg.right,
      nameAnimation: null
    })

    // clear timer
    this.timer && clearInterval(this.timer);

    //log
    let log = {
      startTime: this.data.startTime,
      endTime: Date.now(),
      keepTime: parseInt((Date.now() - this.data.startTime) / 1000),
      taskName: this.data.missionName,
      isCompleted: this.data.completed
    }
    this.saveLog(log);
  },
  completeTask: function() {
    if (!this.data.completed) {
      this.stopTimer();
    }
    this.setData({
      isRunning: false,
      completed: false,
      missionName: '',
      missionTime: initTime.time,
      remainTime: initTime.text,
      nameAnimation: null
    })
  },
  saveLog: function(log) {
    let logs = wx.getStorageSync('timer_logs') || [];
    logs.unshift(log);
    wx.setStorageSync('timer_logs', logs);
    this.setData({
      logs
    })
  },
  showLogs: function() {
    this.setData({
      showLogs: true
    })
  },
  handleClose: function () {
    this.setData({
      showLogs: false
    })
  }
})