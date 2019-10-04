import {
  HOME_CASUAL,
  SEARCH_GOODS,
  RECOMMEND_SHOP_LIST
}
  from './mutation-types'
export default {
  [HOME_CASUAL](state, {homecasual}){
    state.homecasual = homecasual;
  },
  [RECOMMEND_SHOP_LIST](state, {recommendshoplist}){
    state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist.data);
    console.log(state.recommendshoplist,'333');
  },
  [SEARCH_GOODS](state, {searchgoods}){
    state.searchgoods = searchgoods;
  },
}
