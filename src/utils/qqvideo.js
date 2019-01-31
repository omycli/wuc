let count = 0;

// 用来装视频列表
let videoSrcArr = [];

const qqVideo = {
    getVideoes(vid) {
        count = 0;
        videoSrcArr = [];
        let videoUrl =
            'https://vv.video.qq.com/getinfo?otype=json&appver=3.2.19.333&platform=11&defnpayver=1&vid=' +
            vid;
        let host;
        return new Promise(function (resolve) {
            wx.request({
                url: videoUrl,
                success: function (res) {
                    let dataJson = res.data.replace(/QZOutputJson=/, '') + 'qwe';
                    let dataJson1 = dataJson.replace(/;qwe/, '');
                    let data = JSON.parse(dataJson1);
                    let fnPre = data.vl.vi[0].lnk;
                    host = data['vl']['vi'][0]['ul']['ui'][0]['url'];
                    let streams = data['fl']['fi'];
                    let segCnt = data['vl']['vi'][0]['cl']['fc'];
                    if (parseInt(segCnt) === 0) {
                        segCnt = 1;
                    }
                    //   let bestQuality = streams[streams.length - 1]['name'];
                    let partFormatId = streams[streams.length - 1]['id'];
                    console.log(segCnt);
                    for (let i = 1; i < segCnt + 1; i++) {
                        let filename =
                            fnPre + '.p' + (partFormatId % 10000) + '.' + i + '.mp4';
                        requestVideoUrls(partFormatId, vid, filename, host, segCnt).then(
                            function (response) {
                                resolve(response);
                            }
                        );
                    }
                }
            });
        });
    }
    // 解析视频真正的地址
};

function requestVideoUrls(partFormatId, vid, fileName, host, videoCount) {
    let keyApi =
        'https://vv.video.qq.com/getkey?otype=json&platform=11&format=' +
        partFormatId +
        '&vid=' +
        vid +
        '&filename=' +
        fileName +
        '&appver=3.2.19.333';

    //

    return new Promise(function (resolve) {
        wx.request({
            url: keyApi,
            success: function (res) {
                let dataJson = res.data.replace(/QZOutputJson=/, '') + 'qwe';
                let dataJson1 = dataJson.replace(/;qwe/, '');
                let data = JSON.parse(dataJson1);
                if (data.key !== undefined) {
                    let vkey = data['key'];
                    let url = host + fileName + '?vkey=' + vkey;
                    let vidoeSrc = String(url);
                    videoSrcArr.push(vidoeSrc);
                }
                count++;
                // 判断视频是否全部获取，获取全部视频再返回
                if (count === videoCount) {
                    resolve(videoSrcArr);
                    console.log(videoSrcArr);
                }
            }
        });
    });
}
module.exports = qqVideo;
