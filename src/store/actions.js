import {
  getHomeCasual,
  getSearchGoods
} from '../api'
import {HOME_CASUAL,SEARCH_GOODS} from './mutation-types'
export default {
  //获取首页轮播图
  async reqHomeCasual({commit}) {
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.message.data})
  },
  // 5. 获取推荐的商品数据
  async reqSearchGoods({commit}, callback) {
    const result = await getSearchGoods();
    commit(SEARCH_GOODS, {searchgoods: result.message.data})

    callback && callback();

  },
}
