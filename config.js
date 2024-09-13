window._config = {
    title: '熊猫云村',         // 标题，用于显示用户中心和登录页
    baseurl: 'https://4.216.209.253',            // 后端URL。前后端分离，该项必填 (域名后别带/
    color: '',              // 主题配色 (16进制颜色代码
    crisp: '54e550e4-66fc-4031-b121-581b7e38a322',              // Crisp ID
    Chatra: '',             // Chatra ID
    download: {             // 客户端下载地址
        window: 'https://www.123pan.com/s/Psbbjv-zVhVd',
        android: 'https://www.123pan.com/s/Psbbjv-zVhVd',
        ios: 'https://princedent-lf2ttp.stormkit.dev/guide/ios/shadowrocket.html',
        macos: 'https://www.123pan.com/s/Psbbjv-zVhVd',
    }
}

// 以下代码勿动。
if (window._config['color']) {
    const root = document.documentElement;
    root.style.setProperty('--theme-color', window._config['color']);
}

if (window._config['Chatra']) {
    (function(d, w, c) {
        w.ChatraID = window._config['Chatra'];
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
}

if (window._config['crisp']) {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = window._config['crisp'];
    (function () {
      d = document;
      s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
}
