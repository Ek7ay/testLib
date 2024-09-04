import Magnifier from './components/Magnifier.vue'
import Stars from './components/Stars.vue'
import Carousel from './components/Carousel/index.vue'
import CarItem from './components/Carousel/CarItem.vue'

import TreeMenu from './components/treeMenu/index.vue'
import MenuItem from './components/treeMenu/MenuItem.vue'
import SubMenu from './components/treeMenu/SubMenu.vue'
import ReSubMenu from './components/treeMenu/ReSubMenu.vue'

import Transfer from './components/Transfer/index.vue'

let JsppUI = {}

JsppUI.install = function (Vue) {
  Vue.component(Magnifier.name, Magnifier);
  Vue.component(Stars.name, Stars);
  Vue.component(Carousel.name, Carousel);
  Vue.component(CarItem.name, CarItem);

  Vue.component(TreeMenu.name, TreeMenu);
  Vue.component(MenuItem.name, MenuItem);
  Vue.component(SubMenu.name, SubMenu);
  Vue.component(ReSubMenu.name, ReSubMenu);

  Vue.component(Transfer.name, Transfer);
}

export default JsppUI;


// const install = (app) => {
//   app.component(Magnifier.name, Magnifier);
//   app.component(Stars.name, Stars)
// }

// export default {
//   install
// }