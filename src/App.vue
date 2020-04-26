<template>
  <div id="app">
      <router-view></router-view>
      <Tabbar>
        <TabbarItem path="/home" activeColor="blue">
          <div class="fa fa-home" slot="tab-icon"></div>
          <div class="fa fa-star" slot="tab-icon-active"></div>
          <div slot="tab-text">首页</div>
        </TabbarItem>
        <TabbarItem path="/category" activeColor="yellow">
          <div class="fa fa-home" slot="tab-icon"></div>
          <div class="fa fa-star" slot="tab-icon-active"></div>
          <div slot="tab-text">分类</div>
        </TabbarItem>
        <TabbarItem path="/cart" activeColor="green">
          <div class="fa fa-home" slot="tab-icon"></div>
          <div class="fa fa-star" slot="tab-icon-active"></div>
          <div slot="tab-text">购物车</div>
        </TabbarItem>
        <TabbarItem path="/profile" activeColor="red">
          <div class="fa fa-home" slot="tab-icon"></div>
          <div class="fa fa-star" slot="tab-icon-active"></div>
          <div slot="tab-text">我的</div>
        </TabbarItem>
      </Tabbar>
  </div>
</template>

<script>
  import Tabbar from './components/tab-bar/Tabbar'
  import TabbarItem from './components/tab-bar/Tabbar-item'
  export default {
    name: 'App',
    components:{
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/font-awesome-4.7.0/css/font-awesome.min.css";
</style>
