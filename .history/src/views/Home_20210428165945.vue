<!--
 * @Author: your name
 * @Date: 2021-04-28 15:04:39
 * @LastEditTime: 2021-04-28 16:59:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home-1\src\views\Home.vue
-->
<template>
  <div class="home">
    <div class="wjs_header">
      <span><img src="/img/logo.png" class="logo" alt="" /></span>
      <span class="wz">装修方案</span>
      <span class="tb">
        <van-icon name="contact" />
      </span>
      <span class="wo"> 我的 </span>
      <span class="gang">
        <van-icon name="wap-nav" />
      </span>
      <span class="gps"> 导航 </span>
    </div>
    <div class="shenzi">
      <div class="one">
        
      </div>
    </div>
  </div>
</template>
<style>
.one{
  margin-left: 12px;
  height: 420px;
  width: 390px;
  background: #fff;
  background-image: url();
}
.shenzi{
  height: 920px;
  background: #ddd;
}
.gps {
   position: absolute;
  margin-left: 255px;
  top: 30px;
  color: #ddd;
  font-size: 10px;
}
.gang {
  position: absolute;
  margin-left: 260px;
  top: 15px;
}
.wjs_header {
  height: 50px;
  border: 0.013rem solid #000;
  position: relative;
}
.logo {
  height: 45px;
  width: 110px;
  margin-left: 5px;
}
.wz {
  font-style: 15px;
  line-height: 50px;
  position: absolute;
  margin-left: 70px;
}
.tb {
  position: absolute;
  margin-left: 220px;
  top: 15px;
}
.wo {
  position: absolute;
  margin-left: 218px;
  top: 30px;
  color: #ddd;
  font-size: 10px;
}
</style>
