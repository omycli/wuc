<template>
  <div>
    <custom
      name="操作条"
      bg-color="bg-gradual-pink"
    ></custom>

    <div>
      <div class="cu-bar bg-white margin-top">
        <div class='action'>
          <text class='icon-title text-green'></text>
          <text>底部操作条</text>
        </div>
      </div>

      <div class='box'>
        <div class="cu-bar tabbar bg-white">
          <div class="action">
            <div class='icon-cu-image'>
              <image src='/static/assets/tabbar/basics_cur.png'></image>
            </div>
            <div class='text-green'>元素</div>
          </div>
          <div class="action">
            <div class='icon-cu-image'>
              <image src='/static/assets/tabbar/component.png'></image>
            </div>
            <div class='text-gray'>组件</div>
          </div>
          <div class="action">
            <div class='icon-cu-image'>
              <image src='/static/assets/tabbar/plugin.png'></image>
              <div class='cu-tag badge'>99</div>
            </div>
            <div class='text-gray'>扩展</div>
          </div>
          <div class="action">
            <div class='icon-cu-image'>
              <image src='/static/assets/tabbar/about.png'></image>
              <div class='cu-tag badge'></div>
            </div>
            <div class='text-gray'>关于</div>
          </div>
        </div>
        <div class="cu-bar tabbar margin-bottom-xl bg-black">
          <div class="action text-orange">
            <div class='icon-homefill'></div> 首页
          </div>
          <div class="action text-gray">
            <div class='icon-similar'></div> 分类
          </div>
          <div class="action text-gray">
            <div class='icon-recharge'></div>
            积分
          </div>
          <div class="action text-gray">
            <div class='icon-cart'>
              <div class='cu-tag badge'>99</div>
            </div>
            购物车
          </div>
          <div class="action text-gray">
            <div class='icon-my'>
              <div class='cu-tag badge'></div>
            </div>
            我的
          </div>
        </div>
        <div class="cu-bar tabbar margin-bottom-xl bg-white">
          <div class="action text-green">
            <div class='icon-homefill'></div> 首页
          </div>
          <div class="action text-gray">
            <div class='icon-similar'></div> 分类
          </div>
          <div class="action text-gray add-action">
            <button class='cu-btn icon-add bg-green shadow'></button>
            发布
          </div>
          <div class="action text-gray">
            <div class='icon-cart'>
              <div class='cu-tag badge'>99</div>
            </div>
            购物车
          </div>
          <div class="action text-gray">
            <div class='icon-my'>
              <div class='cu-tag badge'></div>
            </div>
            我的
          </div>
        </div>
        <div class="cu-bar tabbar bg-black">
          <div class="action text-green">
            <div class='icon-homefill'></div> 首页
          </div>
          <div class="action text-gray">
            <div class='icon-similar'></div> 分类
          </div>
          <div class="action text-gray add-action">
            <button class='cu-btn icon-add bg-green shadow'></button>
            发布
          </div>
          <div class="action text-gray">
            <div class='icon-cart'>
              <div class='cu-tag badge'>99</div>
            </div>
            购物车
          </div>
          <div class="action text-gray">
            <div class='icon-my'>
              <div class='cu-tag badge'></div>
            </div>
            我的
          </div>
        </div>

        <div class="cu-bar bg-white tabbar border shop">
          <button
            class="action"
            open-type='contact'
          >
            <div class='icon-service text-green'>
              <div class='cu-tag badge'></div>
            </div>
            客服
          </button>
          <div class="action text-orange">
            <div class='icon-favorfill'></div> 已收藏
          </div>
          <div class="action">
            <div class='icon-cart'>
              <div class='cu-tag badge'>99</div>
            </div>
            购物车
          </div>
          <div class='bg-red submit'>立即订购</div>
        </div>

        <div class="cu-bar bg-white tabbar border shop">
          <button
            class="action"
            open-type='contact'
          >
            <div class='icon-service text-green'>
              <div class='cu-tag badge'></div>
            </div>
            客服
          </button>
          <div class="action">
            <div class='icon-cart'>
              <div class='cu-tag badge'>99</div>
            </div>
            购物车
          </div>
          <div class='bg-orange submit'>加入购物车</div>
          <div class='bg-red submit'>立即订购</div>
        </div>

        <div class="cu-bar bg-white tabbar border shop">
          <button
            class="action"
            open-type='contact'
          >
            <div class='icon-service text-green'>
              <div class='cu-tag badge'></div>
            </div>
            客服
          </button>
          <div class="action">
            <div class=' icon-shop'></div> 店铺
          </div>
          <div class="action">
            <div class='icon-cart'>
              <div class='cu-tag badge'>99</div>
            </div>
            购物车
          </div>
          <div class='btn-group'>
            <button class='cu-btn bg-red round shadow-blur'>立即订购</button>
          </div>
        </div>
        <div class="cu-bar bg-white tabbar border shop">
          <button
            class="action"
            open-type='contact'
          >
            <div class='icon-service text-green'>
              <div class='cu-tag badge'></div>
            </div> 客服
          </button>
          <div class="action">
            <div class='icon-cart'>
              <div class='cu-tag badge'>99</div>
            </div>
            购物车
          </div>
          <div class='btn-group'>
            <button class='cu-btn bg-orange round shadow-blur'>加入购物车</button>
            <button class='cu-btn bg-red round shadow-blur'>立即订购</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white">
        <div class='action'>
          <text class='icon-title text-green'></text>
          <text>标题操作条</text>
        </div>
      </div>
      <div class='box'>
        <div class="cu-bar bg-white">
          <div class='action border-title'>
            <text class='text-xl text-bold'>关于我们</text>
            <text
              class='bg-grey'
              style='width:2rem'
            ></text>
            <!-- 底部样式 last-child选择器-->
          </div>
        </div>
        <div class="cu-bar bg-white">
          <div class='action border-title'>
            <text class='text-xl text-bold text-blue'>关于我们</text>
            <text
              class='bg-gradual-blue'
              style='width:3rem'
            ></text>
          </div>
        </div>
        <div class="cu-bar bg-white">
          <div class='action sub-title'>
            <text class='text-xl text-bold text-green'>关于我们</text>
            <text class='bg-green'></text>
            <!-- last-child选择器-->
          </div>
        </div>
        <div class="cu-bar bg-white">
          <div class='action sub-title'>
            <text class='text-xl text-bold text-blue'>关于我们</text>
            <text class='text-ABC text-blue'>about</text>
            <!-- last-child选择器-->
          </div>
        </div>
        <div class="cu-bar bg-white">
          <div class='action title-style-3'>
            <text class='text-xl text-bold'>关于我们</text>
            <text class='text-Abc text-gray self-end margin-left-sm'>about</text>
          </div>
        </div>
        <div class="cu-bar bg-white">
          <div class='action'>
            <text class='icon-title text-green'></text>
            <text class='text-xl text-bold'>关于我们</text>
          </div>
        </div>
        <div class="cu-bar bg-white">
          <div class='action'>
            <text class='icon-titles text-green'></text>
            <text class='text-xl text-bold'>关于我们</text>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white">
        <div class='action'>
          <text class='icon-title text-green'></text>
          <text>顶部操作条</text>
        </div>
      </div>
      <div class='box'>
        <div class="cu-bar bg-white">
          <div class='action'>
            <text class='icon-back text-gray'></text> 返回
          </div>
          <div class='content text-bold'>
            操作条
          </div>
        </div>
        <div class="cu-bar bg-white">
          <div class='action'>
            <text class='icon-homefill text-gray'></text> 首页
          </div>
          <div class='content text-bold'>
            鲜亮的高饱和色彩，专注视觉的小程序组件库
          </div>
          <div class='action'>
            <text class='icon-cardboardfill text-grey'></text>
            <text class='icon-recordfill text-red'></text>
          </div>
        </div>
        <div class="cu-bar bg-blue">
          <div class='action'>
            <text class='icon-close'></text> 关闭
          </div>
          <div class='content text-bold'>
            海蓝
          </div>
        </div>
        <div class="cu-bar bg-black search">
          <div
            class="cu-avatar round"
            style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
          ></div>
          <div class='content'>
            ColorUI
          </div>
          <div class='action'>
            <text class="icon-more"></text>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white">
        <div class='action'>
          <text class='icon-title text-green'></text>
          <text>搜索操作条</text>
        </div>
      </div>
      <div class='box'>
        <div class="cu-bar search bg-white">
          <div class='search-form round'>
            <text class="icon-search"></text>
            <input
              type="text"
              placeholder="搜索图片、文章、视频"
              confirm-type="search"
            />
          </div>
          <div class='action'>
            <button class='cu-btn bg-green shadow-blur round'>搜索</button>
          </div>
        </div>
        <div class="cu-bar search bg-white">
          <div
            class="cu-avatar round"
            style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);"
          ></div>
          <div class='search-form round'>
            <text class="icon-search"></text>
            <input
              type="text"
              placeholder="搜索图片、文章、视频"
              confirm-type="search"
            />
          </div>
          <div class='action'>
            <text>广州</text>
            <text class="icon-triangledownfill"></text>
          </div>
        </div>
        <div class="cu-bar bg-red search">
          <div
            class="cu-avatar round"
            style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"
          ></div>
          <div class='search-form radius'>
            <text class="icon-search"></text>
            <input
              type="text"
              placeholder="搜索图片、文章、视频"
              confirm-type="search"
            />
          </div>
          <div class='action'>
            <text>广州</text>
            <text class="icon-triangledownfill"></text>
          </div>
        </div>
        <div class="cu-bar bg-cyan search">
          <div class='search-form radius'>
            <text class="icon-search"></text>
            <input
              type="text"
              placeholder="搜索图片、文章、视频"
              confirm-type="search"
            />
          </div>
          <div class='action'>
            <text class='icon-close'></text>
            <text>取消</text>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white">
        <div class='action'>
          <text class='icon-title text-green'></text>
          <text>操作条按钮组</text>
        </div>
      </div>
      <div class='box'>
        <div class="cu-bar btn-group">
          <button class='cu-btn bg-green shadow-blur round lg'>保存</button>
        </div>
        <div class="cu-bar btn-group">
          <button class='cu-btn bg-green shadow-blur'>保存</button>
          <button class='cu-btn text-green line-green shadow'>上传</button>
        </div>
        <div class="cu-bar btn-group">
          <button class='cu-btn bg-green shadow-blur round'>保存</button>
          <button class='cu-btn bg-blue shadow-blur round'>提交</button>
        </div>
      </div>
    </div>

    <div>
      <div class="cu-bar bg-white">
        <div class='action'>
          <text class='icon-title text-green'></text>
          <text>输入操作条</text>
        </div>
      </div>
      <div class='box'>
        <div class="cu-bar input">
          <div class='action'>
            <text class='icon-sound text-grey'></text>
          </div>
          <input
            class='solid-bottom'
            maxlength="300"
            cursor-spacing="10"
          />
          <div class='action'>
            <text class='icon-emojifill text-grey'></text>
          </div>
          <button class='cu-btn bg-green shadow-blur'>发送</button>
        </div>

        <div class="cu-bar input">
          <div
            class="cu-avatar round"
            style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
          ></div>
          <div class='action'>
            <text class='icon-roundaddfill text-grey'></text>
          </div>
          <input
            class='solid-bottom'
            maxlength="300"
            cursor-spacing="10"
          />
          <div class='action'>
            <text class='icon-emojifill text-grey'></text>
          </div>
          <button class='cu-btn bg-green shadow-blur'>发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Custom from "@/components/custom";
export default {
  data() {
    return {};
  },

  components: { Custom },

  computed: {},

  methods: {},

  mounted() {}
};
</script>
<style lang='scss'>
.box {
  margin: 20rpx;
  .cu-bar {
    margin-top: 20rpx;
  }
}
</style>
