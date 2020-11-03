function slider(dom) {
    //定义一个基础下标
    var i = 0;
    //克隆第一张图片
    var clone = $(dom + " .pic li").first().clone();
    //把克隆的li放到li列表最后
    $(dom + " .pic").append(clone);
    //获取所有li的长度
    var size = $(dom + " .pic li").length;
    //计算ul的宽
    var ulWidth = 520 * size;
    $(dom + " .pic").css("width", ulWidth);

    //自动轮播
    var myTimer = setInterval(() => {
        i++;
        move();
    }, 2000)
    //移动的事件
    function move() {
        //边界判断
        //如果运动到最后一张图片去第一张图片
        if (i == size) {
            $(dom + " .pic").css("left", 0);
            i = 1;
        }
        //如果运动到第一张让他去最后一张
        if (i == -1) {
            $(dom + " .pic").css("left", -(size - 1) * 520);
            i = size - 2;
        }
        //运动起来
        $(dom + " .pic").stop().animate({
            left: -i * 520
        }, 500)

        //圆点控制
        //在克隆这张图片的时候 让圆点默认在第一个
        if(i == size -1){
            $(dom + " .num li").eq(0).addClass("active").siblings().removeClass("active");
        } else {
            $(dom + " .num li").eq(i).addClass("active").siblings().removeClass("active");
        }

    }

    //划过slider停止轮播
    $(dom + "").hover(function () {
        clearInterval(myTimer);
    }, function () {
        myTimer = setInterval(() => {
            i++;
            move();
        }, 2000)
    })

    //左右按钮
    $(dom + " .leftbtn").click(function(){
        i ++;
        move();
    })
    $(dom + " .rightbtn").click(function(){
        i --;
        move();
    })

    //划过圆点
    $(dom + " .num li").hover(function(){
        var index = $(this).index();
        i = index;
        $(dom + " .pic").stop().animate({
            left: -index * 520
        },500)
        $(this).addClass("active").siblings().removeClass("active");
    }, function(){

    })

}