<template>
    <div class="msg" v-if="isShow"> <span>{{ message }}</span></div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            isShow: false
        }
    },
    methods: {
        show(message = 'plaease deliver message', duration = 1000) {
            this.message = message
            this.isShow = true
            setTimeout(() => {
                this.isShow = false
            }, duration)
        }
    }
}
</script>

<style lang="less" scoped>
    .msg {
        position: fixed;
        left: 50%;
        top: 50%;
        width: 100px;
        height:30px;
        background: rgba(0,0,0,.5);
        color: #ffffff;
        text-align: center;
        line-height: 30px;
    }
</style>