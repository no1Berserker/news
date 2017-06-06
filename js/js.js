$(function(){
    var zz = {
        zz_01: /^[a-zA-Z0-9]{6,18}$/,
        zz_02: /^1[34578]\d{9}$/,
        zz_03: /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/
    };
    
    
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
    
    $('.login-submit').click(function(){
        if($('.login-inp-pwd').val() != '' && $('.login-inp-name').val() != ''){
            $(this).addClass('h');
        }else {
            $(this).removeClass('h');
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});