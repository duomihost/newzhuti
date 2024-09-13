<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
        <!--   标题   -->
        <title>熊猫云村</title>
        
        <style>
            :root {
                --theme-color: #1a90ff
            }
    
            html, body, #app {
                width: 100%;
                height: 100%;
                color: #333;
                font-size: 14px;
            }
    
            .container-loading {
                width: 30px !important;
                height: 30px;
                position: relative;
            }
    
            .container-loading.loading1 {
                transform: rotate(45deg);
            }
    
            .container-loading .shape {
                position: absolute;
                width: 10px;
                height: 10px;
                border-radius: 1px;
            }
    
            .container-loading .shape.shape1 {
                left: 0;
                background-color: #1890FF;
            }
    
            .container-loading .shape.shape2 {
                right: 0;
                background-color: #91CB74;
            }
    
            .container-loading .shape.shape3 {
                bottom: 0;
                background-color: #FAC858;
            }
    
            .container-loading .shape.shape4 {
                bottom: 0;
                right: 0;
                background-color: #EE6666;
            }
    
            .loading1 .shape1 {
                animation: animation1shape1 0.5s ease 0s infinite alternate;
            }
    
            @keyframes animation1shape1 {
                from {
                    transform: translate(0, 0);
                }
                to {
                    transform: translate(16px, 16px);
                }
            }
    
            .loading1 .shape2 {
                animation: animation1shape2 0.5s ease 0s infinite alternate;
            }
    
            @keyframes animation1shape2 {
                from {
                    transform: translate(0, 0);
                }
                to {
                    transform: translate(-16px, 16px);
                }
            }
    
            .loading1 .shape3 {
                animation: animation1shape3 0.5s ease 0s infinite alternate;
            }
    
            @keyframes animation1shape3 {
                from {
                    transform: translate(0, 0);
                }
                to {
                    transform: translate(16px, -16px);
                }
            }
    
            .loading1 .shape4 {
                animation: animation1shape4 0.5s ease 0s infinite alternate;
            }
    
            @keyframes animation1shape4 {
                from {
                    transform: translate(0, 0);
                }
                to {
                    transform: translate(-16px, -16px);
                }
            }
        </style>
        <link href="https://at.alicdn.com/t/c/font_4427950_hymavxw0sfm.css" rel="stylesheet">
        <link rel="stylesheet" href="./assets/index-91860850.css">
        <link rel="stylesheet" href="./css/vant.css"/>
    </head>
    <body>
        <div id="app"></div>
    </body>
	<!-- 微信qq防红 -->
    <script>
    // 跳转提示
    if (is_weixn_qq()) {
      window.location.href = 'https://c.pc.qq.com/middle.html?pfurl=请勿在微信、QQ、百度内打开，返回复制域名，使用浏览器打开例如Edge,Chrome,Safari等';
    }

    // 判断QQUA的代码无需修改
    function is_weixn_qq(){
      var ua = navigator.userAgent.toLowerCase();
      if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return "weixin";
      } else if (ua.match(/QQ/i) == "qq") {
        return "QQ";
      }
      return false;
    }
    </script>
    <script src="./config.js"></script>
    <script type="module" crossorigin src="./assets/index-338f6742.js"></script>
</html>