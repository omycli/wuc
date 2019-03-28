<template>
  <div>
    <custom name="表单" bg-color="bg-gradual-pink fixed"></custom>
    <div>
      <div class="cu-form-group margin-top">
        <div class="title">邮件</div>
        <input placeholder="两字短标题" class="radius" name="input">
      </div>
      <div class="cu-form-group">
        <div class="title">输入框</div>
        <input placeholder="三字标题" class="radius" name="input">
      </div>
      <div class="cu-form-group">
        <div class="title">收货地址</div>
        <input placeholder="统一标题的宽度" class="radius" name="input">
      </div>
      <div class="cu-form-group">
        <div class="title">收货地址</div>
        <input placeholder="输入框带个图标" class="radius" name="input">
        <text class="icon-locationfill text-orange"></text>
      </div>
      <div class="cu-form-group">
        <div class="title">验证码</div>
        <input placeholder="输入框带个按钮" class="radius" name="input">
        <button class="cu-btn bg-green shadow">验证码</button>
      </div>
      <div class="cu-form-group">
        <div class="title">手机号码</div>
        <input placeholder="输入框带标签" class="radius" name="input">
        <div class="cu-capsule radius">
          <div class="cu-tag bg-blue">+86</div>
          <div class="cu-tag line-blue">中国大陆</div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-form-group margin-top">
        <div class="title">普通选择</div>
        <picker @change="PickerChange" :value="index" :range="picker">
          <div class="picker">{{index?picker[index]:'禁止换行，超出容器部分会以 ... 方式截断'}}</div>
        </picker>
      </div>
      <div class="cu-form-group">
        <div class="title">多列选择</div>
        <picker
          mode="multiSelector"
          @change="MultiChange"
          @columnchange="MultiColumnChange"
          :value="multiIndex"
          :range="multiArray"
        >
          <div
            class="picker"
          >{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}</div>
        </picker>
      </div>
      <div class="cu-form-group">
        <div class="title">时间选择</div>
        <picker
          mode="time"
          :value="time"
          start="09:01"
          end="21:01"
          @change="TimeChange"
        >
          <div class="picker">{{time}}</div>
        </picker>
      </div>
      <div class="cu-form-group">
        <div class="title">日期选择</div>
        <picker
          mode="date"
          :value="date"
          start="2015-09-01"
          end="2020-09-01"
          @change="DateChange"
        >
          <div class="picker">{{date}}</div>
        </picker>
      </div>
      <div class="cu-form-group">
        <div class="title">精确到分的日期选择</div>
        <picker-date @datechange="recentTimeChange">
          <div class="picker">{{recTime}}</div>
        </picker-date>
      </div>
      <!-- #ifndef H5 || APP-PLUS -->
      <div class="cu-form-group">
        <div class="title">地址选择</div>
        <picker mode="region" @change="RegionChange" :value="region">
          <div class="picker">{{region[0]}}，{{region[1]}}，{{region[2]}}</div>
        </picker>
      </div>
      <!-- #endif -->

      <div>
        <div class="cu-form-group margin-top">
          <div class="title">开关选择</div>
          <switch
            @change="SwitchA"
            :class="switchA?'checked':''"
            :checked="switchA?true:false"
          ></switch>
        </div>
        <div class="cu-form-group">
          <div class="title">定义颜色</div>
          <switch
            class="red"
            @change="SwitchB"
            :class="switchB?'checked':''"
            :checked="switchB?true:false"
          ></switch>
        </div>
        <div class="cu-form-group">
          <div class="title">定义图标</div>
          <switch
            class="switch-sex"
            @change="SwitchC"
            :class="switchC?'checked':''"
            :checked="switchC?true:false"
          ></switch>
        </div>
        <div class="cu-form-group">
          <div class="title">方形开关</div>
          <switch
            class="orange radius"
            @change="SwitchD"
            :class="switchD?'checked':''"
            :checked="switchD?true:false"
          ></switch>
        </div>
        <radio-group class="block" @change="RadioChange">
          <div class="cu-form-group margin-top">
            <div class="title">单选操作(radio)</div>
            <radio
              :class="radio=='A'?'checked':''"
              :checked="radio=='A'?true:false"
              value="A"
            ></radio>
          </div>
          <div class="cu-form-group">
            <div class="title">定义样式</div>
            <radio
              class="radio"
              :class="radio=='B'?'checked':''"
              :checked="radio=='B'?true:false"
              value="B"
            ></radio>
          </div>
          <div class="cu-form-group">
            <div class="title">定义颜色</div>
            <div>
              <radio
                class="blue radio"
                :class="radio=='C'?'checked':''"
                :checked="radio=='C'?true:false"
                value="C"
              ></radio>
              <radio
                class="red margin-left-sm"
                :class="radio=='D'?'checked':''"
                :checked="radio=='D'?true:false"
                value="D"
              ></radio>
            </div>
          </div>
        </radio-group>
      </div>

      <div>
        <checkbox-group class="block" @change="CheckboxChange">
          <div class="cu-form-group margin-top">
            <div class="title">复选选操作(checkbox)</div>
            <checkbox
              :class="checkbox[0].checked?'checked':''"
              :checked="checkbox[0].checked?true:false"
              value="A"
            ></checkbox>
          </div>
          <div class="cu-form-group">
            <div class="title">定义形状</div>
            <checkbox
              class="round"
              :class="checkbox[1].checked?'checked':''"
              :checked="checkbox[1].checked?true:false"
              value="B"
            ></checkbox>
          </div>
          <div class="cu-form-group">
            <div class="title">定义颜色</div>
            <checkbox
              class="round blue"
              :class="checkbox[2].checked?'checked':''"
              :checked="checkbox[2].checked?true:false"
              value="C"
            ></checkbox>
          </div>
        </checkbox-group>
        <div class="cu-bar bg-white margin-top">
          <div class="action">图片上传</div>
          <div class="action">{{imgList.length}}/4</div>
        </div>
        <div class="cu-form-group">
          <div class="grid col-4 grid-square flex-sub">
            <div
              class="padding-xs bg-img"
              :style="'background-image:url(' + imgList[index] +')'"
              v-for="(item,index) in imgList"
              :key="index"
              @tap="divImage"
              :data-url="imgList[index]"
            >
              <div class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
                <text class="icon-close"></text>
              </div>
            </div>
            <div
              class="padding-xs solids"
              @tap="ChooseImage"
              v-if="imgList.length<4"
            >
              <text class="icon-cameraadd"></text>
            </div>
          </div>
        </div>
        <div class="cu-form-group margin-top">
          <textarea
            placeholder="多行文本输入框"
            maxlength="-1"
            :disabled="modalName!=null"
            placeholder-class="placeholder"
          ></textarea>
        </div>
        <div class="cu-form-group top">
          <div class="title">点文本框</div>
          <textarea
            placeholder="多行文本输入框"
            maxlength="-1"
            :disabled="modalName!=null"
            placeholder-class="placeholder"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
import pickerDate from "@/components/pickerDate";

export default {
  data() {
    return {
      index: null,
      picker: ["喵喵喵", "汪汪汪", "哼唧哼唧"],
      multiArray: [
        ["无脊柱动物", "脊柱动物"],
        ["扁性动物", "线形动物", "环节动物", "软体动物", "节肢动物"],
        ["猪肉绦虫", "吸血虫"]
      ],
      objectMultiArray: [
        [
          {
            id: 0,
            name: "无脊柱动物"
          },
          {
            id: 1,
            name: "脊柱动物"
          }
        ],
        [
          {
            id: 0,
            name: "扁性动物"
          },
          {
            id: 1,
            name: "线形动物"
          },
          {
            id: 2,
            name: "环节动物"
          },
          {
            id: 3,
            name: "软体动物"
          },
          {
            id: 3,
            name: "节肢动物"
          }
        ],
        [
          {
            id: 0,
            name: "猪肉绦虫"
          },
          {
            id: 1,
            name: "吸血虫"
          }
        ]
      ],
      multiIndex: [0, 0, 0],
      time: "12:01",
      date: "2018-12-25",
      recTime: "2018-12-25 12:11",
      region: ["广东省", "广州市", "海珠区"],
      multiData: [],
      switchA: false,
      switchB: true,
      switchC: false,
      switchD: false,
      radio: "A",
      checkbox: [
        {
          value: "A",
          checked: true
        },
        {
          value: "B",
          checked: true
        },
        {
          value: "C",
          checked: false
        }
      ],
      imgList: [],
      modalName: null,
      textareaAValue: "",
      textareaBValue: ""
    };
  },

  components: { Custom, pickerDate },

  computed: {},

  methods: {
    PickerChange(e) {
      this.index = e.target.value;
    },
    MultiChange(e) {
      this.multiIndex = e.target.value;
    },
    MultiColumnChange(e) {
      this.multiData = {
        multiArray: this.multiArray,
        multiIndex: this.multiIndex
      };
      this.multiData.multiIndex[e.target.column] = e.target.value;
      switch (e.target.column) {
        case 0:
          switch (this.multiData.multiIndex[0]) {
            case 0:
              this.multiData.multiArray[1] = [
                "扁性动物",
                "线形动物",
                "环节动物",
                "软体动物",
                "节肢动物"
              ];
              this.multiData.multiArray[2] = ["猪肉绦虫", "吸血虫"];
              break;
            case 1:
              this.multiData.multiArray[1] = ["鱼", "两栖动物", "爬行动物"];
              this.multiData.multiArray[2] = ["鲫鱼", "带鱼"];
              break;
          }
          this.multiData.multiIndex[1] = 0;
          this.multiData.multiIndex[2] = 0;
          break;
        case 1:
          switch (this.multiData.multiIndex[0]) {
            case 0:
              switch (this.multiData.multiIndex[1]) {
                case 0:
                  this.multiData.multiArray[2] = ["猪肉绦虫", "吸血虫"];
                  break;
                case 1:
                  this.multiData.multiArray[2] = ["蛔虫"];
                  break;
                case 2:
                  this.multiData.multiArray[2] = ["蚂蚁", "蚂蟥"];
                  break;
                case 3:
                  this.multiData.multiArray[2] = ["河蚌", "蜗牛", "蛞蝓"];
                  break;
                case 4:
                  this.multiData.multiArray[2] = [
                    "昆虫",
                    "甲壳动物",
                    "蛛形动物",
                    "多足动物"
                  ];
                  break;
              }
              break;
            case 1:
              switch (this.multiData.multiIndex[1]) {
                case 0:
                  this.multiData.multiArray[2] = ["鲫鱼", "带鱼"];
                  break;
                case 1:
                  this.multiData.multiArray[2] = ["青蛙", "娃娃鱼"];
                  break;
                case 2:
                  this.multiData.multiArray[2] = ["蜥蜴", "龟", "壁虎"];
                  break;
              }
              break;
          }
          this.multiData.multiIndex[2] = 0;
          break;
      }
      this.multiArray = this.multiData.multiArray;
      this.multiIndex = this.multiData.multiIndex;
    },
    recentTimeChange(timeStr) {
      console.log(timeStr);
      this.recTime = timeStr;
    },
    TimeChange(e) {
      this.time = e.detail.value;
    },
    DateChange(e) {
      this.date = e.detail.value;
    },
    RegionChange(e) {
      this.region = e.detail.value;
    },
    SwitchA(e) {
      this.switchA = e.detail.value;
    },
    SwitchB(e) {
      this.switchB = e.detail.value;
    },
    SwitchC(e) {
      this.switchC = e.detail.value;
    },
    SwitchD(e) {
      this.switchD = e.detail.value;
    },
    RadioChange(e) {
      this.radio = e.detail.value;
    },
    CheckboxChange(e) {
      let items = this.checkbox;
      let values = e.detail.value;
      for (let i = 0, lenI = items.length; i < lenI; ++i) {
        items[i].checked = false;
        for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].value === values[j]) {
            items[i].checked = true;
            break;
          }
        }
      }
    },
    ChooseImage() {
      uni.chooseImage({
        count: 4,
        sizeType: ["original", "compressed"],
        sourceType: ["album"],
        success: res => {
          if (this.imgList.length !== 0) {
            this.imgList = this.imgList.concat(res.tempFilePaths);
          } else {
            this.imgList = res.tempFilePaths;
          }
        }
      });
    },
    ViewImage(e) {
      console.log(e);
      uni.previewImage({
        urls: this.imgList,
        current: e.currentTarget.dataset.url
      });
    },
    DelImg(e) {
      uni.showModal({
        title: "召唤师",
        content: "确定要删除这段回忆吗？",
        cancelText: "再看看",
        confirmText: "再见",
        success: res => {
          if (res.confirm) {
            this.imgList.splice(e.currentTarget.dataset.index, 1);
          }
        }
      });
    },
    textareaAInput(e) {
      this.textareaAValue = e.detail.value;
    },
    textareaBInput(e) {
      this.textareaBValue = e.detail.value;
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
form-group .title {
  min-width: calc(4em + 15px);
}
</style>
