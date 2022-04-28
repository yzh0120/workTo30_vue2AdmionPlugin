let layout = () => import(/* webpackChunkName: "layout" */"@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

import wangEdit from "./modules/1-wangEdit.js"
import swiper from "./modules/2-swiper.js"
import map from "./modules/3-map.js"
// import panel from "./modules/4-panel.js"
// import file from "./modules/5-file.js"
// import alert from "./modules/6-alert.js"
// import svgIcon from "./modules/7-svgIcon.js"
// import fastCopy from "./modules/8-fastCopy.js"
// import tagsView from "./modules/9-tagsView.js"
// import vCharts from "./modules/10-vCharts.js"
// import elementUi from "./modules/11-element-ui.js"
// import print from "./modules/12-print.js"
// import base from "./modules/13-base.js"
// import axios from "./modules/14-axios.js"

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
	// otherTable,//其他表格
	// panel,//展开框
	// file,//文件
	// alert,//弹窗
	// svgIcon,//svgIcon
	// fastCopy,//页面快速布局
	// tagsView,//标签页操作
	// vCharts,//图标
	// elementUi,//elementUi
	// print,//打印
	// base,//基础
	// axios,//axios

	...status,//状态和登录页
	

]

export default routes
