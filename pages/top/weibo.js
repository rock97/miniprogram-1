// pages/top/weibo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listTop:[],
    heatsign:100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
      wx.request({
        dataType: "json",
        url: 'https://sina.app135.cn/weibo/top',
        success: function(res){
          wx.hideLoading()
          self.setData({
              listTop:res.data,
              heatsign: res.data[0].heat * 1.45
          })
          
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

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goto1:function(data){
    wx.navigateTo({
      url: '../out/out?src='+data.currentTarget.id, //
      success: function () {
        console.log(data.currentTarget.id)
      }
      })
  }
})