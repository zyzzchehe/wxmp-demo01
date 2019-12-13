/**
 * newsData 相当于就是js文件对象，要使用initData，还要调用.mData
 */
var newsData = require("../../js/newsData.js");

// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    useData:"",
  },

  goNewsDetail:function(e){
    console.log(e);
    var newsId = e.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: 'news-detail/news-detail?newsId='+newsId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(newsData);
    this.setData({
      useData: newsData.mData,
    });
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

  }
})