<template>
    <keyboard :title="'输入车牌号'" @keyboard="change"></keyboard>
</template>

<script>
import Keyboard from 'mpvue-keyboard';
export default {
    components: {
        keyboard: Keyboard
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        change(msg) {
            console.log(msg);
        }
    },
    mounted() {}
};
</script>
<style lang="scss">
@import 'node_modules/sass-bem/bem';
$bem-component-namespace: 'kb';
</style>
