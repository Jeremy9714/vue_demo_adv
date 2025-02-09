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
                            }
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