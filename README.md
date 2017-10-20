# tab-toggle

js tab选项卡效果
 
demo：<a href="https://cgygd.github.io/tab-toggle/demo.html" target="_blank">https://cgygd.github.io/tab-toggle/demo.html</a>

## Usage

```html
<div class="m-user-center-tab relative" id="rebate-tab-nav">
  <ul class="inline-box">
    <li>
      tab1
    </li>
    <li>
      tab2
    </li>
    <li>
      tab3
    </li>
    <li>
      tab4
    </li>
  </ul>
  <i class="m-user-center-tab-active-line absolute"></i>
</div>
```

```js
var table = new V_tab_nav({
  element: 'rebate-tab-nav',
  default_active: 0
});
table.on('init', function (data) {
  console.log('init do something');
  console.log(data)
}.bind(this));
table.on('confirm', function (data) {
  console.log('tab click do something');
  console.log(data)
}.bind(this));
```

### options
1. **element** - 绑定的容器id名字 
    - **type**: String
    - **required** : true
2. **default_active** - 默认选中某个选项
    - **type**: Number
    - **required** : false
    - **default** : 0

### Listeners
1. **init** - 初始化成功触发事件
    - **type**: function
2. **confirm** - 每次点击tab切换成功触发事件
    - **type**: function