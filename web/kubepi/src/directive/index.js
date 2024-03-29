import Permission from "./permission";

export default {
    install(Vue) {
        Vue.directive('has-permissions', Permission.hasPermissions); //自定义指令，实现逻辑是Permission.hasPermissions函数。在Vue组件中使用v-has-permissions指令都会调用这里。
    }
}

