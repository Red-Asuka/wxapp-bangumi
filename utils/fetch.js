module.exports = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://api.catbk.cn/${url}`,
      data: data,
      success: resolve,
      fail: reject
    })
  })
}
