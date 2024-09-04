<template>
  <div class="ui-stars">
    <span 
      v-for="num in 5"
      :key="num"
      :class="[
        'iconfont icon-Star',
         num <= starNum ? 'active': ''
      ]"
      :style="{fontSize: size + 'px'}"
      @click="setStarNum(num)"
    ></span>
  </div>
</template>

<script>
import { useStars } from '../hooks';

export default {
  name: 'Stars',
  props: {
    num: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 16
    }
  },
  setup(props, ctx) {
    const [ starNum, setStarNum] = useStars(props.num, () => {
      ctx.emit('getStarNum', starNum.value)
    });

    return {
      starNum,
      setStarNum
    }

  }
}

</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont";
  /* Project id 4579948 */
  src: url('//at.alicdn.com/t/c/font_4579948_wopfzbrokv.woff2?t=1718008062212') format('woff2'),
    url('//at.alicdn.com/t/c/font_4579948_wopfzbrokv.woff?t=1718008062212') format('woff'),
    url('//at.alicdn.com/t/c/font_4579948_wopfzbrokv.ttf?t=1718008062212') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;

  &.icon-Star {
    transition: color .3s;
  }

  &.icon-Star:before {
    content: "\e617";
  }

  &.active {
    color: #FBAB06;
  }
}
</style>