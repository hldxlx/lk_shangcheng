import {
  HOME_CASUAL,
  SEARCH_GOODS
}
  from './mutation-types'
export default {
  [HOME_CASUAL](state, {homecasual}){
    state.homecasual = homecasual;
  },
  [SEARCH_GOODS](state, {searchgoods}){
    state.searchgoods = searchgoods;
  },
}
