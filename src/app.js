require('./assets/css/app.css')
require('./assets/vendor/zepto')
require('./assets/vendor/zepto-extend')
require('./assets/vendor/sm')

var coala = require('coala')
var config = require('./utils/config')

$.config = {router: false}

function asyncMount(component) {
  coala.cp = component
  coala.cp.on('mount', function() {
    $.hideIndicator()
    $.init()
  })
  coala.cp.mount('#app')
}

var mount = function (name, index, id) {
  var params = config.urlParse(location.search)
  if (!params.personId) return $.toast('无访问权限')
  coala.personId = params.personId
  $.showIndicator()
  if (coala.cp) coala.cp.unmount()
  switch (name) {
    case 'list':
      require.ensure([], function(require) {
        var component = coala.component(require('./pages/list.html'));
        coala.navIndex = 0;
        component.data.tabIndex = index;
        asyncMount(component);
      });
      break;
    case 'detail':
      if (!id) {
        $.hideIndicator();
        return $.toast('无访问权限');
      }
      require.ensure([], function(require) {
        var detail = require('./pages/detail.html');
        detail.id = id;
        var component = coala.component(detail);
        asyncMount(component);
      });
      break;

    // case 'form':
    //   require.ensure([], function(require) {
    //     var component = coala.component(require('./pages/form.html'));
    //     asyncMount(component);
    //   });
    //   break;

    // case 'address':
    //   require.ensure([], function(require) {
    //     var component = coala.component(require('./pages/address.html'));
    //     asyncMount(component);
    //   });
    //   break;

    case 'order':
      require.ensure([], function(require) {
        var component = coala.component(require('./pages/order.html'));
        coala.navIndex = 1;
        component.data.tabIndex = index;
        asyncMount(component);
      });
      break;

    case 'profile':
      require.ensure([], function(require) {
        var component = coala.component(require('./pages/profile.html'));
        coala.navIndex = 2;
        asyncMount(component);
      });
      break;

    default:
      require.ensure([], function (require) {
        var path = 'pages/'+ name;
        var component = coala.component(require('./' + path + '.html'));
        if (name === 'layout-set' && id) {
          component.fromPage = id;
        }
        asyncMount(component);
      });
      break;
  }
}

coala.cr = coala.router({
  routes: {
    '/map/max': function() {
      coala.cp.refs.map.trigger('maxMap');
    },

    '/layout-detail/preview': function () {
      coala.cp.trigger('showPreview');
    },

    '/layout-set/preview': function () {
      switch (coala.cp.curMdName) {
        case 'swiper': {
          coala.cp.swiperMd.trigger('showPreview');
          break;
        }
        case 'mount': {
          coala.cp.mountMd.refs.swiper.trigger('showPreview');
          break;
        }
        case 'reference': {
          coala.cp.referenceMd.refs.swiper.trigger('showPreview');
          break;
        }
      }
    },

    '/': function() {
      mount('list', '1');
    },

    '/detail/:id': function(id) {
      mount('detail', '1', id);
    },

    '/:name': function(name) {
      // debugger
      if (name === 'label' && coala.cp && coala.cp.data && coala.cp.data.cname === 'label') {
        coala.cp.refs.map.trigger('minMap');
      } else if (coala.cp && coala.cp.data && coala.cp.data.cname === 'layout') {
        if (name === 'layout-detail') {
          coala.cp.trigger('hidePreview');
        } else if (name === 'layout-set') {
          switch (coala.cp.curMdName) {
            case 'swiper':{
              coala.cp.swiperMd.trigger('hidePreview');
              break;
            }
            case 'mount': {
              coala.cp.mountMd.refs.swiper.trigger('hidePreview');
              break;
            }
            case 'reference': {
              coala.cp.referenceMd.refs.swiper.trigger('hidePreview');
              break;
            }
          }
        } else {
          mount(name, '1');
        }
      } else {
        mount(name, '1');
      }
    },

    '/:name/tab:index': function(name, index) {
      mount(name, index);
    },

    '/layout-set/from-detail/:id': function(id) {
      mount('layout-set', '1', id);
    }
  }
});

coala.setTitle = function (title) {
  var $body = $('body')
  document.title = title
  var $iframe = $('<iframe src="/favicon.ico"></iframe>')
  $iframe.on('load', function () {
    setTimeout(function () {
      $iframe.off('load').remove()
    }, 0)
  }).appendTo($body)
}
