// 屏幕适配
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//判断手机操作系统
var machine = (function() {
    let browser = {
        versions: function() {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return { //移动终端浏览器版本信息   
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器  
                iPad: u.indexOf('iPad') > -1, //是否iPad  
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
    if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
        return 'ios'
    } else if (browser.versions.android) {
        return 'android'
    }
})();
// 基础域名
var baseUrl = 'http://192.168.1.59:8092'; //开发
// var baseUrl = ''; //测试
// var baseUrl = ''; //生产

// 提示弹窗
function _msgDialog(msg) {
    mui.toast(msg, {
        duration: 1000,
        type: 'div'
    })
};

// 获取页面参数
function _getLocationQuery() {
    let url = window.location.href;
    let urlArr = url.split('?')[1] ? url.split('?')[1].split('&') : [];
    let uidObj = {};
    urlArr.forEach(ele => {
        uidObj[ele.split('=')[0]] = ele.split('=')[1]
    });
    return uidObj.uid;
};