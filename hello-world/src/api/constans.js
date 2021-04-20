let baseUrl = ""; 
let VUE_APP_TITLE = process.env.VUE_APP_TITLE;

switch (VUE_APP_TITLE) {
    case 'test':   // 注意这里的名字要和步骤二中设置的环境名字对应起来
        baseUrl = "http://test.com:8000/" //这里是测试环境中的url
        break;
    case 'prod':
        baseUrl = "http://prodction.com:8001"   //生产环境url
        break;
    default:
        baseUrl = "http://127.0.0.1:3000"  //这里是本地的请求url
}

export default {
    baseUrl
}