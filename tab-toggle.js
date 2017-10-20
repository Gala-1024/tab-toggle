/**
 * tab切换标签选择
 */
;
(function (undefined) {
  var _global

  function V_tab_nav(opts) {
    this.tab = document.getElementById(opts.element);
    this.li = this.tab.querySelectorAll('li');
    this.active = this.tab.querySelector('.m-user-center-tab-active-line');
    this.listeners = [];
    this.handlers = {};
    this.default_active = opts.default_active || 0
    this.init()
  }

  V_tab_nav.prototype = {
    constructor: this,
    init: function () {
      /**
       * 初始化设置默认选中的tab
       */
      this.active.style.width = (this.li[this.default_active].clientWidth - 20) + 'px'
      this.setActive(this.default_active)

      /**
       * 遍历需要绑定的tab事件,通过闭包保存元素的下标
       */
      for (var a = 0; a < this.li.length; a++) {
        (function (a, _this) {
          setTimeout(function () {
            _this.li[a].addEventListener('click', function (event) {
              if (event.target.classList.contains('m-user-center-tab-active')) {
                return
              }
              _this.setActive(a)
              _this.emit({type: 'confirm', target: _this, index: a})
            })
          }, 0)
        })(a, this)
      }

      /**
       * 插件init完毕,触发自定义监控事件通知
       */
      setTimeout(function () {
        this.emit({type: 'init', target: this, index: this.default_active})
      }.bind(this), 0)
    },
    setActive: function (active) {
      /**
       * 设置选择的元素类名
       */
      for (var i = 0; i < this.li.length; i++) {
        this.li[i].classList.remove('m-user-center-tab-active')
      }
      this.li[active].classList.add('m-user-center-tab-active')

      /**
       * 设置选中的元素下划线
       */
      if (active > 0) {
        this.active.style.left = (this.li[active].clientWidth * active) + 10 + 'px'
      } else {
        this.active.style.left = '10px'
      }
    },
    on: function (type, handler) {
      // type: init, confirm
      if (typeof this.handlers[type] === 'undefined') {
        this.handlers[type] = [];
      }
      this.listeners.push(type);
      this.handlers[type].push(handler);
      return this;
    },
    emit: function (event) {
      if (!event.target) {
        event.target = this;
      }
      if (this.handlers[event.type] instanceof Array) {
        var handlers = this.handlers[event.type];
        for (var i = 0, len = handlers.length; i < len; i++) {
          handlers[i](event);
          return true;
        }
      }
      return false;
    }
  };
  _global = (function () {
    return this || (0, eval)('this');
  }());
  if (typeof module !== "undefined" && module.exports) {
    module.exports = V_tab_nav;
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return V_tab_nav;
    });
  } else {
    !('V_tab_nav' in _global) && (_global.V_tab_nav = V_tab_nav);
  }
})();