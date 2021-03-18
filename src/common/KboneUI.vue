<template>
    <div class="ui-cnt">
        <div class="item">
            <div class="title">wx-button</div>
            <div class="comp-cnt">
                <wx-button class="wx-button" type="primary">页面主操作 Normal</wx-button>
                <wx-button class="wx-button" type="primary" :loading="true">页面主操作 Loading</wx-button>
                <wx-button class="wx-button" type="primary" :disabled="true">页面主操作 Disabled</wx-button>
                <wx-button class="wx-button" type="default">页面次要操作 Normal</wx-button>
                <wx-button class="wx-button" type="default" :disabled="true">页面次要操作 Disabled</wx-button>
                <wx-button class="wx-button" type="warn">警告类操作 Normal</wx-button>
                <wx-button class="wx-button" type="warn" :disabled="true">警告类操作 Disabled</wx-button>
                <wx-button class="wx-button" type="primary" :plain="true">按钮</wx-button>
                <wx-button class="wx-button" type="primary" :disabled="true" :plain="true">不可点击的按钮</wx-button>
                <wx-button class="wx-button" type="default" :plain="true">按钮</wx-button>
                <wx-button class="wx-button" type="default" :disabled="true" :plain="true">按钮</wx-button>
                <div>
                    <wx-button class="wx-button mini-btn" type="primary" size="mini">按钮</wx-button>
                    <wx-button class="wx-button mini-btn" type="default" size="mini">按钮</wx-button>
                    <wx-button class="wx-button mini-btn" type="warn" size="mini">按钮</wx-button>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="title"></div>
            <div class="comp-cnt">
                <wx-scroll-view
                    ref="wx-scroll-view"
                    class="wx-scroll-view"
                    :scroll-y="true"
                    :scroll-with-animation="true"
                >
                    <div>
                        <div id="block1" class="block block1"></div>
                        <div id="block2" class="block block2"></div>
                        <div id="block3" class="block block3"></div>
                        <div id="block4" class="block block4"></div>
                        <div id="block5" class="block block5"></div>
                    </div>
                </wx-scroll-view>
                <div class="opr-cnt opr-cnt-y">
                    <wx-button class="wx-button opr-button" @click="setAttribute('wx-scroll-view', 'scroll-into-view', 'block3')">滑动到第三个</wx-button>
                    <wx-button class="wx-button opr-button" @click="setAttribute('wx-scroll-view', 'scroll-top', 120)">滚动到 120px 处</wx-button>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="title">mp-msg</div>
            <div class="comp-cnt">
                <mp-msg type="success" title="操作成功">
                    <div slot="desc">内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现</div>
                    <div slot="extend">
                        <div>1. 说明1</div>
                        <div>2. 说明2</div>
                    </div>
                    <div slot="handle" style="margin: 0 20px">
                        <wx-button class="wx-button" type="primary">主要操作</wx-button>
                        <wx-button class="wx-button" type="default">辅助操作</wx-button>
                    </div>
                </mp-msg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'KboneUI',
    methods: {
        setAttribute(ref, name, value) {
            this.$refs[ref].setAttribute(name, value)
        },
    }
}
</script>

<style lang="less">
.ui-cnt {
    margin: 30px;
}
@media (prefers-color-scheme: dark) {
    html {
        background-color: #222;
        color: #fff;
    }
    .title {
        color: #000;
    }
}
.title {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background-color: #b8e8ab;
    padding-left: 20px;
}
.comp-cnt {
    padding: 10px;
}
.wx-button {
    margin-bottom: 10px;
}
.mini-btn {
    margin-right: 10px;
}
.wx-scroll-view {
    width: 100%;
    height: 125px;
}
.block {
    width: 100%;
    height: 50px;
}
.block1 {
    background: #dff0d8;
}
.block2 {
    background: #f5f5f5;
}
.block3 {
    background: #d9edf7;
}
.block4 {
    background: #fcf8e3;
}
.block5 {
    background: #f2dede;
}
.opr-cnt {
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.opr-button  {
    margin: 0 10px 10px;
}
</style>
