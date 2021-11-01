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
        const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
        return reg.test(path);
    }
    //时长转换时分秒显示
    static secondsToString(timer: number | string): string {
        const seconds = Number(timer);
        if (seconds <= 0 || Object.is(seconds, null) || Object.is(seconds, undefined)) {
            return '0小时0分钟0秒';
        }
        let hour = Math.floor(seconds / 60 / 60);
        let minute = Math.max(0, Math.floor((seconds - hour * 60 * 60) / 60));
        let second = seconds % 60;
        let res = [];
        res.push(hour, '小时');
        res.push(minute, '分钟');
        res.push(second, '秒');
        return res.join('');
    }
    //判断是否是手机号
    static isPhoneNumber(value: string): boolean {
        const reg = /^1[345789][0-9]{9}$/;
        return reg.test(value)
    }
    //判断是否是邮箱
    static isEmail(value: string): boolean {
        const reg = /^[\w-]+@([\w-]+\.)+(com|org|cc|cn|net)$/i;
        return reg.test(value)
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
        let dom = document.createElement('div');
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
        setTimeout(() => document.body.removeChild(dom), 3000)
    }
    //保留小数位不进位
    static getnum(value: number, figure: number) {
        return parseInt(String(value * 10 ** figure)) / 10 ** figure;
    }
}