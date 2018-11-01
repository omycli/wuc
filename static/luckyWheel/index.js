Page({
  data: {
    list: [
      {
        scale: 1,
        text: '你瘦了'
      },
      {
        scale: 2,
        text: '相约梦中'
      },
      {
        scale: 1,
        text: '相逢不相识'
      },
      {
        scale: 1,
        text: '见面'
      },
      {
        scale: 1,
        text: '相忘于江湖'
      },
      {
        scale: 1,
        text: '不见'
      },
      {
        scale: 1,
        text: '滴 滴滴'
      },
      {
        scale: 1,
        text: '别来无恙'
      },
      {
        scale: 1,
        text: '长发及腰'
      }
    ],
    temp: {}
  },
  statusChange: function(e) {
    console.log(e.detail);
    if (e.detail.status === 'TRUN_END') {
      let rn = this.data.list[e.detail.result.resultIndex];
      console.log(rn);
      wx.showModal({
        title: '恭喜',
        content: `获得了 ${rn.text} 称号`,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    }
    this.setData({
      temp: JSON.stringify(e.detail)
    });
  },
  statusChange2: function(e) {
    console.log(e.detail);
  },
  statusChange3: function(e) {
    console.log(e.detail);
    if (e.detail.status === 'TRUN_END') {
      let rn = this.data.list[e.detail.result.resultIndex];
      console.log(rn);
      wx.showModal({
        title: '你要出来的永远都是',
        content: ` ${rn.text} 称号`,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    }
    this.setData({
      temp: JSON.stringify(e.detail)
    });
  }
});
