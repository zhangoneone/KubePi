import Vue from "vue"
import "@/styles/index.scss"
import "@/assets/iconfont/iconfont"
import '@/assets/iconfont/iconfont.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import App from "./App.vue"
import Fit2CloudUI from "fit2cloud-ui"
import ElementUI from "element-ui"
import i18n from "./i18n"
import router from "./router"
import store from './store'
import icons from './icons'
import VueCodemirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import "./permission"
import "@/styles/common/kubepi.css"
import filters from "./filters";
import JsonViewer from 'vue-json-viewer'
import directives from "./directive";
import "fit2cloud-ui/src/styles/components/steps.scss";
import moment from 'moment'


Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: "small",
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(Fit2CloudUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(VueCodemirror);
library.add(fas, far, fab)

Vue.use(icons);
Vue.use(filters);
Vue.use(directives)
Vue.use(JsonViewer)

Vue.directive('title', {
  inserted: function (el) {
    document.title = el.dataset.title
  }
})

Vue.filter('dateFormat', function(dataStr, pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dataStr).format(pattern)
})

new Vue({
  el: '#app',
  i18n,
  router, //页面导航和路由的工具
  store, 
  render: h => h(App), //根组件是名为App的组件，App组件将会挂载到名为‘app’的DOM元素上
})
