<template>
  <div class="column">
    <wuc-tab
      :tab-list="activeOptions"
      :tabCur.sync="TabCur"
      :tab-class="headClass"
      :select-class="headSeleClass"
    ></wuc-tab>
    <div class="cascader-bd" :style="bodyStyle">
      <div
        v-for="(option,optionIndex) in showOptions"
        :key="optionIndex"
        class="cascader-inner"
      >
        <scroll-view scroll-y class="cascader-scroll-view">
          <div class="cascader-option">
            <div
              class="cascader-item"
              v-for="(item,index) in option"
              :key="index"
            >
              <text>{{item[fieldNames['label']]}}</text>
            </div>
          </div>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>
import WucTab from "@/components/tab";
import { arrayTreeFilter } from "@/utils/index";
const WUX_CASCADER = "wux-cascader";
// const defaultFieldNames = {
//   label: "label",
//   value: "value",
//   children: "children"
// };
export default {
  name: "cascader",
  data() {
    return {
      TabCur: 0,
      activeOptions: [{ name: "请选择" }, { name: "请选择" }],
      bodyStyle: "",
      activeValue: [],
      showOptions: [],
      fieldNames: {}
    };
  },
  props: {
    defaultValue: {
      type: Array,
      value: []
    },
    value: {
      type: Array,
      value: [],
      observer(newVal) {
        if (this.data.controlled) {
          this.setData({ activeValue: newVal }, () =>
            this.getCurrentOptions(newVal)
          );
        }
      }
    },
    headClass: { type: String, default: "bg-white text-black" },
    headSeleClass: { type: String, default: "text-orange text-lg" }
  },

  components: { WucTab },

  computed: {},

  methods: {
    getActiveOptions(activeValue) {
      const { options } = this.data;
      const value = this.getFieldName("value");
      const childrenKeyName = this.getFieldName("children");

      return arrayTreeFilter(
        options,
        (option, level) => option[value] === activeValue[level],
        { childrenKeyName }
      );
    },

    getShowOptions(activeValue) {
      const { options } = this.data;
      const children = this.getFieldName("children");
      const result = this.getActiveOptions(activeValue)
        .map(activeOption => activeOption[children])
        .filter(activeOption => !!activeOption);

      return [options, ...result];
    },
    getMenus(activeValue = [], hasChildren) {
      const { options, chooseTitle } = this.data;
      const activeOptions = this.getActiveOptions(activeValue);

      if (hasChildren && activeOptions.length < options.length) {
        const value = this.getFieldName("value");
        const label = this.getFieldName("label");

        activeOptions.push({
          [value]: WUX_CASCADER,
          [label]: chooseTitle
        });
      }

      return activeOptions;
    },
    getNextActiveValue(value, optionIndex) {
      let { activeValue } = this.data;

      activeValue = activeValue.slice(0, optionIndex + 1);
      activeValue[optionIndex] = value;

      return activeValue;
    },
    updated(currentOptions, optionIndex, condition, callback) {
      const value = this.getFieldName("value");
      const children = this.getFieldName("children");
      const hasChildren =
        currentOptions[children] && currentOptions[children].length > 0;
      const activeValue = this.getNextActiveValue(
        currentOptions[value],
        optionIndex
      );
      const activeOptions = this.getMenus(activeValue, hasChildren);
      const activeIndex = activeOptions.length - 1;
      const showOptions = this.getShowOptions(activeValue);
      const params = {
        activeValue,
        activeOptions,
        activeIndex,
        showOptions
      };

      if (
        hasChildren ||
        (activeValue.length === showOptions.length &&
          (optionIndex = Math.max(0, optionIndex - 1)))
      ) {
        params.bodyStyle = `transform: translate(${-50 * optionIndex}%)`;
        params.showOptions = showOptions;
      }

      if (condition) {
        this.setData(params);
      }

      if (typeof callback === "function") {
        callback.call(this, currentOptions, activeOptions, !hasChildren);
      }
    },
    getCurrentOptions(activeValue = this.data.activeValue) {
      const optionIndex = Math.max(0, activeValue.length - 1);
      const activeOptions = this.getActiveOptions(activeValue);
      const currentOptions = activeOptions[optionIndex];

      if (currentOptions) {
        this.updated(currentOptions, optionIndex, true);
      } else {
        const value = this.getFieldName("value");
        const label = this.getFieldName("label");

        activeOptions.push({
          [value]: WUX_CASCADER,
          [label]: this.data.chooseTitle
        });

        const showOptions = this.getShowOptions(activeValue);
        const activeIndex = activeOptions.length - 1;
        const params = {
          showOptions,
          activeOptions,
          activeIndex,
          bodyStyle: ""
        };

        this.setData(params);
      }
    },
    onMenuClick(e) {
      const { menuIndex } = e.currentTarget.dataset;
      const index = menuIndex > 1 ? menuIndex - 1 : 0;
      const bodyStyle = `transform: translate(${-50 * index}%)`;

      this.setData({
        bodyStyle,
        activeIndex: menuIndex
      });
    },
    onItemSelect(e) {
      const { item, optionIndex } = e.currentTarget.dataset;

      if (!item || item.disabled) return;

      this.updated(item, optionIndex, !this.data.controlled, this.onChange);
    },
    onPopupClose() {
      this.triggerEvent("close");
    },
    onChange(currentOptions = {}, activeOptions = [], done = false) {
      const options = activeOptions.filter(
        n => n[this.getFieldName("value")] !== WUX_CASCADER
      );
      const value = options.map(n => n[this.getFieldName("value")]);

      if (currentOptions.isLeaf === false && !currentOptions.children) {
        this.emitEvent({ value, options, done: false });
        this.triggerEvent("load", { value, options });
        return;
      }

      this.emitEvent({ value, options, done });
    },
    emitEvent(params = {}) {
      this.triggerEvent("change", params);

      if (params.done) {
        this.onPopupClose();
      }
    },
    getFieldName(name) {
      return this.data.fieldNames[name];
    }
  },

  mounted() {}
};
</script>
<style lang='scss'>
.cascader-bd {
  width: 100%;
  display: flex;
  transition: transform 0.3s;
  background-color: #f5f5f5;
}
.cascader-inner {
  display: block;
  height: inherit;
  width: 50%;
  flex: 0 0 50%;
  background-color: #fff;

  &:nth-child(2n) {
    background-color: #f5f5f5;
  }
}
.cascader-scroll-view {
  max-height: 270px;
}
.cascader-option {
  width: 100%;
  height: inherit;
  display: block;
  padding: 0 20px;
  box-sizing: border-box;
}
.cascader-item {
  position: relative;
  z-index: 10;
  display: block;
  color: #333;
  font-size: 13px;
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-right: 18px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;

  &:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #d9d9d9;
    color: #d9d9d9;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
  }

  &--active {
    color: #ef473a;
  }

  &--disabled {
    opacity: 0.3;
  }
}
</style>
