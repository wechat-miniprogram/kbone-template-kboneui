<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
})
</script>

<style lang="less">
@import "./example.less";

.homeIcon{
    position: absolute;
    z-index: 2;
}
</style>
