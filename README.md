# simple-utils2021
一些前端常用方法

使用方法：
直接npm下载依赖；
import Utils from "simple-utils2021"

- 内置方法：
```js
Utils.isMobile()//返回手机系统或false；
Utils.isUrl()//判断是否是正确链接
Utils.getQueryString(name)//获取url参数
Utils.secondsToString(value)//秒时间转换成时分秒
Utils.isPhoneNumber()//判断手机号格式是否正确
Utils.isEmail()//判断邮箱格式是否正确
Utils.isIdcard()//判断身份证格式是否合法
Utils.copyText(value)//拷贝文本
Utils.toast(value)//文本弹框
Utils.getnum(value,figure)//不进位保留小数
```