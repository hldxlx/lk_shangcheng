import ajax from './ajax'
// 1. 基础路径
const BASE_URL = 'http://127.0.0.1:3000';

// 2. 请求方法

// 2.1 请求首页的轮播图
export const getHomeCasual = ()=>ajax(BASE_URL + '/api/homecasual');


// 2.4 请求推荐的商品数据
export const getRecommendShopList = (params)=>ajax(BASE_URL + '/api/recommendshoplist', params);

// 2.5 请求搜索的列表数据
export const getSearchGoods = ()=>ajax(BASE_URL + '/api/searchgoods');
