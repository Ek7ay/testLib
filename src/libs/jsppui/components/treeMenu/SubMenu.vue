<template>
  <div 
    class="sub-menu"
    @mouseenter="showSubMenu"
    @mouseleave="hideSubMenu"
  >
    <div class="title">
      <slot name="title"></slot>
      <span class="icon">&gt;</span>
    </div>
    <div class="sub-item" v-show="subMenuShow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'SubMenu',
  setup () {
    const subMenuShow = ref(false)

    const showSubMenu = () => {
      subMenuShow.value = true;

    }

    const hideSubMenu = () => {
      subMenuShow.value = false;
    }

    return {
      subMenuShow,
      showSubMenu,
      hideSubMenu
    }
  }
}
</script>

<style lang="scss" scoped>
  .sub-menu {
    height: 50px;
    position: relative;

    .title {
      position: relative;
      height: 50px;
      line-height: 50px;
      text-align: center;

      .icon {
       position: absolute;
       top: 0;
       right: 15px;
     }
    }

    .sub-item {
      position: absolute;
      left: 100%;
      top: 0;
      width: 100%;
      background: #333;
    }
   
  }
</style>