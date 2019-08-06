<template>
  <div id="dpp">
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><!--<router-link to="/I" target="_self">首页</router-link>-->首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">品牌故事</template>
        <el-menu-item index="2-1">关于我们</el-menu-item>
        <el-menu-item index="2-2">找到店门</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">作品展示</template>
        <el-menu-item index="2-3">
          <router-link to="/C" target="_blank">韩式经典</router-link>
        </el-menu-item>
        <el-menu-item index="2-4">
          <router-link to="/Fa" target="_blank">时尚潮流</router-link></el-menu-item>
        <el-menu-item index="2-5">
          <router-link to="/Lp" target="_blank">城市旅拍</router-link></el-menu-item>
        <el-menu-item index="2-6">
          <router-link to="/Ch" target="_blank">新中国风</router-link></el-menu-item>
        <el-menu-item index="2-7">
          <router-link to="/Fn" target="_blank">法式浪漫</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">客片欣赏</template>
        <el-menu-item index="2-8">
          <router-link to="/K" target="_blank">最新客照</router-link>
        </el-menu-item>
        <el-menu-item index="2-9">
          <router-link to="/K" target="_blank">客片排行</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">服务报价</template>
        <el-menu-item index="2-10">在线订单</el-menu-item>
        <el-menu-item index="2-11">热门套系</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">优惠活动</template>
        <el-menu-item index="2-12">获取报价</el-menu-item>
        <el-menu-item index="2-13">热门活动</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">客片欣赏</template>
        <el-menu-item index="2-14">婚嫁资讯</el-menu-item>
        <el-menu-item index="2-15">新娘课堂</el-menu-item>
        <el-menu-item index="2-16">旅拍攻略</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  #dpp .el-menu--horizontal > .el-menu-item {
    height: 0.75rem;
    line-height: 0.65rem;
  }

  #dpp .el-menu-item {
    font-size: 0.18rem;
    margin: 0 0.24rem;
  }

  #dpp /deep/ .el-menu--horizontal > .el-submenu > .el-submenu__title {
    height: 0.75rem;
    line-height: 0.65rem;
  }

  #dpp /deep/ .el-submenu__title {
    font-size: 0.18rem;
  }

  /deep/ horizontal {
    border-bottom: solid 5px #e6e6e6;
  }

  #dpp > ul > .el-menu-item is-active {
    margin: 0.28rem;
  }

  #dpp > ul {
    display: flex;
    justify-content: center;
  }
</style>
