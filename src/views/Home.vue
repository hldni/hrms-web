<template>
	<div id="app">
		<!-- 全局提示框 -->
		<transition name="fade">
			<div class="message" :class="type" v-if="visible">
				<i class="icon-type iconfont" :class="'icon-'+type"></i>
				<div class="content">{{content}}
					<i v-if="hasClose" class="btn-close iconfont icon-close" @click="visible=false"></i>
				</div>
			</div>
		</transition>
		<v-banner color="#1E90FF">
			<span id="wrs">微人事</span>
			<template v-slot:actions>
				<v-icon large color="darken-2" small=true>mdi-message-text</v-icon>
				<span text>{{user.name}}</span>
				<v-avatar color="teal" size="48">
					<span class="white--text headline">48</span>
				</v-avatar>
				<span>&nbsp;</span>
			</template>
		</v-banner>
		<div id="lt">

			<v-divider></v-divider>

			<v-list>
				<v-list-group v-for="item in routes" :key="item.id" v-model="item.active" :prepend-icon="item.action">
					<template v-slot:activator>
						<v-list-item-content>
							<v-list-item-title v-text="item.name"></v-list-item-title>
						</v-list-item-content>
					</template>
					<v-divider inset="true" />
					<v-list-item v-for="subItem in item.children" :key="subItem.id" :to="subItem.path">
						<v-list-item-icon>
							<v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title v-text="subItem.name"></v-list-item-title>
						</v-list-item-content>
						<v-list-item-action>
							<v-icon>{{ subItem.action }}</v-icon>
						</v-list-item-action>
					</v-list-item>
				</v-list-group>
				<v-divider vertical=true></v-divider>
			</v-list>
		</div>
		<div id="divider"></div>
		<div id="rt">
			<v-breadcrumbs :items="items" v-if="this.$router.currentRoute.path!='/home'">
				<template v-slot:divider>
					<v-icon>mdi-chevron-right</v-icon>
				</template>
			</v-breadcrumbs>
			<div class="homeWelcome" v-if="this.$router.currentRoute.path=='/home'">
				欢迎来到微人事！
			</div>
			<router-view />
		</div>


	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				user: JSON.parse(window.sessionStorage.getItem("user")),
				items: [{
						text: '首页',
						disabled: false,
						href: 'http://localhost:8066/#/home',
					},
					{
						text: this.$router.currentRoute.name,
						disabled: true,
						href: '',
					}
				],
				visible: true,
				message: "错误的",
				content: '这是一个success提示',
				time: 5000000,
				type: 'success',
				hasClose: true,
			}
		},
		computed: {
			routes() {
				return this.$store.state.routes;
			}
		},
		methods: {
			al() {
				alert(JSON.parse(window.sessionStorage.getItem("user")));
			}
		},
		created() {
			// alert(1);
			// alert("user"+JSON.parse(window.sessionStorage.getItem("user")).name);
			this.$my_message({
				content: '这是一个success提示',
				time: 5000000,
				type: 'success',
				hasClose: true,
			});
		}
	}
</script>
<style>
	#app {
		height: 100%;
	}

	#wrs {
		color: white;
		font-size: 22px;
	}

	#left {
		width: 250px;
		height: 100%;
	}

	#lt {
		float: left;
		width: 250px;
	}

	#divider {
		background-color: #D3D3D3;
		height: 88%;
		width: 1px;
		float: left;
	}

	#rt {
		margin-left: 280px;
	}

	.homeWelcome {
		text-align: center;
		font-size: 30px;
		font-family: 华文行楷;
		color: #409eff;
		padding-top: 50px;
	}

	.dialog-tips {
		/* position:absolute;top:20px;left:52px */
	}

	.dialog-center {
		top: 50%;
		left: 50%;
		transform: translate(-10%, -50%)
	}
</style>
