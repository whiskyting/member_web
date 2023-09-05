<template>
  <div class="header">
    <div class="title" >
      4A2B
    </div>
    <div class="titimg">
      <!-- <img src="logoicon.png"> -->
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #f8d479;
  width: auto;
  height: 60px;
  padding: 10px 0px 10px 20px;
  display: inline-flex;
}

.title {
  font-size: x-large;
  color: #000;
  font-family: 'Times New Roman', Times, serif;
  font-weight:bold;
  
}

.titimg{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0; 
  width: 10%;
  height: 100%; /* 高和寬都填滿容器 */
  object-fit: cover; /* 和background-image設定background-size: cover一樣，圖片剛好填滿 */
  object-position: center;
}
</style>
