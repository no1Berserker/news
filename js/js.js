$(function(){
    var zz = {
        zz_01: /^[a-zA-Z0-9]{6,18}$/,
        zz_02: /^1[34578]\d{9}$/,
        zz_03: /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/
    };
    
    var news_data = [
        {
            classify: 1,
            tit: '津塔纯钢塔剪力墙，记说能承受2500年一遇的地震？', src_01: 'img/news_01.png', 
            src_02: 'img/news_02.png', 
            src_03: 'img/news_03.png'
        },{
            classify: 0,
            tit: '习近平在这里提出“绿水青山就是金山银山”', 
            src_01: 'img/news_04.png'
        },{
            classify: 0,
            tit: '习近平在这里提出“绿水青山就是金山银山”', 
            src_01: 'img/news_04.png'
        },{
            classify: 0,
            tit: '习近平在这里提出“绿水青山就是金山银山”', 
            src_01: 'img/news_04.png'
        },{
            classify: 1,
            tit: '津塔纯钢塔剪力墙，记说能承受2500年一遇的地震？', src_01: 'img/news_01.png', 
            src_02: 'img/news_02.png', 
            src_03: 'img/news_03.png'
        },{
            classify: 0,
            tit: '习近平在这里提出“绿水青山就是金山银山”', 
            src_01: 'img/news_04.png'
        },{
            classify: 0,
            tit: '习近平在这里提出“绿水青山就是金山银山”', 
            src_01: 'img/news_04.png'
        },{
            classify: 0,
            tit: '习近平在这里提出“绿水青山就是金山银山”', 
            src_01: 'img/news_04.png'
        },{
            classify: 0,
            tit: '习近平在这里提出“绿水青山就是金山银山”', 
            src_01: 'img/news_04.png'
        }
    ];
    
    function append_news(json){
        if(json.classify == 1){
            var news_01 =  '<div class="home-con">' +
                                '<p class="home-news">'+json.tit+'</p>' +
                                '<ul class="home-news-pics">' +
                                    '<li><img src="'+json.src_01+'" width="100%" alt=""></li>' + 
                                    '<li><img src="'+json.src_02+'" width="100%" alt=""></li>' +
                                    '<li><img src="'+json.src_03+'" width="100%" alt=""></li>' +
                                '</ul>' +
                                '<div class="home-news-tips">新闻热点</div>' +
                                '<div class="home-news-tips h">2982跟帖<a href="">&#xe62a;</a></div>' +
                            '</div>';
            return news_01;
        }else if(json.classify == 0){
            var news_02 =  '<div class="home-con">' +
                                '<div class="home-news-pic">' +
                                    '<img src="'+json.src_01+'" width="100%" alt="">' +
                                '</div>' +
                                '<p class="home-news h">' + json.tit +
                                    '<div class="home-news-tips h">1982跟帖<a href="">&#xe62a;</a></div>' +
                                '</p>' + 
                            '</div>';
            return news_02;   
        };
    };
    
    $.each(news_data, function(key, val){
         $('.home-cons').append(append_news(val));
    });
    
    $('.register-mail-stuffix').click(function(){
        $('.cover').fadeIn();
    });
    
    $('.pull-down-select').click(function(){
        $('.cover').hide();
        $('.mail-suffix').html($(this).html());
    });
    
    $('.username').on('input change', function(){
        if(zz.zz_01.test($(this).val())){
            $('.info').html('完成验证！').addClass('h');
        }else {
            $('.info').html('您的输入有误！').removeClass('h');
        }
    });
    
    $('.moblie-num').on('input change', function(){
        if(zz.zz_02.test($(this).val())){
            $('.info-moblie').html('完成验证！').addClass('h');
            $('.register-mail-code').addClass('h');
        }else {
            $('.info-moblie').html('您的输入有误！').removeClass('h');
            $('.register-mail-code').removeClass('h');
        }
    });
    
     $('.password').on('input change', function(){
        if(zz.zz_03.test($(this).val())){
            $('.info-pwd').html('完成验证！').addClass('h');
        }else {
            $('.info-pwd').html('您的输入有误！').removeClass('h');
        }
    });
    
    var sta = 1;
    $('.register-mail-code').click(function(){
        if(!zz.zz_02.test($('.moblie-num').val())){
            $('.info-code').html('请输入手机号码！');
        }else {
            $('.info-code').html('');
            var i = 60, set;
            if(sta == 1){
                sta = 0;
                set = setInterval(function(){  
                    if(i > 0){
                        $('.register-mail-code').html(i+'s后重新发送');
                        i --;
                    }else {
                        i = 60;
                        sta = 1;
                        clearInterval(set);
                        $('.register-mail-code').html('重新发送');
                    }
                }, 1000);
            }
        }
    });
    
    $('.register-submit').click(function(){
        if(zz.zz_01.test($('.username').val()) && zz.zz_02.test($('.moblie-num').val()) && zz.zz_03.test($('.password').val())){
            alert('注册成功！');
        }else {
            alert('请填写完信息！');
        }
    });
    
    $('.login-inp-pwd, .login-inp-name').on('input change', function(){
        if($('.login-inp-pwd').val() != '' && $('.login-inp-name').val() != ''){
            $('.login-submit').addClass('h');
        }else {
            $('.login-submit').removeClass('h');
        }
    });
    
    $('.login-submit').click(function(e){
        if($('.login-inp-pwd').val() == '' || $('.login-inp-name').val() == ''){
            e.preventDefault();
        }
    });
    
    $('.home-login-close').click(function(){
        $('.home-login').hide();
    });
    
    var dis = 1;
    $('.pull-down.h').click(function(){
        if(dis == 1){
            $(this).html('&#xe633;');
            $('.password').prop('type', 'text');
            dis = 0;
        }else {
            $(this).html('&#xe631;');
            $('.password').prop('type', 'password');
            dis = 1;
        }
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});