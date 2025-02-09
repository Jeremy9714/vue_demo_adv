//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";
import About from "@/views/About";
import Home from '@/views/Home';
import Message from '@/views/Message'
// import News from '@/views/News'

//创建并默认暴露一个路由器
export default new VueRouter({
    routes: [
        {
            // 命名路由
            name: 'about',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            // 嵌套路由
            children: [
                {
                    // 子路由 不能写成'/message'
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'message-detail',
                            path: 'detail',
                            component: () => import('@/views/Detail')
                        }
                    ]
                },
                {
                    path: 'news',
                    component: () => import('@/views/News')
                }
            ]
        }
    ]
});