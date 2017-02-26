/**
 * Created by Administrator on 2017/2/20.
 */
/*导航跳转插件*/
$(function(){
    $('nav').singlePageNav({offset:70});
    /*小屏幕点击关闭菜单*/
    $('.navbar-collapse a').click(function(){
        $('.navbar-collapse').collapse("hide");
        /*hide必须加引号*/
    })
    new WOW().init();
    $(".tengxun").on("click",function(){
        var shareqqstring="http://v.t.qq.com/share/share.php?title="+"这个网站有好棒的分享，快来看看吧！";
        window.open(shareqqstring,'newwindow','height=100,width=100,top=100,left=100');

    })
    $(".xinlang").on("click",function(){
        var sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+"这个网站有好棒的分享，快来看看吧！";
        window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');

    })
});


