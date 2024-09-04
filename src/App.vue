<template>
  <!-- <div class="wrapper">
    <Magnifier
      :link="link"
      :blank="blank"
      :imgUrl="imgUrl"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
      :imgAlt="imgAlt"
    ></Magnifier>
  </div>  -->

  <!--  
    <Stars
      :num="num"
      :size="size"
      @getStarNum="getStarNum"
    /> -->
  <!-- <div class="container">
  <Carousel
    :autoplay="true"
    :duration="3000"
    :initial="4"
    :hasDot="true"
    :hasDirector="true"
    dotBgColor="green"
  >
      <car-item
        v-for="(item, index) of carData"
        :key="index"
      >
        <img :src="getAssetsImages(item.img_name)">
      </car-item>
    </Carousel>
 </div> -->

  <!-- <div class="side-bar">
    <tree-menu>
      <template v-for="item of menuData">
        <menu-item v-if="!item.children" :key="item.id">
          {{ item.title }}
        </menu-item>
        <re-sub-menu 
          :key="item"
          :data="item"
          v-else
        >
        </re-sub-menu>
      </template>
    </tree-menu>
  </div> -->

  <div>
    <transfer
      :data="transferData"
      right-title="已选择机型"
    ></transfer>
  </div>

</template>

<script setup>
import { reactive, toRefs } from 'vue'
//穿梭框
import transferData from './libs/jsppui/data/transfer';

//无限极菜单
import menuData from './libs/jsppui/data/menu'

//轮播图
// import carData from '@/libs/jsppui/data/carousel'
// const getAssetsImages = (name) => {
//   return new URL(`./assets/img/${name}`, import.meta.url).href;
// }

// 放大镜
// const state = reactive({
//   imgUrl: 'https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c001/d134ec6a1e474795a57afd46b4fa6f54~tplv-dy-aweme-images-v2:3000:3000:q75.webp?biz_tag=aweme_images&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&sc=image&se=false&x-expires=1720364400&x-signature=wx5R29cvbqG7GhUweXqqGBYhRb4%3D',
//   imgAlt: '裴秀智',
//   blank: true,
//   link: 'https://www.baidu.com',
//   imgWidth: 500,
//   imgHeight: 500,
//   magWidth: 120,
//   magHeight: 120
// })
// let {imgUrl, imgAlt, blank, link, imgWidth, imgHeight, magWidth, magHeight} = toRefs(state)

// 五星好评
// const state = reactive({
//   num: 2,
//   size: 30
// })
// let {num, size} = toRefs(state)
// const getStarNum = (num) => {
//   console.log(num)
// }




</script>

<style lang="scss" scoped>
.wrapper {
  width: 500px;
  margin: 100px auto;
}

.container {
  width: 520px;
  height: 297px;
  margin: 80px auto;
}

.side-bar {
  width: 300px;
}
</style>
