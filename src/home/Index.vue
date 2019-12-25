<template>
  <KView class="page home js_show">
       <KView class="page__hd">
            <h1 class="page__title">
                Kbone-UI
            </h1>
            <p class="page__desc">KboneUI 是一套同微信原生视觉体验一致的基础样式库，同时适用于 Web 端和小程序。</p>
        </KView>
        <KView class="page__bd page__bd_spacing">
            <KButtonArea>
              <KButton type="primary" >页面主要操作</KButton>
              <KButton type="primary" open-type="getUserInfo"
                @getuserinfo="getUserInfo" > getUserInfo </KButton>
              <KButton type="primary" :loading="true">Loading</KButton>
              <KButton type="primary" :disabled="true">禁止点击</KButton>
              <KButton >页面次要操作</KButton>
              <KButton type="warn">警告类操作</KButton>
              <KButton type="warn" :loading="true">警告类操作</KButton>
              <KButton type="warn" :disabled="true">警告类操作</KButton>
          </KButtonArea>
          <KButtonArea direction="horizontal">
              <KButton size="mini" type="primary">btn</KButton>
              <KButton size="mini" >btn</KButton>
              <KButton size="mini" type="warn">btn</KButton>
          </KButtonArea>
        </KView>
  </KView>
</template>

<script>
import Vue from 'vue'


export default Vue.extend({
  name: 'Button',
  methods: {
    getUserInfo(e) {
      console.log(e)
    }
  }
})
</script>
