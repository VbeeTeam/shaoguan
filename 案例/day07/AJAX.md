# AJAX

## 什么是 AJAX ？

AJAX 是一种用于创建快速动态网页的技术。

通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。

有很多使用 AJAX 的应用程序案例：新浪微博、Google 地图、开心网等等。

------

## AJAX 工作原理

![AJAX](https://www.runoob.com/wp-content/uploads/2013/09/ajax-yl.png)

# AJAX - 创建 XMLHttpRequest 对象

// 1、创建XMLHttpRequest对象

  var xmlhttp= new XMLHttpRequest();

# AJAX - 向服务器发送请求

如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：

xmlhttp.open("GET","ajax_info.txt",true);
xmlhttp.send();



| 方法                         | 描述                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| open(*method*,*url*,*async*) | 规定请求的类型、URL 以及是否异步处理请求。*method*：请求的类型；GET 或 POST*url*：文件在服务器上的位置*async*：true（异步）或 false（同步） |
| send(*string*)               | 将请求发送到服务器。*string*：仅用于 POST 请求传参           |



------

## GET 还是 POST？

与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。

然而，在以下情况中，请使用 POST 请求：

- 无法使用缓存文件（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 没有数据量限制）
- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

## GET 请求

1.一个简单 GET 请求：

xmlhttp.open("GET","/try/ajax/demo_get.php",true); 

xmlhttp.send();

2.带参数的GET请求

xmlhttp.open("GET","/try/ajax/demo_get2.php?fname=Henry&lname=Ford",true); xmlhttp.send();

## POST 请求

1.一个简单 POST 请求：

xmlhttp.open("POST","/try/ajax/demo_post.php",true); 

xmlhttp.send();

2.如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。

然后在 send() 方法中规定您希望发送的数据：

xmlhttp.open("POST","/try/ajax/demo_post2.php",true); 

xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

 xmlhttp.send("fname=Henry&lname=Ford");

| 方法                             | 描述                                                         |
| :------------------------------- | :----------------------------------------------------------- |
| setRequestHeader(*header,value*) | 向请求添加 HTTP 头。*header*: 规定头的名称*value*: 规定头的值 |

# AJAX - 服务器 响应

如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。

| 属性         | 描述                       |
| :----------- | :------------------------- |
| responseText | 获得字符串形式的响应数据。 |
| responseXML  | 获得 XML 形式的响应数据。  |

document.getElementById("myDiv").innerHTML=xmlhttp.responseText;

document.getElementById("myDiv").innerHTML=xmlhttp.responseXML;

# AJAX - onreadystatechange 事件

------

当请求被发送到服务器时，我们需要执行一些基于响应的任务。

下面是 XMLHttpRequest 对象的三个重要的属性：

| 属性               | 描述                                                         |
| :----------------- | :----------------------------------------------------------- |
| onreadystatechange | 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。 |
| readyState         | 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。0: 请求未初始化1: 服务器连接已建立2: 请求已接收3: 请求处理中4: 请求已完成，且响应已就绪 |
| status             | 200: "OK" 404: 未找到页面                                    |

在 onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。

当 readyState 等于 4 且状态为 200 时，表示响应已就绪：

## 实例

xmlhttp.onreadystatechange=function() {    

​	if (xmlhttp.readyState==4 && xmlhttp.status==200)    {        	   	document.getElementById("myDiv").innerHTML=xmlhttp.responseText;   

​	 } 

}

### 目前接口列表：

- 豆瓣网登录

https://accounts.douban.com/j/mobile/login/basic

{

​      'name': "ceshi",

​      "password": "123456"，



​    }

- 新实时段子

https://api.apiopen.top/getJoke?page=1&count=2&type=video

- 通过Id查段子

https://api.apiopen.top/getSingleJoke?sid=28654780

- 随机单句诗词推荐：

https://api.apiopen.top/singlePoetry

- 随机一首诗词推荐：

https://api.apiopen.top/recommendPoetry

- 搜索古诗词：

https://api.apiopen.top/searchPoetry?name=古风二首%20二

- 搜索古诗词作者：

https://api.apiopen.top/searchAuthors?name=李白

- 模糊搜索古诗词（可搜索诗词名、诗词内容、诗词作者）：

https://api.apiopen.top/likePoetry?name=李白

- 获取宋朝古诗词：

https://api.apiopen.top/getSongPoetry?page=1&count=20

- 获取唐朝古诗词：

https://api.apiopen.top/getTangPoetry?page=1&count=20

- 音乐搜索接口：

https://api.apiopen.top/searchMusic?name=不要说话

- 音乐电台接口：

https://api.apiopen.top/musicBroadcasting

- 音乐电台详情接口：

https://api.apiopen.top/musicBroadcastingDetails?channelname=public_tuijian_spring

- 音乐详情接口：

https://api.apiopen.top/musicDetails?id=604392760

- 音乐排行榜接口：

https://api.apiopen.top/musicRankings

- 音乐排行榜详情接口：

https://api.apiopen.top/musicRankingsDetails?type=1

- 每日视频推荐接口：

https://api.apiopen.top/todayVideo

- 视频大纲获取接口：

https://api.apiopen.top/videoHomeTab

- 视频分类推荐接口：

https://api.apiopen.top/videoCategory

- 视频分类推荐接口：

https://api.apiopen.top/videoCategoryDetails?id=14

- 根据ID推荐接口：

https://api.apiopen.top/videoRecommend?id=127398

- 新闻接口：

https://www.apiopen.top/journalismApi

- 随机推荐热门段子（包含文字、图片、GIF、视频）：

https://www.apiopen.top/satinApi?type=1&page=1

- 随机推荐热门段子【神评版本】（包含文字、图片、GIF、视频）：

https://www.apiopen.top/satinGodApi?type=1&page=1

- 随机推荐热门段子【神评版本】评论列表：

https://www.apiopen.top/satinCommentApi?id=27610708&page=1

- 热门小说推荐列表

https://www.apiopen.top/novelApi

- 小说搜索接口

https://www.apiopen.top/novelSearchApi?name=盗墓笔记

- 小说详情接口

https://www.apiopen.top/novelInfoApi?name=盗墓笔记

- 天气获取接口

https://www.apiopen.top/weatherApi?city=成都

- 美图获取接口

https://www.apiopen.top/meituApi?page=1

- 个性网名获取接口

https://www.apiopen.top/femaleNameApi?page=1

