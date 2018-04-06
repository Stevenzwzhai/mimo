# z-mimo
a small date library
```
npm install z-mimo
```
#### 引入方式
amd/cmd/node module/es6
#### 日期格式化，传入日期对象，可调用方法：
```
var mimo = require('z-mimo')
var date = mimo(new Date())
//获取年月日时分秒
date.formatAll([split])//默认分隔符(split)为‘-’，2018-04-02 15-34-13
//获取日期
date.formatDate('/')//2018/04/02
//获取时间
date.formatTime(':')//15:34:05
```
###### 以上三个的参数都是分隔符，默认为‘-’
```
date.format('MM-DD')//04-02，可以自由组合，标准为‘YYYY-MM-DD hh:mm:ss’
```
这个方法可以任意组合年月日时分秒，注意必须要使用（YYYY-MM-DD hh:mm:ss）这些标识符，至于中间的分隔符或者顺序或者是否显示某个都由你自己决定。
