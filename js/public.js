/**
 * Created by Administrator on 2017/12/15.
 */
$(document).ready(function(){
    $(document).scroll(function(){
        if($(this).scrollTop()>1000) $("#sidebarfixed.go-top li").css("opacity",1);
        else $("#sidebarfixed.go-top li").css("opacity",0);

        if($(this).scrollTop()>500) $(".header").css("box-shadow","0 2px 2px rgba(147,157,166,.4)");
        else $(".header").css("box-shadow","none");
    });
    $("#goTop").click(function(){
        $("html, body").animate({scrollTop:0},"slow");
    })
});
