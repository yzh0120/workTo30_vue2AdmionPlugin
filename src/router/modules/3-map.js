let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属
export default { 
    path: '/map',
    name: 'map',
    // redirect: {name:"swiper-base"},
    component:  layout,
    meta: {
        title: '地图',
        icon: 'e62a;',
    },
    children: [
        {
            path: 'baidu',
            name: 'map-baidu',
            component: blank,
            meta: {
                title: '百度地图',
                icon: "biaodanzujian-biaoge",
            },
			children:[
				{
				    path: 'base',
				    name: 'map-baidu-base',
				    component: () => import(/* webpackChunkName: "swiper-two" */ "@/views/3-map/1-baidu/1-base.vue"),
				    meta: {
				        title: '百度地图基础',
				        icon: "biaodanzujian-biaoge",
				    }
				},
				{
				    path: 'BmMarker',
				    name: 'map-baidu-BmMarker',
				    component: () => import(/* webpackChunkName: "swiper-two" */ "@/views/3-map/1-baidu/2-BmMarker.vue"),
				    meta: {
				        title: '百度地图-点',
				        icon: "biaodanzujian-biaoge",
				    }
				},
				{
				    path: 'BmCircle',
				    name: 'map-baidu-BmCircle',
				    component: () => import(/* webpackChunkName: "swiper-two" */ "@/views/3-map/1-baidu/3-BmCircle.vue"),
				    meta: {
				        title: '百度地图-圆',
				        icon: "biaodanzujian-biaoge",
				    }
				},
			]
        },
		
		// {
		//     path: 'three',
		//     name: 'swiper-three',
		//     component: () => import(/* webpackChunkName: "swiper-three" */ "@/views/2-swiper/three.vue"),
		//     meta: {
		//         title: '垂直播放',
		//         icon: "biaodanzujian-biaoge",
		//     }
		// }
    ]
}