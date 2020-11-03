function hoverMethod(dom) {
   
    //头部划过效果
    $("header " + dom).hover(function(){
        $(this).css({"backgroundColor": "#fff", "color": "red"});
        $("header " + dom + " ul").css({"color": "#3C3C3C"});
        $("header " + dom + " ul").show();
    }, function(){
        $(this).css({"backgroundColor": "#f4f4f4", "color": "#3C3C3C"});
        $("header " + dom + " ul").hide();
    })

    //隐藏二维码
    $(".search_quxiao").click(function(){
        $(this).parent().hide();
    })

    //侧边栏划过
    $("aside ul li").hover(function(){
        $(this).css({"backgroundColor": "pink"});
        $(this).children(".li_left").children("a").css("color", "orange");
        $(this).siblings("li").children(".li_left").children("a").css("color", "#3C3C3C");
        $("aside .model").show();
        $("aside .model").text($(this).index());
    }, function(){
        $(this).css({"backgroundColor": "#f4f4f4"});
        $(this).children(".li_left").children("a").css("color", "#3C3C3C");
        $("aside .model").hide();
    })
    
    

}