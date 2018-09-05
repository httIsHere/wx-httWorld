// pages/home/subPages/petInfo/petInfo.js

const util = require('../../../../utils/util.js');

Page({

  data: {
    petList: [
      {
        name: "布布",
        breed: "英短", //品种
        petType: "猫咪",
        gender: 1,
        birthday: "2018-05-12",
        likeFood: "小鱼干，生牛肉，水煮鸡胸",
        likeGame: "逗猫棒，毛线球",
        isSterilization: 1, //是否有绝育
        hasOffspring: 0, //是否有后代
        birthNum: 0, //生过几胎
        hasIllHis: "肠胃炎" //是否有疾病史
      },
      {
        name: "丢丢",
        breed: "狸花", //品种
        petType: "猫咪",
        gender: 0,
        birthday: "2018-08-12",
        likeFood: "小鱼干，生牛肉，水煮鸡胸",
        likeGame: "逗猫棒，毛线球",
        isSterilization: 1, //是否有绝育
        hasOffspring: 0, //是否有后代
        birthNum: 0, //生过几胎
        hasIllHis: "肠胃炎" //是否有疾病史
      }
    ],
    isAdd: false,
    isDelete: false,
    genderList: ['母', '公', '雌雄同体', '无性'],
    genderIndex: 0,
    sterValue: 0,
    nowDate: util.formatDate(new Date()),
    birthday: util.formatDate(new Date()),
    modalBtn: false
  },
  addPet: function() {
    this.setData({
      isAdd: true
    })
  },
  genderChange: function(e) {
    this.setData({
      genderIndex: e.detail.value
    })
  },
  sterChange: function(e) {
    this.setData({
      sterValue: e.detail.value
    })
  },
  birthdayChange: function(e) {
    this.setData({
      birthday: e.detail.value
    })
  },
  addPetSubmit: function(e) {
    console.log(e)
  }
})