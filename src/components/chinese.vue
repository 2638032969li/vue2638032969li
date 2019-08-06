<template>
  <div id="Ci">
    <h1>新中国风</h1>
    <el-divider></el-divider>
    <div id="To">
      <el-row type="flex" justify="space-around">
        <el-col :span="7" v-for="(v,k) in url1" :key="k">
          <el-image
            style="width: 100px; height: 100px"
            :src="v.picture"
            :fit="fill"></el-image>
          <div class="Kuang"></div>
          <span>{{v.name1}}<tt>{{v.name2}}</tt></span>
          <h3>{{v.name}}<i></i></h3>
        </el-col>
      </el-row>
      <div class="XX"></div>
      <el-row type="flex" justify="space-around">
        <el-col :span="7" v-for="(v,k) in url2" :key="k">
          <el-image
            style="width: 100px; height: 100px"
            :src="v.picture"
            :fit="fill"></el-image>
          <div class="Kuang"></div>
          <span>{{v.name1}}<tt>{{v.name2}}</tt></span>
          <h3>{{v.name}}<i></i></h3>

        </el-col>
      </el-row>
      <div class="XX"></div>
      <el-row type="flex" justify="space-around">
        <el-col :span="7" v-for="(v,k) in url3" :key="k">
          <el-image
            style="width: 100px; height: 100px"
            :src="v.picture"
            :fit="fill"></el-image>
          <div class="Kuang"></div>
          <span>{{v.name1}}<tt>{{v.name2}}</tt></span>
          <h3>{{v.name}}<i></i></h3>

        </el-col>
      </el-row>
      <div class="XX"></div>
      <div class="Tu">
        <img src="./../assets/image/weixin(1).png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import ur1 from './../assets/image/19052.jpg'
  import ur2 from './../assets/image/19053.jpg'
  import ur3 from './../assets/image/19054.jpg'
  import ur4 from './../assets/image/19055.jpg'
  import ur5 from './../assets/image/19056.jpg'
  import ur6 from './../assets/image/19057.jpg'
  import ur7 from './../assets/image/19058.jpg'
  import ur8 from './../assets/image/19059.jpg'
  import ur9 from './../assets/image/19060.jpg'
    export default {
        name: "chinese",
      data(){
        return{
          url1: [
            {name1: 'Photo Name', name2:'2019/6/26 9:23:48',name: '南越有佳人',  picture: ur1},
            {name1: 'Photo Name', name2:'2019/6/26 9:20:59', name: '胭脂嘻游记', picture: ur2},
            {name1: 'Photo Name', name2:'2019/6/26 9:18:41', name: '双嘻游', picture: ur3},
          ],
          url2: [
            {name1: 'Photo Name', name2:'2019/6/26 9:16:41', name: '秋水伊人', picture: ur4},
            {name1: 'Photo Name', name2:'2019/6/26 9:12:02', name: '翩跹娇子戏', picture: ur5},
            {name1: 'Photo Name', name2:'2019/6/26 9:09:48', name: '游龙戏凤', picture: ur6},
          ],
          url3: [
            {name1: 'Photo Name', name2:'2019/6/26 9:06:40', name: '玲珑醉花城', picture: ur7},
            {name1: 'Photo Name', name2:'2019/6/26 8:58:33', name: '东方红颜', picture: ur8},
            {name1: 'Photo Name', name2:'2019/6/26 8:56:10', name: '姹紫嫣红', picture: ur9},
          ],
          fill: 'fill',
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #Ci h1 {
    font-size: 0.38rem;
    font-weight: 100;
    margin: 0.24rem 0 ;
    margin-left: 1rem;
  }
  #Ci /deep/ .el-divider{
    margin-bottom: 0.5rem;
  }
  #To .el-row {
    margin: 0 0.65rem;
  }

  #To .el-col {
    position: relative;
    margin-top: 0.1rem;
    margin-bottom: 0.09rem;

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

  #To .el-col:hover .Kuang {
    display: block;
  }

  #To .el-col:hover h3 {
    /*display: block!important;*/
    /*color: #5fddff !important;*/
    font-weight: 700!important;
  }
  #To .el-col:hover i {
    background: #5fddff;
  }

  #To .el-image {
    width: 100% !important;
    height: 5rem !important;
  }
  #To h3 {
    font-size: 0.25rem;
    font-weight: 100;
    margin: 0.24rem 0;
  }
  #To h3 i{
    font-style: normal;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.15rem;
    margin-left: 10px;
    background: #c8c8c8;
    color: #fff;
    padding: 0 0.05rem;
  }
  #To span {
    font-size: 0.15rem;
    color: #999999;
    display: flex;
  }
  #To span tt{
    margin-left: 1.3rem;
    font-weight: 400;
  }
  .XX {
    border: 1px dashed #d7d7d7;
    margin: 0 0.87rem 0.24rem;
  }

  .Tu img {
    border: 0;
    display: block;
    margin: 0.44rem auto;
    width: 11.8rem;
  }

</style>
