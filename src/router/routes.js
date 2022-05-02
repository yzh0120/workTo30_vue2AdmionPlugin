let layout = () => import(/* webpackChunkName: "layout" */"@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

import wangEdit from "./modules/1-wangEdit.js"
import swiper from "./modules/2-swiper.js"
import map from "./modules/3-map.js"
import mxhflow from "./modules/4-mxhflow.js"


import {status} from "./modules/status.js"
const routes = [	
	{
		path: '/blank',
		name: 'blank',
		component: layout,
		meta:{
			hidden: true,
		}
	},
	{
		path: '/',
		name: '/',
		redirect: '/base',
		component: layout,
		meta:{
			title: '首页',
			icon: 'shouye',
		},
		children: [{
			path: 'base',
			name: 'base',
			component: () => import( /* webpackChunkName: "base" */ "@/views/base.vue"),
			meta: {
				title: '首页',
				// hidden:true,
				icon: 'dashboard',
				fixed: true//"/base"//fullPath
			}
		}]
	},

	wangEdit,
	swiper,
	map,
	mxhflow,


	...status,//状态和登录页
	

]

export default routes
