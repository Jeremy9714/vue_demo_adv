//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";
import About from "@/views/About";
import Home from '@/views/Home';
import Message from '@/views/Message'
// import News from '@/views/News'

//创建并默认暴露一个路由器
const router = new VueRouter({
    // '#'及其后面的内容就是hash值
    // hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器
    mode: 'history', // 默认hash模式
    routes: [
        {
            // 命名路由
            name: 'about',
            path: '/about',
            component: About,
            meta: {title: '关于'},
            // // 独享路由守卫 只支持前置
            // beforeEnter: (to, from, next) => {
            //     if (localStorage.getItem('user') === 'Jeremy') {
            //         // 放行
            //         next()
            //     } else {
            //         alert('Unauthorized actions')
            //     }
            // }
        },
        {
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            // 嵌套路由
            children: [
                {
                    // 子路由 不能写成'/message'
                    path: 'message',
                    component: Message,
                    meta: {title: '消息'},
                    children: [
                        {
                            name: 'message-detail',
                            // 使用占位符':param'声明接收params参数
                            path: 'detail',
                            component: () => import('@/views/Detail'),
                            // props: {a: 'Hello', b: 28} // props-对象写法
                            // props: true // props-布尔写法 把路由收到的所有params参数通过props传给组件
                            props({query: {id, name}}) { // props-函数写法 该函数返回的对象中每一组key-value都会通过props传给组件
                                return { // 连续解构函数
                                    id,
                                    name
                                }
                            },
                            meta: {title: '详情'}
                        }
                    ]
                },
                {
                    path: 'news',
                    component: () => import('@/views/News'),
                    meta: {title: '新闻'}
                }
            ]
        }
    ]
});

// // 全局路由守卫
// // 前置路由守卫
// router.beforeEach((to, from, next) => {
//     // 来源 目标
//     console.log(from, to)
//
//     if (to.path === '/home/news' || to.path === '/home/message' || to.name === 'about') {
//         if (localStorage.getItem('user') === 'Jeremy') {
//             // 放行
//             next()
//         } else {
//             alert('Unauthorized actions')
//         }
//     } else {
//         next()
//     }
// })
//
// // 后置路由守卫
// router.afterEach((to, from) => {
//     document.title = to.meta.title || 'demo'
// })

export default router