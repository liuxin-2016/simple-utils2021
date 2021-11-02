export default class Utils {
    //判断是否是手机及手机系统
    static isMobile() {
        if (navigator.userAgent.match(/Android/i)) {
            return 'android';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            return 'ios';
        } else {
            return false;
        }
    }
    //判断是否是正确链接
    static isUrl(path: string): boolean {
        var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
        return reg.test(path);
    }
    //获取url参数
    static getQueryString(name: string) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        console.log(window.location.search.substr(1))
        if (r != null) return unescape(r[2]); return null;
    }
    //时长转换时分秒显示
    static secondsToString(timer: number | string): string {
        var seconds = Number(timer);
        if (seconds <= 0 || Object.is(seconds, null) || Object.is(seconds, undefined)) {
            return '0小时0分钟0秒';
        }
        var hour = Math.floor(seconds / 60 / 60);
        var minute = Math.max(0, Math.floor((seconds - hour * 60 * 60) / 60));
        var second = seconds % 60;
        var res = [];
        res.push(hour, '小时');
        res.push(minute, '分钟');
        res.push(second, '秒');
        return res.join('');
    }
    //判断是否是手机号
    static isPhoneNumber(value: string): boolean {
        var reg = /^1[345789][0-9]{9}$/;
        return reg.test(value)
    }
    //判断是否是邮箱
    static isEmail(value: string): boolean {
        var reg = /^[\w-]+@([\w-]+\.)+(com|org|cc|cn|net)$/i;
        return reg.test(value)
    }
    //判断身份证号码是否正确
    static isIdcard(sId: string) {
        var iSum = 0;
        var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" }
        if (!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
        sId = sId.replace(/x$/i, "a");
        if (aCity[parseInt(sId.substr(0, 2))] == null) return "你的身份证地区非法";
        var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
        var d = new Date(sBirthday.replace(/-/g, "/"));
        if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "身份证上的出生日期非法";
        for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
        if (iSum % 11 != 1) return "你输入的身份证号非法";
        //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
        return true;
    }

    //复制文本内容
    static copyText(value: string) {
        var input = document.createElement("input");
        input.setAttribute("id", "copyInput");
        input.setAttribute("value", value);
        document.getElementsByTagName("body")[0].appendChild(input);
        var dom: any = document.getElementById("copyInput");
        dom.select();
        document.execCommand("copy");
        document.getElementById("copyInput")?.remove();
    }
    //toast提示
    static toast(msg: string) {
        var dom = document.createElement('div');
        dom.innerHTML = msg;
        dom.style.color = '#333';
        dom.style.padding = '6px 10px';
        dom.style.border = '1px solid #eee';
        dom.style.borderRadius = '8px';
        dom.style.width = 'max-content';
        dom.style.maxWidth = '90%';
        dom.style.minWidth = '120px';
        dom.style.height = 'max-content';
        dom.style.position = 'fixed';
        dom.style.left = '50%';
        dom.style.top = '50%';
        dom.style.transform = 'translate(-50%,-50%)';
        dom.style.background = 'rgba(0, 0, 0, .6)';
        dom.style.color = '#fff';
        dom.style.textAlign = 'center';
        dom.style.zIndex = '2021';
        document.body.appendChild(dom);
        setTimeout(function(){document.body.removeChild(dom)} , 3000)
    }
    //保留小数位不进位
    static getnum(value: number, figure: number) {
        return parseInt(String(value * 10 ** figure)) / 10 ** figure;
    }
}