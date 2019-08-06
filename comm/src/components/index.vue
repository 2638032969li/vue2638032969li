<template>
  <div id="app">
    <div class="lun">
      <el-carousel :interval="3000" arrow="always" :height="bannerHeight+'rem'">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
          <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="Ka">
      <h2>FOUR</h2>
      <p>五大<span>源创</span>摄影风格 &lt;热门推荐&gt; </p>
      <div class="pp">
        <strong>ORIGLNAL</strong>
        <strong>PHOTOGRAPHICSTYTE</strong>
      </div>
      <el-row type="flex" justify="space-around" style="padding:0 0.65rem">
        <el-col :span="4">
          <el-card shadow="hover">

          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover">

          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover">

          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover">

          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover">

          </el-card>
        </el-col>
      </el-row>

      <div id="To">
        <el-row type="flex" justify="space-around">
          <el-col :span="7" v-for="(v,k) in url1" :key="k">
            <el-image
              style="width: 100px; height: 100px"
              :src="v.picture"
              :fit="fill"></el-image>
            <div class="Kuang"></div>
            <h4>{{v.name}}<i></i></h4>
            <!--<tt>{{v.name1}}</tt>
            <tt>{{v.name2}}</tt>-->
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
          <el-col :span="7" v-for="(v,k) in url2" :key="k">
            <el-image
              style="width: 100px; height: 100px"
              :src="v.picture"
              :fit="fill"></el-image>
            <div class="Kuang"></div>
            <h4>{{v.name}}<i></i></h4>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="divi">
      <el-divider><span class="sp">热门套系推荐 </span><span class="an">TOP RECOMMENDED</span></el-divider>
    </div>
    <div class="demo-image__placeholder">
      <div class="block">
        <span class="demonstration"></span>
        <el-image :src="src"></el-image>
      </div>
    </div>
    <div class="divi">
      <el-divider><span class="sp">热拍风格 </span><span class="an">WORK SHOW</span></el-divider>
    </div>
    <div class="lun2">
      <el-carousel :interval="2000" arrow="always" :height="bannerHeight+'rem'" class="aaa">
        <el-carousel-item v-for="item in imagesb" :key="item.id">
          <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
      <el-divider></el-divider>
    </div>
    <div class="div02">
      <el-divider><span class="sp1">客片大赏 </span><span class="an1">LOVE SHOW</span></el-divider>
    </div>
    <div class="demo-image__placeholder">
      <div class="block">
        <span class="demonstration"></span>
        <el-image :src="src1">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
        <el-row class="lol">
          <el-button type="success" plain>点击查看客照</el-button>
        </el-row>
      </div>
    </div>

    <div class="Xin">
      <template>
        <div class="div03">
          <el-divider><span class="sp1">新闻资讯 </span><span class="an1">LATEST NEWS</span></el-divider>
        </div>
      </template>
      <el-row>
        <div class="Dr">
          <el-col :span="2" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 2">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/image/nopic.gif" class="image">
            </el-card>
          </el-col>
          <h3>&nbsp;&nbsp;领结婚证几寸照片 需要多少张</h3>
          <h6>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../assets/image/msg_01.png" alt=""> by wrmjy tean | <img
            src="../assets/image/msg_02.png"> Time:2019/8/8 18:0.:03</h6>
        </div>
        <div class="Dr">
          <el-col :span="2" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 10">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/image/nopic2.jpg" class="image">
            </el-card>
          </el-col>
          <h3>&nbsp;&nbsp;婚纱证件怎么拍更好看</h3>
          <h6>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../assets/image/msg_01.png" alt=""> by wrmiy tean | <img
            src="../assets/image/msg_02.png"> Time:2019/8/15 17:50:53</h6>
        </div>
      </el-row>
      <el-row>
        <div class="Dr">
          <el-col :span="2" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 2">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/image/nopic3.jpg" class="image">
            </el-card>
          </el-col>
          <h3>&nbsp;&nbsp;丽江拍婚纱照需要准备什么</h3>
          <h6>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../assets/image/msg_01.png" alt=""> by wrmiy team | <img
            src="../assets/image/msg_02.png"> Time:2019/8/20 15:02:30</h6>
        </div>
        <div class="Dr">
          <el-col :span="2" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 10">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/image/nopic.gif" class="image">
            </el-card>
          </el-col>
          <h3>&nbsp;&nbsp;拍婚纱照需要注意什么</h3>
          <h6>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../assets/image/msg_01.png" alt=""> by mrniy tean | <img
            src="../assets/image/msg_02.png"> Time:2019/9/8 15:23:02</h6>
        </div>
      </el-row>
      <el-row>
        <div class="Dr">
          <el-col :span="2" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 2">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/image/nopic1.jpg" class="image">
            </el-card>
          </el-col>
          <div>

            <h3>&nbsp;&nbsp;九宫格婚纱照摆法图片与技巧</h3>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../assets/image/msg_01.png" alt=""> by wrmij tean | <img
              src="../assets/image/msg_02.png"> Time:2019/910 18:20:30</h6>
          </div>
        </div>

        <div class="Dr">
          <el-col :span="2" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 10">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/image/nopic.gif" class="image">
            </el-card>
          </el-col>
          <h3>&nbsp;&nbsp;拍婚纱照要注意什么不被坑</h3>
          <h6>&nbsp;&nbsp;&nbsp;&nbsp;<img src="../assets/image/msg_01.png" alt=""> by wrmjy tean | <img
            src="../assets/image/msg_02.png">Time:2019/7/23 17:50:02</h6>
        </div>
      </el-row>
      <div class="BB">
        <template>
          <div>
            <h1>CONTACTUS</h1>
            <h3>联系我们</h3>
            <el-divider></el-divider>
          </div>
        </template>
        <el-row>
          <el-col :span="11">
            <div class="grid-content bg-purple">
              <template>
                <div class="Duo">
                  <h2>华南总店</h2>
                  <p><i class="el-icon-location-outline"></i>广州完美婚纱摄影有限公司</p>
                  <p><span>华南总店地址：</span>广州市荔湾区沙区面北街3号</p>
                  <p><span>珠海分店地址：</span>珠海区新滘中路海珠湿地公园侧</p>
                  <p><span>天河分店地址：</span>广州市天河南一路（地铁3号线体育路B出口）</p>
                  <el-divider></el-divider>
                  <h2>更多分店</h2>
                  <p><span>佛山分店地址：</span>广州佛山市禅城区佛山创意产业园</p>
                  <p><span>大沥分店地址：</span>广州佛山海南区大沥兴隆街</p>
                  <p><span>黄岐分店地址：</span>广州佛山南海区黄岐广佛路岐城大厦</p>
                  <p><span>西樵分店地址：</span>广州佛山南海区西樵镇登山大道东街七巷</p>
                  <p><span>高明分店地址：</span>广州佛山高明区荷城街道沧江路</p>
                  <el-divider></el-divider>
                  <h2>蜜月旅拍分店</h2>
                  <p><span>大理分店地址：</span>云南省大理白族自治洲大理市双廊镇双廊镇双廊村八组455号（农业银行ARM取款机对面）</p>
                  <p><span>丽江分店地址：</span>丽江市束河古镇仁路（近青龙桥）3号5号</p>
                  <p><span>三亚分店地址：</span>三亚市三亚湾路163号与玉海国际度假酒店二楼</p>
                  <!--<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>-->
                </div>
              </template>
            </div>
          </el-col>
          <el-col :span="13">
            <div class="grid-content bg-purple-light">
              <el-form ref="form" :model="sizeForm">
                <el-form-item>
                  <el-col :span="11">
                    <el-input v-model="sizeForm.name" placeholder="您的姓名："></el-input>
                  </el-col>
                  <el-col class="line" :span="2">&nbsp;&nbsp;&nbsp;</el-col>
                  <el-col :span="11">
                    <el-input v-model="sizeForm.phone" placeholder="您的手机（必填）："></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="sizeForm.wechat" placeholder="您的QQ/微信："></el-input>
                </el-form-item>
                <el-form-item class="dd">
                  <el-input type="textarea" v-model="sizeForm.remark" placeholder="您的备注："></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit"> 提交</el-button>
                </el-form-item>
              </el-form>

            </div>
          </el-col>
        </el-row>

      </div>
    </div>


  </div>
</template>

<script>
  import url from './../assets/image/1901.jpg'
  import ur2 from './../assets/image/1902.jpg'
  import ur3 from './../assets/image/1903.jpg'
  import ur4 from './../assets/image/1904.jpg'
  import ur5 from './../assets/image/1905.jpg'
  import ur6 from './../assets/image/1906.jpg'

  export default {
    name: "index",
    data() {
      return {
        imagesbox: [{id: 0, idView: require("../assets/image/lunbo4.jpg")},
          {id: 1, idView: require("../assets/image/lunbo2.jpg")},
          {id: 2, idView: require("../assets/image/lunbo3.jpg")},
          {id: 3, idView: require("../assets/image/lunbo1.jpg")}],
        src: 'https://img.bj520.com/newtheme/images/index_four/new-photo.jpg',
        imagesb: [{id: 0, idView: require("../assets/image/1801.jpg")},
          {id: 1, idView: require("../assets/image/18102.jpg")},
          {id: 2, idView: require("../assets/image/18103.jpg")},
          {id: 3, idView: require("../assets/image/1804.jpg")},
          {id: 4, idView: require("../assets/image/1805.jpg")},
          {id: 5, idView: require("../assets/image/1806.jpg")},
        ],
        src1: 'http://www.wmjy.com/upLoad/images/181015/weixintupian_20181015133111_kantuwang.jpg',
        sizeForm: {
          name: '',
          phone: '',
          wechat: '',
          remark: '',
          delivery: false,
        },
        url1: [
          {name: 'OURS果', picture: url},
          {name: 'ADJURATORY戒指', picture: ur2},
          {name: '梦', picture: ur3},
        ],
        url2: [
          {name: '绿野仙境的童话', picture: ur4},
          {name: '岛边的童话', picture: ur5},
          {name: '春の私语', picture: ur6}
        ],
        bannerHeight: 5.68,
        fill: 'fill'
      }
    },
    method() {
    },
    methods: {
      onSubmit() {

      },
    },
    mounted() {

    },
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  /*第一部分轮播*/
  .lun .el-carousel__container {
    height: 5.5rem;
  }

  .lun .el-carousel__arrow {
    width: 0.8rem;
    height: 0.8rem;
    font-size: 0.50rem;
    margin: 0 0.5rem;
  }

  .lun .el-carousel__button {
    width: 0.40rem;
    height: 0.05rem;
  }

  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-tooltip el-button {
    width: 100px;
    height: 30px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .Te {
    text-align: center;
    margin: 4.5rem;
  }

  .Te h2 {
    font-size: 2.5rem;
    margin-left: 0;
  }

  .Te h3 {
    font-weight: 400;
    font-size: 2.2rem;
  }

  .Te p {
    font-weight: 100;
    font-size: 1px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .image {
    width: 100%;
    height: 100%;
    display: block;
  }

  .clearfix:after {
    display: table;
    content: "";
  }

  .divi {
    background: #e3e1e9;
    margin: 1rem 0;
  }

  .divi .sp {
    color: #7aced0;
    font-size: 0.38rem;
    font-weight: bold;
  }

  .divi .an {
    font-size: 0.3rem;
    font-weight: 100;
  }

  /*第二部分轮播*/
  .aaa /deep/ .el-carousel__button {
    width: 95px;
    height: 95px;
    border-radius: 50%;
    border: 8px white solid;
    opacity: 1;
    /*margin-bottom:20px ;*/
    margin: 12px 0px;
    /*top: 420px;*/
  }

  .aaa > ul > li:nth-of-type(1) button {
    background: url("../assets/image/181001.jpg") no-repeat center;
    background-size: cover;
  }

  .aaa > ul > li:nth-of-type(2) button {
    background: url("../assets/image/181002.jpg") no-repeat center;
    background-size: cover;
  }

  .aaa > ul > li:nth-of-type(3) button {
    background: url("../assets/image/181003.jpg") no-repeat center;
    background-size: cover;
  }

  .aaa > ul > li:nth-of-type(4) button {
    background: url("../assets/image/181004.jpg") no-repeat center;
    background-size: cover;
  }

  .aaa > ul > li:nth-of-type(5) button {
    background: url("../assets/image/181005.jpg") no-repeat center;
    background-size: cover;
  }

  .aaa > ul > li:nth-of-type(6) button {
    background: url("../assets/image/181006.jpg") no-repeat center;
    background-size: cover;
  }

  .aaa /deep/ .is-active button {
    border: 8px #5fddff solid;
  }

  .aaa > ul {
    z-index: 3;
    width: 880px;
  }

  .aaa > ul > li {
    margin: 15px 20px;
  }

  .aaa > div {
    position: relative;
  }

  .aaa > div > button {
    background: transparent;
    position: absolute;
    color: white;
    top: 413px;
    font-size: 35px;
  }

  .aaa > div > button:hover {
    background: transparent;
  }

  .aaa > div > button > .el-icon-arrow-right:hover {
    color: #5fddff;
  }

  .aaa > div > button > .el-icon-arrow-left:hover {
    color: #5fddff;
  }

  .aaa > div > button:nth-of-type(1) {
    margin-left: 0px;
  }

  .aaa > div > button:nth-of-type(2) {
    margin-right: 0px;
  }

  .aaa + div {
    position: relative;
    top: -105px;
    z-index: 2;
  }

  .aaa + div .el-divider {
    background: white;
  }

  .lun2 .aaa .el-carousel__arrow {
    /*margin: 0 55px;*/
  }

  /*卡片*/
  #Ka {
    width: 100%;
    background: #eceaf2;
    padding: 0.5rem 0;
  }

  #Ka .el-row {
    margin: 0.6rem 0;
  }

  #Ka .el-card__body {
    padding: 0.5rem;
  }

  #Ka > div > .el-col:nth-of-type(1) .el-card__body {
    background: url("../assets/image/ka1.png") no-repeat center;
    background-size: cover;
  }

  #Ka > div > .el-col:nth-of-type(2) .el-card__body {
    background: url("../assets/image/ka2.png") no-repeat center;
    background-size: cover;
  }

  #Ka > div > .el-col:nth-of-type(3) .el-card__body {
    background: url("../assets/image/ka3.png") no-repeat center;
    background-size: cover;
  }

  #Ka > div > .el-col:nth-of-type(4) .el-card__body {
    background: url("../assets/image/ka4.png") no-repeat center;
    background-size: cover;
  }

  #Ka > div > .el-col:nth-of-type(5) .el-card__body {
    background: url("../assets/image/ka5.png") no-repeat center;
    background-size: cover;
  }

  #Ka > div > .el-col {
    transition: All 0.4s ease-in-out;
    -webkit-transition: All 0.4s ease-in-out;
    -moz-transition: All 0.4s ease-in-out;
    -o-transition: All 0.4s ease-in-out;
  }

  /*鼠标悬停卡片放大*/
  #Ka > div > .el-col:hover {
    transform: scale(1.15);
    -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    -o-transform: scale(1.15);
    -ms-transform: scale(1.15);
  }

  /*p标签*/
  #Ka h2 {
    font-size: 0.8rem;
    color: #5fddff;
    margin-left: 0.8rem;
  }

  #Ka p {
    font-size: 0.3rem;
    font-weight: 100;
    color: #444b5d;
    margin-left: 3.15rem;
    margin-top: -0.9rem;
  }

  #Ka p span {
    font-weight: 500;
    color: #110c0d;
  }

  #Ka .pp {
    font-size: 0.2rem;
    margin-left: 3.15rem;
    color: #545f76;
  }

  /* 卡片（下） */
  #To .el-row {
    margin: 0 0.65rem;
  }

  #To .el-col {
    position: relative;
    margin-bottom: 0.4rem;
  }

  #To .Kuang {
    width: 3.23rem !important;
    height: 4.6rem !important;
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5) url("../assets/image/shousuo.png") no-repeat center;
    background-size: 0.8rem;
    border: 0.2rem solid #5fddff;
    display: none;
  }

  #To .el-col:hover .Kuang{
    display: block;
  }
  #To .el-col:hover .Kuang+h4{
     display: block;
     font-weight: 600;
   }
  #To .el-col:hover i{
    background: #5fddff;
  }

  #To .el-image {
    width: 100% !important;
    height: 5rem !important;
  }
  /*字体*/
  #To h4 i{
    font-style: normal;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.15rem;
    margin-left: 10px;
    background: #d3d3d3;
    color: #fff;
    padding: 0 0.05rem;
  }
  #To h4{
    font-size: 0.25rem;
    font-weight: 100;
  }

  .div02 {
    background: #e3e1e9;
    margin: 1rem 0;
  }

  .div02 .sp1 {
    color: #7aced0;
    font-size: 0.38rem;
    font-weight: bold;
  }

  .div02 .an1 {
    font-size: 0.3rem;
    font-weight: 100;
  }

  .lol {
    display: flex;
    justify-content: center;
    top: -1.4rem;
  }

  .lol .el-button {
    width: 2rem;
  }

  .Xin {
    width: 100%;
    background: #eceaf2;
    padding: 0.5rem 0;
  }

  .div03 .el-divider__text {
    background: #eceaf2;
  }

  .div03 .sp1 {
    color: #7aced0;
    font-size: 0.38rem;
    font-weight: bold;
  }

  .div03 .an1 {
    font-size: 0.3rem;
    font-weight: 100;

  }

  .Xin .el-card {
    margin: 0.15rem 0;
  }

  .Xin h3 {
    font-size: 0.3rem;
    font-weight: 100;
    margin: 0.12rem;
    margin-top: 0.2rem;
  }

  .Xin h6 {
    font-size: 0.13rem;
    font-weight: 200;
  }

  .Xin .Dr:hover h3 {
    color: #5fddff;
  }

  .BB h1 {
    text-align: center;
    font-size: 0.58rem;
  }

  .BB h3 {
    font-size: 0.18rem;
    text-align: center;
  }

  .BB .el-divider {
    height: 2px;
    background-color: #c7cad1;
  }

  .BB {
    margin: 0.6rem;
  }

  .dd textarea {
    height: 2rem !important; /*优先级变高*/
    text-align: left;
  }

  .BB .el-input__inner {
    height: 0.5rem;
  }

  .BB .el-button {
    margin-left: 5.3rem;
    width: 1.4rem;
  }

  .BB h2 {
    font-size: 0.30rem;
  }

  .Duo h2 {
    font-size: 0.28rem;
  }

  .Duo p {
    font-size: 0.15rem;
    color: #999999;
  }

  .Duo span {
    color: #110c0d;
    font-weight: 600;
  }

  .Duo > .el-divider {
    height: 0;
    border-bottom: 1px dashed #999999;;
    font-size: 0 !important;
    font-weight: 400;
    margin: 0;
    width: 4rem;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
  }


</style>
