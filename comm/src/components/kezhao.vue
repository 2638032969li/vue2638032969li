<template>
  <div id="ke">
    <h2>最新客照</h2>
    <el-divider></el-divider>
    <el-tabs v-model="activeName">
      <el-tab-pane label="最新客照" name="1">
        <div id="To">
          <el-row type="flex" justify="space-around">
            <el-col :span="7" v-for="(v,k) in url1" :key="k">
              <el-image
                style="width: 100px; height: 100px"
                :src="v.picture"
                :fit="fill"></el-image>
              <div class="Xiang"></div>
              <div class="Kuang"></div>
              <p>{{v.name}}</p>
              <span>{{v.name1}}</span>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around">
            <el-col :span="7" v-for="(v,k) in url2" :key="k">
              <el-image
                style="width: 100px; height: 100px"
                :src="v.picture"
                :fit="fill"></el-image>
              <div class="Xiang"></div>
              <div class="Kuang"></div>
              <p>{{v.name}}</p>
              <span>{{v.name1}}</span>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around">
            <el-col :span="7" v-for="(v,k) in url3" :key="k">
              <el-image
                style="width: 100px; height: 100px"
                :src="v.picture"
                :fit="fill"></el-image>
              <div class="Xiang"></div>
              <div class="Kuang"></div>
              <p>{{v.name}}</p>
              <span>{{v.name1}}</span>
            </el-col>
          </el-row>
          <div class="XX"></div>
          <div class="Tu">
            <img src="./../assets/image/weixin(1).png" alt="">
          </div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="客照排序" name="2">
        <div id="Po">
          <el-row type="flex" justify="space-around">
            <el-col :span="7" v-for="(v,k) in url4" :key="k">
              <el-image
                style="width: 100px; height: 100px"
                :src="v.picture"
                :fit="fill"></el-image>
              <div class="Xiang"></div>
              <div class="Kuang"></div>
              <p>{{v.name}}</p>
              <span>{{v.name1}}</span>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around">
            <el-col :span="7" v-for="(v,k) in url5" :key="k">
              <el-image
                style="width: 100px; height: 100px"
                :src="v.picture"
                :fit="fill"></el-image>
              <div class="Xiang"></div>
              <div class="Kuang"></div>
              <p>{{v.name}}</p>
              <span>{{v.name1}}</span>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around">
            <el-col :span="7" v-for="(v,k) in url6" :key="k">
              <el-image
                style="width: 100px; height: 100px"
                :src="v.picture"
                :fit="fill"></el-image>
              <div class="Xiang"></div>
              <div class="Kuang"></div>
              <p>{{v.name}}</p>
              <span>{{v.name1}}</span>
            </el-col>
          </el-row>
          <div class="XX"></div>
          <div class="Tu">
            <img src="./../assets/image/weixin(1).png" alt="">
          </div>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
  import ur1 from './../assets/image/19061.jpg'
  import ur2 from './../assets/image/19062.jpg'
  import ur3 from './../assets/image/19063.jpg'
  import ur4 from './../assets/image/19064.jpg'
  import ur5 from './../assets/image/19065.jpg'
  import ur6 from './../assets/image/19066.jpg'
  import ur7 from './../assets/image/19067.jpg'
  import ur8 from './../assets/image/19068.jpg'
  import ur9 from './../assets/image/19069.jpg'
  import ur10 from './../assets/image/18121.jpg'
  import ur11 from './../assets/image/18122.jpg'
  import ur12 from './../assets/image/18123.jpg'
  import ur13 from './../assets/image/18124.jpg'
  import ur14 from './../assets/image/18125.jpg'
  import ur15 from './../assets/image/18126.jpg'
  import ur16 from './../assets/image/18127.jpg'
  import ur17 from './../assets/image/18128.jpg'
  import ur18 from './../assets/image/18129.jpg'

  export default {
    name: 'kezhao',
    data() {
      return {
        activeName: '1',
        url1: [
          {name: 'Mr.梁先生 & Ms.孙小姐', name1: 'Time:2019/6/24 15:15:06', picture: ur1},
          {name: 'Mr.梁先生 & Ms.孙小姐', name1: 'Time:2019/6/24 15:13:14', picture: ur2},
          {name: 'Mr.何先生 & Ms刘小姐', name1: 'Time:2019/6/24 15:00:00', picture: ur3},
        ],
        url2: [
          {name: 'Mr.邓先生 & Ms.雷小姐', name1: 'Time:2019/6/20 13:13:14', picture: ur4},
          {name: '路行者', name1: 'Time:2019/5/20 15:20:00', picture: ur5},
          {name: '耀眼浪漫', name1: 'Time:2019/5/20 15:21:00', picture: ur6},
        ],
        url3: [
          {name: '两人的派对', name1: 'Time:2019/5/1 12:12:12', picture: ur7},
          {name: '白色温暖', name1: 'Time:2019/5/1 12:00:00', picture: ur8},
          {name: '色彩森林', name1: 'Time:2019/5/1 11:50:32', picture: ur9},
        ],
        url4: [
          {name: 'Mr.林先生 & Ms.李小姐', name1: '共收到<1>个好友祝福', picture: ur10},
          {name: 'Mr.何先生 & Ms.陈小姐', name1: '共收到<1>个好友祝福', picture: ur11},
          {name: 'Mr.陈 & Ms.黄', name1: '共收到<1>个好友祝福', picture: ur12},
        ],
        url5: [
          {name: 'Mr.龚 & Ms.赵', name1: '共收到<5>个好友祝福', picture: ur13},
          {name: 'Mr.黄观伟 & Ms.易佳琪', name1: '共收到<1>个好友祝福', picture: ur14},
          {name: 'Mr.柯华 & Ms.伍斯乐', name1: '共收到<0>个好友祝福', picture: ur15},
        ],
        url6: [
          {name: 'Mr.鹏程 & Ms.孙明艳', name1: '共收到<0>个好友祝福', picture: ur16},
          {name: 'Mr.CHEN', name1: '共收到<1>个好友祝福', picture: ur17},
          {name: 'Michael & Ms.王微尔', name1: '共收到<1>个好友祝福', picture: ur18},
        ],
        fill: 'fill',
      }
    },
    methods: {}
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #ke .el-tabs__active-bar {
    height: 0.03rem;
  }

  #ke .el-tabs__header {
    margin: 0.1rem 0.75rem;
  }

  #ke h2 {
    font-size: 0.38rem;
    font-weight: 100;
    margin: 0.24rem 0 ;
    margin-left: 1rem;
  }
  #ke /deep/ .el-divider{
    background-color: rgba(125, 178, 177, 0.7);
  }

  .XX {
    border: 1px dashed #d7d7d7;
    margin: 0 0.85rem 0.24rem;
  }

  .Tu img {
    border: 0;
    display: block;
    margin: 0.44rem auto;
    width: 11.8rem;
  }

  /*最新客照*/
  #ke .el-tabs__item {
    font-size: 0.3rem;
    font-weight: 100;
  }

  #ke .el-tabs__nav-scroll {
    display: flex;
    justify-content: space-around;
    margin: 0 0.1rem;
  }

  #ke .el-tabs__nav > div:nth-of-type(1) {
    width: 1.2rem !important;
  }

  #To .el-row {
    margin: 0 0.65rem;
  }

  #To .el-col {
    position: relative;
    margin-top: 0.1rem;
    margin-bottom: 0.09rem;

  }

  #To .Xiang {
    width: 3.7rem;
    height: 5.15rem;
    position: absolute;
    top: 0;
    right: 0;
    border: 1px dashed #e0e0e0;
  }

  #To .Kuang {
    width: 3.3rem !important;
    height: 4.8rem !important;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(125, 178, 177, 0.7) url("../assets/image/shousuo.png") no-repeat center;
    background-size: 0.8rem;
    /*border: 0.2rem solid #5fddff;*/
    display: none;
  }

  #To .el-col:hover .Kuang {
    display: block;
    /* height: 4.8rem!important;*/
  }

  #To .el-col:hover .Kuang + p {
    display: block;
    color: #5fddff;
    font-weight: 700;
  }

  #To .el-image {
    width: 100% !important;
    height: 5rem !important;
  }

  #To p {
    font-size: 0.25rem;
    font-weight: 100;
    text-align: center;
  }

  #To span {
    font-size: 0.15rem;
    color: #999999;
    display: flex;
    justify-content: center;
    margin: 0.2rem 0;
  }

  /*客照排行*/
  #Po .el-row {
    margin: 0 0.65rem;
  }

  #Po .el-col {
    position: relative;
    margin-bottom: 0.1rem;
    margin-top: 0.2rem;
  }

  #Po .Kuang {
    width: 3.56rem !important;
    height: 5rem !important;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(125, 178, 177, 0.7) url("../assets/image/shousuo.png") no-repeat center;
    background-size: 0.8rem;
    /*border: 0.2rem solid #5fddff;*/
    display: none;
  }

  #Po .el-col:hover .Kuang {
    display: block;
    /* height: 4.8rem!important;*/
  }

  #Po .el-image {
    width: 100% !important;
    height: 5rem !important;
  }

  #Po .Xiang {
    border: 1px dashed #e0e0e0;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -0.15rem;
    margin-right: -0.115rem;
    overflow: hidden;
    width: 3.6rem;
    height: 5.09rem;
    padding: 0.1rem;
  }

  #Po .el-col:hover .Kuang + p {
    display: block;
    color: #5fddff;
    font-weight: 700;
  }

  #Po p {
    font-size: 0.25rem;
    font-weight: 100;
    text-align: center;
  }

  #Po span {
    font-size: 0.15rem;
    color: #999999;
    display: flex;
    justify-content: center;
    margin: 0.2rem 0;
  }
</style>
