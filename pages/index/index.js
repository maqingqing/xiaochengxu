//index.js
//获取应用实例
var app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    imgUrls: [
      "../images/family.jpg",
      "../images/grand.jpg",
      "../images/bb.jpg"
    ],
    imgs1:[
      "../images/44.jpg"
    ],
    autoplay:false,
    interval: 2000,
    duration: 1000,
    zhezhaoD:false
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  swipers:function(e){
    this.setData({
      zhezhaoD: !this.data.zhezhaoD
    })
  }
  // clectImage: function () {
  //   console.log("chufa")
  //   var that = this
  //   wx.chooseImage({
  //     count: 8, // 默认9
  //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  //     success: function (res) {
  //       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
  //       var tempFilePaths = res.tempFilePaths
  //       console.log(tempFilePaths.length)
  //       that.setData({
  //         imgUrls: tempFilePaths,
  //         numberImg:true
  //       })
  //       console.log(that.data)
  //       // wx.navigateTo({
  //       //   url: '../logs/logs',
  //       //   complete:function(res){
  //       //     console.log(res)
  //       //   }
  //       // }) //页面跳转
  //     }
  //   })
    
  // },
  // preview:function(e){
  //   var target = e.target.dataset.src
  //   wx.previewImage({
  //     current: target,
  //     urls: [target] // 需要预览的图片http链接列表
  //   })
  // }
});
