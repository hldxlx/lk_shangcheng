<template>
  <div class="recommend-container" v-if="recommendshoplist.length > 0">
    <ul class="recommend">
      <!--
      <li class="recommend-item" v-for="(item, index) in recommendshoplist" :key="index">
        <img :src="item.thumb_url" alt="" width="100%" v-if="item.thumb_url">
        <h4 class="item-title">{{item.short_name}}</h4>
        <div class="item-bottom">
            <span class="item-price">¥{{item.price / 100}}</span>
            <span class="item-sales">{{item.sales_tip}}</span>
            <button class="item-btn">找相关</button>
        </div>
      </li>
      -->
      <shop-list
        tag="li"
        v-for="(item, index) in recommendshoplist"
        :item = item
        :key="index"
      />
    </ul>
  </div>
</template>



<script>
  import {mapState} from 'vuex';
  import ShopList from './../../components/ShopList/ShopList';
  import BScroll from 'better-scroll';
  import {Indicator} from 'mint-ui';

  export default {
    name: "Recommend",
    data(){
      return {
        page:1,
        count:30
      }
    },
    mounted(){
      Indicator.open('正在加载数据...');
      this.$store.dispatch('reqRecommendShopList',{
        page:this.page,
        count:this.count,
        callback:() =>{
          Indicator.close();
        }
      })
    },
    computed:{
      ...mapState(['recommendshoplist'])
    },
    components:{
      ShopList
    },
    watch:{
      recommendshoplist(){
        this.$nextTick(() =>{
          // 让当前的页码+1
          this.page += 1;
          this._initBScroll();
        })
      }
    },
    methods:{
      _initBScroll(){
        //1.1 初始化
        this.listScroll = new BScroll('.recommend-container',{
          scrollY:true,
          probeType:3
        });
        //1.2 监听列表的滚动
        this.listScroll.on('touchEnd',(pos) =>{
           //1.3 监听下拉
          if(pos.y >= 50){

          }
//          console.log(this.listScroll.maxScrollY);
//          console.log(pos.y);
          //1.4 监听上拉
          Indicator.open('正在加载数据...');
          if(this.listScroll.maxScrollY > pos.y + 20){
            this.$store.dispatch('reqRecommendShopList',{
              page:this.page,
              count:this.count,
              callback:() =>{
                Indicator.close();
              }
            });

          }
        });
        // 1.3 列表滚动结束
        this.listScroll.on('scrollEnd', () => {
          this.listScroll.refresh();
        });

      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-container
    background #F5F5F5
    width 100%
    height 100%
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background #F5F5F5
      margin-bottom 50px
  /*
  .recommend-item:nth-child(2n-1)
     margin-right 1%
   .recommend-item
     width 49.5%
     background #FFF
     padding-bottom 15px
     margin-bottom 15px
     .item-title
       line-height 20px
       font-size 13px
       font-weight lighter
       height 20px
       overflow hidden
       margin 5px 0
       padding 0 5px
     .item-bottom
       display flex
       flex-direction row
       align-items center
       padding 0 6px
       .item-price
         flex 2
         color red
         font-weight bolder
         font-size 12px
       .item-sales
         flex 4
         font-size 10px
         color #666666
       .item-btn
         flex 2
         border 1px solid orangered
         height 26px
         border-radius 5px
         font-size 10px
         background-color transparent
         color red
         */
</style>
