function productList() {

    var list = [{
            id: "1",
            imgUrl: "img/商品.jpg",
            title: "美国直邮 Kelty CT39-227809 男休闲双肩包包邮",
            price: 999.99,
            num: 9
        },
        {
            id: "2",
            imgUrl: "img/商品1.jpg_.webp",
            title: "美国直邮 Kelty CT39-227809 男休闲双肩包包邮",
            price: 299.99,
            num: 99
        },
        {
            id: "3",
            imgUrl: "img/商品.jpg",
            title: "美国直邮 Kelty CT39-227809 男休闲双肩包包邮",
            price: 199.99,
            num: 100
        },
        {
            id: "4",
            imgUrl: "img/商品1.jpg_.webp",
            title: "美国直邮 Kelty CT39-227809 男休闲双肩包包邮",
            price: 9.99,
            num: 67
        }
    ]

    //获取商品列表的容器
    var ulDom = $("#productList");

    list.forEach((item) => {
        var liDom = $('<li><img src="' + item.imgUrl + '" alt=""><p>' + item.title + '</p><div class="price"><div><span>￥</span><span>' + item.price + '</span></div><div>销量: ' + item.num + '</div></div><div class="cartBtn">加入购物车</div></li>');

        ulDom.append(liDom);
    })

    //存数据
    var newArr = [];
    $(".cartBtn").click(function (){

        let index = $(this).index(".cartBtn");
        newArr.push(list[index]);
        
        // localStorage 浏览器缓存 特点：只有手动清除才能去掉缓存
        var strObj = JSON.stringify({cart: newArr});
        window.localStorage.setItem("cart",strObj);

        // sessionStorage 浏览器缓存 特点：浏览器关闭会自动清除缓存
        // var strObj = JSON.stringify({cart: newArr});
        // window.sessionStorage.setItem("cart",strObj);
    })

}