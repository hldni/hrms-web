import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Password from './views/passwordLogin.vue'

Vue.use(Router)

export default new Router({
	 routes: [
		{
			path: '/',
			name: 'Login',
			component: Login,
			hidden:true,
			children:[
				{
					path: '/',
					name: 'password',
					component: Password,
					hidden:false
				}
			]
		},
		{
			path: '/home',
			name: 'Home',
			component: Home,
			hidden:true,
			meta:{
				roles:['admin','user']
			}
		},
			/* {
			path: '/home',
			name: 'Home',
			component: Home,
			hidden:true,
			meta:{
				roles:['admin','user']
			},
			children:[
				{
					path: '/chat',
					name: '在线聊天',
					component: FriendChat,
					hidden:true
				}
			]
		} */
	]
})
