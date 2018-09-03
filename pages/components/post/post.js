Component({
  /**
   * 组件的属性列表，使用组件时，传入的参数
   */
  properties: {
    "name": {
      type: String,
      value: ''
    },
    "itemData": {
      type: Object,
      value: ""
    }
  },

  /**
   * 组件的方法列表，组件内部的方法
   */
  methods: {
    click: function () {
      console.log("easy");
    }
  }
})