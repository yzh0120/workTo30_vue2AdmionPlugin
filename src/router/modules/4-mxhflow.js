let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属
export default { 
    path: '/mxhflow',
    name: 'mxhflow',
    // redirect: {name:"mxhflow-base"},
    component:  layout,
    meta: {
        title: 'mxhflow',
        icon: "biaodanzujian-biaoge",
    },
    children: [
        {
            path: 'base',
            name: 'mxhflow-base',
            component: () => import(/* webpackChunkName: "mxhflow-base" */ "@/views/4-mxhflow/1-base.vue"),
            meta: {
                title: '基础mxhflow',
                icon: "biaodanzujian-biaoge",
            }
        },
        {
            path: 'preLook',
            name: 'mxhflow-preLook',
            component: () => import(/* webpackChunkName: "mxhflow-preLook" */ "@/views/4-mxhflow/2-preLook.vue"),
            meta: {
                title: '预览',
                icon: "biaodanzujian-biaoge",
            }
        }
    ]
}