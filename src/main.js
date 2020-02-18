import Vue from 'vue'
import App from './App.vue'
import './http';
import qs from 'qs'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

  
import {postRequest} from "./utils/api";
import {postKeyValueRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";
import {getRequest} from "./utils/api";
import {initMenu} from "./utils/menus";

Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.getRequest = getRequest;

Vue.config.productionTip = false
Vue.prototype.$qs = qs
//全局消息提示组件
// import Message from './Message/index.js'
// Vue.prototype.$my_message = Message.install;
import vMessage from './components/Message/index' 
Vue.use(vMessage)

router.beforeEach((to, from, next) => {
	
    if (to.path == '/') {
        next();
    }else {
        if (window.sessionStorage.getItem("user")) {
            initMenu(router, store);
            next();
        }else{
            next('/?redirect='+to.path);
        }
    }
	// next();
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
