export default {
    install(Vue) {
        console.log(Vue)
        console.log(this)

        // 全局过滤器
        Vue.filter('mySlice', function (val) {
            return val.slice(0, 2)
        })

        // 自定义指令
        Vue.directive('fbind', {
            bind(el, binding) {
                el.value = binding.value
            },
            inserted(el, binding) {
                el.focus()
            },
            update(el, binding) {
                el.value = binding.value
            }
        })

        // 全局混入
        Vue.mixin({
            data() {
                return {
                    a: 1,
                    b: 2
                }
            }
        })

        // 原型添加方法
        Vue.prototype.hello = function () {
            alert('hello')
        }
    }
}