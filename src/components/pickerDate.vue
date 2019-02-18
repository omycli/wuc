<template>
  <picker
    mode="multiSelector"
    @columnchange="bindDateColumnChange"
    @change="bindDateChange"
    :value="dateIndex"
    :range="date"
  >
    <slot></slot>
  </picker>
</template>

<script>
export default {
  name: "pickerdata",
  props: {
    beginTime: {
      type: Array,
      default: function() {
        return [1, 1, 1, 0, 0];
      }
    },
    endTime: {
      type: Array,
      default: function() {
        let now = new Date();
        let year = now.getFullYear() + 10;
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hours = now.getHours();
        let minute = now.getMinutes();
        return [year, month, day, hours, minute];
      }
    },
    selectTime: {
      type: Array,
      default: function() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hours = now.getHours();
        let minute = now.getMinutes();
        return [year, month, day, hours, minute];
      }
    },
    defSelectTime: {
      type: Array,
      default: function() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hours = now.getHours();
        let minute = now.getMinutes();
        return [year, month, day, hours, minute];
      }
    },
    isUnclear: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dateIndex: [1, 1, 1, 1],
      date: [], // 时间数据
      recentTimeStr: "",
      recentTime: [1990, 6, 16, 0],
      placeholderShow: true, // 默认显示 占位符
      placeholder: "选择"
    };
  },
  methods: {
    /**
     * change 事件（点击确定后）
     */
    bindDateChange: function(e) {
      let _recentTime = this.recentTime;
      this.recentTime = _recentTime;
      // 传递给组件外使用
      this.placeholderShow = false;
      this.recentTimeStr = this.changeTime(_recentTime);
      this.$emit("datechange", _recentTime, this.recentTimeStr);
    },
    /**
     * 年月日 三级联动
     */
    bindDateColumnChange: function(e) {
      // console.log('修改的列为',e.target.column,'，值的下标为',e.target.value)
      let _column = e.target.column;
      let _value = e.target.value;
      let _beginTime = this.beginTime;
      let _endTime = this.endTime;
      let _recentTime = this.recentTime;
      // 变化前 recentTime 下标
      let _curRV = this.dateIndex[_column];
      // 方向 >0向下 <0向上
      let dir = _value - _curRV;
      _recentTime[_column] = _recentTime[_column] + dir;
      // console.log(_recentTime[_column], _value, _curRV, dir)
      _recentTime[_column] =
        _recentTime[_column] < 0 ? 0 : _recentTime[_column];
      let bt = new Date(
        _beginTime[0],
        _beginTime[1],
        _beginTime[2],
        _beginTime[3],
        _beginTime[4]
      ).getTime();
      let et = new Date(
        _endTime[0],
        _endTime[1],
        _endTime[2],
        _endTime[3],
        _endTime[4]
      ).getTime();
      let rt = new Date(
        _recentTime[0],
        _recentTime[1],
        _recentTime[2],
        _recentTime[3],
        _recentTime[4]
      ).getTime();
      if (rt < bt) {
        _recentTime = _beginTime.concat();
      }
      if (rt > et) {
        _recentTime = _endTime.concat();
      }
      let _data = this.makeDate(_recentTime);
      this.date = _data.date;
      this.dateIndex = _data.dateIndex;
      this.recentTime = _data.recentTime;
      this.placeholderShow = false;
      this.recentTimeStr = this.changeTime(_recentTime);
      this.$emit("datechange", _recentTime, this.recentTimeStr);
    },
    changeTime: function(recentTime) {
      if (this.placeholderShow) {
        return this.placeholder;
      }
      let arr = [];
      for (let i = 0; i < recentTime.length; i++) {
        let temp = recentTime[i];
        if (i === 3 && this.isUnclear) {
          temp = temp === 0 ? "不清楚" : temp - 1;
        }
        temp += "";
        if (temp.length === 1) {
          temp = "0" + temp;
        }
        arr.push(temp);
      }
      if (this.isUnclear && arr[3] === "不清楚") {
        return arr[0] + "-" + arr[1] + "-" + arr[2] + " " + arr[3];
      } else {
        return (
          arr[0] + "-" + arr[1] + "-" + arr[2] + " " + arr[3] + ":" + arr[4]
        );
      }
    },
    /**
     * eg:this.buildArr(1990,2018,'年')
     */
    buildArr: function(_star, _end, company, _isUnclear) {
      let arr = [];
      let end = Math.max(_star, _end);
      let star = Math.min(_star, _end);
      for (let i = star; i <= end; i++) {
        arr.push(i + company);
      }
      if (_isUnclear) {
        arr.unshift("不清楚");
      }
      return arr;
    },
    loop: function(begin, length, fuc) {
      for (let i = begin; i < length; i++) {
        if (fuc(i)) break;
      }
    },
    checkTimeArr: function(arr1, arr2, length) {
      let checkStatus = true;
      this.loop(0, length, function(i) {
        if (arr1[i] !== arr2[i]) checkStatus = false;
      });
      return checkStatus;
    },
    /**
     * 初始化 date 日期时间二维数组
     */
    makeDate: function(recentTime) {
      let arr = [];
      let that = this;
      let beginTime = this.beginTime;
      let endTime = this.endTime;
      let dateIndex = [];
      this.loop(0, beginTime.length, function(i) {
        let min = 0;
        let max = 0;
        switch (i) {
          case 0:
            arr.push(that.buildArr(beginTime[i], endTime[i], "年"));
            dateIndex[i] = recentTime[i] - beginTime[i];
            break;
          case 1:
            min = that.checkTimeArr(beginTime, recentTime, 1)
              ? beginTime[i]
              : 1;
            max = that.checkTimeArr(endTime, recentTime, 1) ? endTime[i] : 12;
            // console.log(min+':'+max);
            dateIndex[i] = that.checkTimeArr(beginTime, recentTime, 1)
              ? recentTime[i] - beginTime[i]
              : recentTime[i] - 1;
            arr.push(that.buildArr(min, max, "月"));
            break;
          case 2:
            min = that.checkTimeArr(beginTime, recentTime, 2)
              ? beginTime[i]
              : 1;
            max = that.checkTimeArr(endTime, recentTime, 2)
              ? endTime[i]
              : new Date(recentTime[0], recentTime[1], 0).getDate();
            // console.log(min + ':' + max);
            dateIndex[i] = that.checkTimeArr(beginTime, recentTime, 2)
              ? recentTime[i] - beginTime[i]
              : recentTime[i] - 1;
            arr.push(that.buildArr(min, max, "日"));
            break;
          case 3:
            min = that.checkTimeArr(beginTime, recentTime, 3)
              ? beginTime[i]
              : 0;
            max = that.checkTimeArr(endTime, recentTime, 3) ? endTime[i] : 23;
            // console.log(min + ':' + max);
            dateIndex[i] = that.checkTimeArr(beginTime, recentTime, 3)
              ? recentTime[i] - beginTime[i]
              : recentTime[i];
            arr.push(that.buildArr(min, max, "时", that.isUnclear));
            break;
          case 4:
            min = that.checkTimeArr(beginTime, recentTime, 4)
              ? beginTime[i]
              : 0;
            max = that.checkTimeArr(endTime, recentTime, 4) ? endTime[i] : 59;
            // console.log(min + ':' + max);
            dateIndex[i] = that.checkTimeArr(beginTime, recentTime, 4)
              ? recentTime[i] - beginTime[i]
              : recentTime[i];
            arr.push(that.buildArr(min, max, "分"));
            break;
          case 5:
            min = that.checkTimeArr(beginTime, recentTime, 5)
              ? beginTime[i]
              : 0;
            max = that.checkTimeArr(endTime, recentTime, 5) ? endTime[i] : 59;
            // console.log(min + ':' + max);
            dateIndex[i] = that.checkTimeArr(beginTime, recentTime, 5)
              ? recentTime[i] - beginTime[i]
              : recentTime[i];
            arr.push(that.buildArr(min, max, "秒"));
            break;
        }
      });
      return {
        date: arr,
        dateIndex: dateIndex,
        recentTime: recentTime
      };
    },
    init() {
      if (!this.selectTime) {
        this.recentTime = this.defSelectTime.concat();
      } else {
        this.placeholderShow = false;
        this.recentTime = this.selectTime.concat();
      }
      let _data = this.makeDate(this.recentTime);
      this.date = _data.date;
      this.dateIndex = _data.dateIndex;
      this.recentTime = _data.recentTime;
      this.recentTimeStr = this.changeTime(_data.recentTime);
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="scss">
</style>
