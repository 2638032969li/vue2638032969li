<template>
  <div class="foot_nav">
    <div class="main_center">
      <ul class="nav">
        <li class="slid">
          <a target="_blank" class="lev1" href="/about/?1_1.html">
            <span>品牌故事</span>
            <tt>About us</tt>
          </a>
          <dl class="lev2">
            <dd><a target="_blank" href="/about/?2_1.html">关于我们</a></dd>
            <dd><a target="_blank" href="/about/?4_1.html">找到门店</a></dd>
          </dl>
          <div class="navbg"></div>
        </li>
        <li class="slid">
          <a target="_blank" class="lev1" href="/list/?5_1.html">
            <span>作品展示</span>
            <tt>works</tt>
          </a>
          <dl class="lev2">
            <dd><a target="_blank" href="/list/?7_1.html">韩式经典</a></dd>
            <dd><a target="_blank" href="/list/?6_1.html">时尚潮流</a></dd>
            <dd><a target="_blank" href="/list/?22_1.html">城市旅拍</a></dd>
            <dd><a target="_blank" href="/list/?23_1.html">新中国风</a></dd>
            <dd><a target="_blank" href="/list/?37_1.html">法式浪漫</a></dd>
          </dl>
          <div class="navbg"></div>
        </li>
        <li class="slid">
          <a target="_blank" class="lev1" href="/list/?9_1.html">
            <span>客片大赏</span>
            <tt>LoveShow</tt>
          </a>
          <dl class="lev2">
            <dd><a target="_blank" href="/list/?9_1.html">最新客照</a></dd>
            <dd><a target="_blank" href="/list/?11_1.html">客片排行</a></dd>
          </dl>
          <div class="navbg"></div>
        </li>
        <li class="slid">
          <a target="_blank" class="lev1" href="/list/?21_1.html">
            <span>服务报价</span>
            <tt>service</tt>
          </a>
          <dl class="lev2">
            <dd><a target="_blank" href="/about/?36_1.html">在线定单</a></dd>
            <dd><a target="_blank" href="/list/?30_1.html">热门套系</a></dd>
          </dl>
          <div class="navbg"></div>
        </li>
        <li class="slid">
          <a target="_blank" class="lev1" href="/list/?15_1.html">
            <span>优惠活动</span>
            <tt>activitylist</tt>
          </a>
          <dl class="lev2">
            <dd><a target="_blank" href="/about/?35_1.html">获取报价</a></dd>
            <dd><a target="_blank" href="/list/?15_1.html">热门活动</a></dd>
          </dl>
          <div class="navbg"></div>
        </li>
        <li class="slid">
          <a target="_blank" class="lev1" href="/list/?24_1.html">
            <span>新闻资讯</span>
            <tt>news</tt>
          </a>
          <dl class="lev2">
            <dd><a target="_blank" href="/list/?26_1.html">婚嫁资讯</a></dd>
            <dd><a target="_blank" href="/list/?27_1.html">新娘课堂</a></dd>
            <dd><a target="_blank" href="/list/?28_1.html">旅拍攻略</a></dd>
            <dd><a target="_blank" href="/list/?29_1.html">服务小贴士</a></dd>
          </dl>
          <div class="navbg"></div>
        </li>
      </ul>
    </div>

    <div class="ln">
      <el-divider></el-divider>

      <div class="hra">
        <span>友情链接：</span>
        <a href="#">旅拍婚纱照</a>
        <a href="#">婚宴酒店预订</a>
        <a href="#">钻戒品牌</a>
        <a href="#">婚纱照</a>
        <a href="#">搜好物</a>
        <a href="#">礼物</a>
        <a href="#">手表品牌排行榜</a>
        <a href="#">企业名录</a>
        <a href="#">加盟网</a>
        <a href="#">有货网</a>
        <!--<a href="#">升专本</a>-->
        <a href="#">第一黄金网</a>
        <a href="#">婚礼视频制作软件</a>
        <a href="#">房产网</a>
        <a href="#">乐维斯</a>
        <a href="#">发型设计图片</a>
        <a href="#">金价查询</a>
        <a href="#">装修效果图</a>
        <a href="#">世界之最网</a>
        <!--<a href="#">满分作文网</a>-->
        <a href="#">用招商加盟网</a>
        <a href="#">装修效果图</a>
        <a href="#">淘豆网</a>
        <!--<a href="#">挽回爱情</a>-->
        <!--<a href="#">听音乐</a>-->
        <a href="#">起点8</a>
        <a href="#">什么值得买</a>
        <a href="#">加盟项目推荐</a>
        <!--<a href="#">英语培训</a>-->
        <a href="#">创业加盟网</a>
        <a href="#">影楼</a>
        <a href="#">整形</a>
        <a href="#">化妆品品牌</a>
        <!--<a href="#">律师</a>-->
        <!--<a href="#">淘翠网</a>-->
        <a href="#">视频剪辑</a>
      </div>
      <div class="Got">
        <a href="#">浙ICP备13004478号&copy;广州XXXXXX有限公司 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 浙公安备案号：33010602006591</a>
      </div>
      <div class="Hot">
        <a href="#">通地址：广东省广州市荔湾一西路98号XXXXXXXX大厦40082 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 客服热线：400-159-9090</a>
      </div>
      <!--<img src="../assets/image/erweima.jpg" alt="">-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .foot_nav {
    width: 100%;
    background: #110c0d;
  }

  .main_center {
    height: auto;
    padding: 0 !important;
    display: flex;
    justify-content: space-around;
  }

  .foot_nav .slid .lev1[data-v-6c4d8baa] {
    font-size: 0.2rem;
    color: white;
    margin-bottom: 0.2rem;
  }

  .foot_nav .lev2 a:hover {
    color: #a33dff;
    text-decoration: underline;
  }

  .foot_nav .lev2 a {
    font-size: 0.15rem;
    height: 0.2rem;
    color: #b3b3b3;
  }

  .foot_nav ul {
    display: flex;
    justify-content: space-around;
  }

  div {
    display: block;
  }

  .foot_nav a {
    display: block;
    text-decoration: none;
  }

  .foot_nav li {
    display: inline-block;
    margin: 0.3rem;
  }

  tt {
    color: #798194;
  }

  .ln .el-divider {
    height: 0.001rem;
    background-color: #797979;
  }

  .ln span {
    font-size: 0.18rem;
    color: white;
  }

  .ln .hra a {
    font-size: 0.15rem;
    color: #b3b3b3;
    margin: 0.05rem;
  }

  .ln .hra {
    padding: 0.2rem 0.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .hra a:hover {
    color: #a33dff;
    text-decoration: underline;
  }

  .ln .Got {
    font-size: 0.15rem;
    display: flex;
    padding: 0.35rem 1rem;
    justify-content: space-around;

  }

  .Got a {
    color: #b3b3b3;
  }

  .ln .Hot {
    font-size: 0.15rem;
    display: flex;
    padding: 0 0.2rem 0.5rem;
    justify-content: space-around;
  }

  .Hot a {
    color: #b3b3b3;
  }

  .ln img {

  }
</style>
