module.exports = {
  fetch: function() {
    var _this = this
    return $.ajax({
      data: _this.fetchParams,
      url: _this.fetchUrl
    })
  },

  refresh: function() {
    var _this = this
    this.loaded = false
    this.fetchParams.page = 1
    this.parent.$('.no-data').hide()
    this.fetch().done(function(result) {
      _this.data.items = result.data.data
      _this.update()
      _this.parent.$('.content.infinite-scroll').scrollTop(0)
    })
  },

  listen: {
    update: function () {
      var now = new Date()
      this.data.today = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()}
      if (this.data.resource) {
        this.data.items = this.data.resource.data.data
        this.data.pageCount = this.data.resource.data.pageCount
        delete this.data.resource
      }
    },

    updated: function() {
      if (this.data.items && this.data.items.length) {
        this.parent.$('.no-data').hide()
        if (this.fetchParams.page < this.data.pageCount) {
          this.parent.$('.scroll-loading').show()
          this.parent.$('.nomore-data').hide()
        } else {
          this.parent.$('.scroll-loading').hide()
          if (this.loaded) this.parent.$('.nomore-data').show()
        }
      } else {
        this.parent.$('.scroll-loading').hide()
        this.parent.$('.no-data').show()
      }
    },

    loadmore: function() {
      var _this = this
      var $isb = this.parent.$('.infinite-scroll-bottom')
      // $.detachInfiniteScroll($isb)
      if (this.fetchParams.page >= this.data.pageCount) {
        this.parent.$('.scroll-loading').hide()
        if (this.loaded) this.parent.$('.nomore-data').show()
        return
      }

      // 加在此，因为如果上面语句 return 后，切换到其他页签时没有无限滚动事件
      $.detachInfiniteScroll($isb)
      this.loaded = true
      this.fetchParams.page++
      this.fetch().done(function(result) {
        _this.data.items = _this.data.items.concat(result.data.data)
        _this.update()
        $.attachInfiniteScroll($isb)
      })
    }
  }
}
