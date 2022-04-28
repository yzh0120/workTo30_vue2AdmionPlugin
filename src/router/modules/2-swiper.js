let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属
export default { 
    path: '/swiper',
    name: 'swiper',
    // redirect: {name:"swiper-base"},
    component:  layout,
    meta: {
        title: '轮播图',
        icon: "biaodanzujian-biaoge",
    },
    children: [
        {
            path: 'base',
            name: 'swiper-base',
            component: () => import(/* webpackChunkName: "swiper-base" */ "@/views/2-swiper/1-index.vue"),
            meta: {
                title: '轮播元素',
                icon: "biaodanzujian-biaoge",
            }
        },
		{
		    path: 'two',
		    name: 'swiper-two',
		    component: () => import(/* webpackChunkName: "swiper-two" */ "@/views/2-swiper/2-two.vue"),
		    meta: {
		        title: '当前元素变大',
                icon: "biaodanzujian-biaoge",
		    }
		},
		{
		    path: 'three',
		    name: 'swiper-three',
		    component: () => import(/* webpackChunkName: "swiper-three" */ "@/views/2-swiper/3-three.vue"),
		    meta: {
		        title: '垂直播放',
                icon: "biaodanzujian-biaoge",
		    }
		}
    ]
}