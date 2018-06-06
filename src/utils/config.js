module.exports = {
  apiUrl: '/qfang-agent-api/cameraman/survey/',
  layoutUrl: '/qfang-agent-api/cameraman/layout/',

  initMap: function(opts) {
    var bMap = new BMap.Map(opts.el, {
      enableMapClick: false
    })
    if (opts.lng) bMap.centerAndZoom(new BMap.Point(opts.lng, opts.lat), opts.level)
    bMap.enableScrollWheelZoom(true)
    return bMap
  },

  urlParse: function(url) {
    var pattern = /(\w+)=([^\?|^\#|^\/|^\&]+)/ig;
    var params = {};
    url.replace(pattern, function(a, b, c) {
      params[b] = c;
    });
    return params;
  },

  timeFormat: function(time, separator) {
    var temp = time.split(':')
    var minute = temp[1]
    if (minute.length < 2) minute = '0' + minute
    return temp[0] + separator + minute
  },

  getCancelReason: function(reason, remark) {
    var text = reason
    switch(reason) {
      case 'SALE_MAN_REASON':
        text = '经纪人原因'
        break
      case 'CAMERAMAN_REASON':
        text = '摄影师原因'
        break
      case 'OWNER_REASON':
        text = '业主原因'
        break
    }
    return text + '（' + remark + '）'
  },

  getConfigItems: function () {
    // 获取微信权限验证配置信息
    return $.ajax({
      type: 'GET',
      data: {
        url: location.href.split('#')[0]
      },
      url: '/qfang-agent-api/sdk/getConfig'
    });
  },

  repaceImgUrl: function(url, replaceStr) {
    return url.replace('{size}', replaceStr);
  },

  imgLoad: function ($el, src) {
    $el.hide().after('<div class="loading-img"></div>');
    if (!src) {
      $el.next('.loading-img').remove();
      $el.after('<div class="no-img-wrap"><img class="no-img" src="assets/img/logo.png" /><div class="text">暂无图片</div></div>');
      $el.remove();
      return;
    }
    var img = new Image();
    img.src = src;
    if (img.complete) {
      $el.show().next('.loading-img').remove();
      $el[0].src = img.src;
      $el.removeAttr('data-src');
    } else {
      img.onload = function () {
        $el[0].src = img.src;
        $el.removeAttr('data-src');

        // 在微信浏览器中图片加载完后不能马上显示出来，用延时作 hack
        setTimeout( function() {
          $el.show().next('.loading-img').remove();
        }, 1500);
      };
      img.onerror = function () {
        $el.next('.loading-img').remove();
        $el.after('<div class="no-img-wrap"><img class="no-img" src="assets/img/logo.png" /><div class="text">暂无图片</div></div>');
        $el.remove();
      }

    }
  }
}
