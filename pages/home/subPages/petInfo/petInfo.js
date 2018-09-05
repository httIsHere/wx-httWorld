// pages/home/subPages/petInfo/petInfo.js
Page({

  data: {
    petList: [
      {
        name: "布布",
        breed: "英短", //品种
        petType: "猫咪",
        gender: 1,
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
        likeFood: "小鱼干，生牛肉，水煮鸡胸",
        likeGame: "逗猫棒，毛线球",
        isSterilization: 1, //是否有绝育
        hasOffspring: 0, //是否有后代
        birthNum: 0, //生过几胎
        hasIllHis: "肠胃炎" //是否有疾病史
      }
    ],
    isAdd: false,
    isDelete: false
  },
  addPet: function() {
    this.setData({
      isAdd: true
    })
  }
})