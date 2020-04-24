const fetch = require('../../utils/fetch')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    total: 0,
    hasMore: true,
    params : {
      type: 1,
      pn: 0,
      ps: 10,
      vmid: 6535656
    }
  },
  // 加载下一页数据
  loadMore () {
    if (!this.data.hasMore) return
    this.data.params.pn++
    return fetch('list', this.data.params).then(res => {
      const datalist = res.data.data
      const hasMore = this.data.params.pn * this.data.params.ps < datalist.total
      const list = this.data.list.concat(datalist.list)
      this.setData({ list: list, total: datalist.total, hasMore: hasMore })
      // console.log(this.data.list)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // fetch('list', this.data.params).then(res => {
    //   var datalist = res.data.data
    //   this.setData({ list: datalist.list, total: datalist.total })
    //   console.log(this.data.list)
    // })
    this.loadMore()
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
    // 重新加载数据
    const params = {
      type: 1,
      pn: 0,
      ps: 10,
      vmid: 6535656
    }
    this.setData({ list: [], params: params, hasMore: true, total: 0 })
    this.loadMore().then(() => wx.stopPullDownRefresh())
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})