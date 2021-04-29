<!--
 * @Author: your name
 * @Date: 2021-04-28 15:04:39
 * @LastEditTime: 2021-04-28 16:49:49
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
    </div>
  </div>
</template>
<style>
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
  margin-left: 220px;
  top: 25px;
  font-style: 10px;
}
</style>
