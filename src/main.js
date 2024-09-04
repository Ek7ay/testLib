import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import JsppUI from './libs/jsppui'


createApp(App)
.use(JsppUI)
.mount('#app')
