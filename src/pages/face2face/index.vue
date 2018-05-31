<template>
    <div>
        <button v-if='!userinfo' open-type='getUserInfo' @getuserinfo='onGotUserInfo'>getUserInfo</button>
        <!-- <div @tap='startRecord'>录音</div> -->
        <!-- <div>{{currentData}}</div> -->
    </div>
</template>

<script>
// const plugin = requirePlugin('WechatSI');
// 获取**全局唯一**的语音识别管理器**recordRecoManager**
// const manager = plugin.getRecordRecognitionManager();
const recorderManager = wx.getRecorderManager();
const recordTime = function(date) {
    const formatNumber = n => {
        n = n.toString();
        return n[1] ? n : '0' + n;
    };
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var hour = date.getHours();
    var minute = date.getMinutes();

    return (
        [month, day].map(formatNumber).join('/') +
        ' ' +
        [hour, minute].map(formatNumber).join(':')
    );
};
export default {
    data() {
        return {
            currentData: '',
            currentTranslate: {
                // 当前语音输入内容
                create: recordTime(new Date()),
                text: '正在聆听中',
                lfrom: 'zh_CN',
                lto: 'en_US'
            }
        };
    },
    computed: {},
    methods: {
        onGotUserInfo(e) {
            console.log(e.mp.detail);
            console.log('‘登陆成功’');
        },
        startRecord(e) {
            const options = {
                duration: 10000,
                sampleRate: 44100,
                numberOfChannels: 1,
                encodeBitRate: 192000,
                format: 'aac',
                frameSize: 50
            };

            recorderManager.start(options);
        }
    },
    mounted() {
        recorderManager.onStart(() => {
            console.log('recorder start');
        });
        recorderManager.onPause(() => {
            console.log('recorder pause');
        });
        recorderManager.onStop(res => {
            console.log('recorder stop', res);
            const { tempFilePath } = res;
            this.currentData = Object.assign({}, this.currentTranslate, {
                text: res.result,
                translateText: '正在翻译中',
                id: -1,
                voicePath: tempFilePath
            });
        });
        recorderManager.onFrameRecorded(res => {
            const { frameBuffer } = res;
            console.log('frameBuffer.byteLength', frameBuffer.byteLength);
        });
    }
};
</script>
<style lang="scss">
@import 'node_modules/sass-bem/bem';
$bem-component-namespace: 'tpl';
</style>
