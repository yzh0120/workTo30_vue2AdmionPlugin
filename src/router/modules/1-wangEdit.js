let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属
export default { 
    path: '/wangEdit',
    name: 'wangEdit',
    // redirect: {name:"wangEdit-base"},
    component:  layout,
    meta: {
        title: 'wangEdit',
        icon: "biaodanzujian-biaoge",
    },
    children: [
        {
            path: 'base',
            name: 'wangEdit-base',
            component: () => import(/* webpackChunkName: "wangEdit-base" */ "@/views/1-wangEdit/1-base.vue"),
            meta: {
                title: '基础wangEdit',
                icon: "biaodanzujian-biaoge",
            }
        }
    ]
}