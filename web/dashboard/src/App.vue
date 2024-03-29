<template> <!-- template附在导出的组件上作为其 render 选项 -->
  <div id="app"> <!-- app是根元素,是vue app的挂载DOM元素 -->
    <router-view/> <!-- vue提供用于渲染匹配当前 URL 的组件 --> <!-- 路由匹配到的组件将渲染在这里 -->
  </div>
</template>

<script>
// js代码，导出一个对象(这个对象符合vue组件的定义，后续会被作为vue的根组件使用)
export default { //表明是默认导出的组件
  name: "App", //组件名称
  components: { //在这里可以注册或者定义新的组件
  }
}
</script>
<!-- 没有为该组件添加任何特定的样式 -->
<style>
</style>
