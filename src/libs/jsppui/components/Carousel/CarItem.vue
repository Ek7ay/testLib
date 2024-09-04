<template>
  <Transition>
    <div class="car-item" v-if="selfIndex == currentIndex">
      <slot></slot>
    </div>
  </Transition>

  
</template>

<script>
import { 
  getCurrentInstance, 
  reactive, 
  toRefs, 
  watch
} from 'vue'
export default {
  name: 'CarItem',
  setup () {
    const instance = getCurrentInstance()

    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex
    })

    watch(() => {
      return instance.parent.ctx.currentIndex;
    }, (value) => {
      state.currentIndex = value;
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.car-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  :deep(img) {
    width: 100%;
    height: 100%;
  }
}

@keyframes comein {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes comeout {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

.v-enter-active {
  animation: comein 1s ease; 
}

.v-leave-active {
  animation: comeout 1s ease;
}
  
</style>