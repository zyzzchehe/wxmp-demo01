
var newsData = require('../../../js/newsData.js')
// pages/news/news-detail/news-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 第一种写法
    authorIcon:"",
    authorName:"",
    authorDate:"",
    articleText:"",
    articleIcon:"",
    //数据绑定
    collect:false,
    mId:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.newsId);
    //console.log(data.mData[options.newsId]);
    
    var mNewsId = options.newsId;
    var newsObj = newsData.mData[mNewsId];
    this.setData({
      newsId:options.newsId,
      authorIcon:newsObj.authorIcon,
      authorName:newsObj.authorName,
      authorDate:newsObj.authorDate,
      articleText:newsObj.articleText,
      articleIcon:newsObj.articleIcon,
      mId:mNewsId,
    });

    //第一次加载小程序的时候
    var arr = wx.getStorageSync("collectKey");
    if(arr){
      var coll = arr[mNewsId];
      this.setData({
        collect: coll,
      })
    }else{
      arr = [];
      arr[mNewsId] = false;
      wx.setStorageSync("collectKey", arr);
    }
  },

  doCollect:function(e){
    /**
     * 数据存储在一个object中
     * var object = {
     * 0:false,
     * 1:true,
     * 2:false
     * }
     */
    //先从本地存储中拿到数组对象
    var collectArr = wx.getStorageSync("collectKey");
    var mcollect = collectArr[this.data.mId];
    mcollect = !mcollect;
    collectArr[this.data.mId] = mcollect;
    wx.setStorageSync("collectKey", collectArr);
    this.setData({
      collect: mcollect,
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