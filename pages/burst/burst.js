// pages/burst/burst.js
let top_index = 100
let listTopPre = []
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listTop: [],
    heatsign: 100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    top_index = 100
    var self = this
    wx.request({
      dataType: "json",
      url: 'https://sina.app135.cn/weibo/findHistoryBurst?index=3&top=' + top_index,
      success: function (res) {
        var max = 0;
        for (var i = 0; i < res.data.length; i++) {
          var v = res.data[i]
          if (v.heat > max)
            max = v.heat
        }
        self.setData({
          listTop: res.data,
          heatsign: max * 1.45
        })
      }
    })
    // 预加载
    top_index +=100
    wx.request({
      dataType: "json",
      url: 'https://sina.app135.cn/weibo/findHistoryBurst?index=3&top=' + top_index,
      success: function (res) {
        listTopPre = res.data
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad(); //重新加载onLoad()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this;
    this.onLoad(); //重新加载onLoad()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var self = this
    var list = self.data.listTop.concat(listTopPre)
    self.setData({
      listTop: list,
    })

    //预加载
    top_index += 100
    wx.request({
      dataType: "json",
      url: 'https://sina.app135.cn/weibo/findHistoryBurst?index=3&top=' + top_index,
      success: function (res) {
        listTopPre = res.data
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goto: function (data) {
    wx.navigateTo({
      url: '../out/out?src=' + data.currentTarget.id, //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  }
})