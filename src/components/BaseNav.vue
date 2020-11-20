<template>
  <header class="nav">
    <ul>
      <li
        v-for="item in tabs"
        :key="item.id"
        :class="{ active: item.tab === query }"
      >
        <router-link :to="{ path: 'index', query: { tab: item.tab } }">{{
          item.title
        }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      default: "all"
    }
  },
  data() {
    return {
      tabs: [
        { id: 1, title: "全部", tab: "all" },
        { id: 2, title: "精华", tab: "good" },
        { id: 3, title: "分享", tab: "share" },
        { id: 4, title: "问答", tab: "ask" },
        { id: 5, title: "招聘", tab: "job" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  border-bottom: 1px solid #ddd;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      position: relative;
      line-height: 49px;
      a {
        display: block;
        // 先将十六位颜色值转换为 hsl 表达法
        // 提取出 lightness（亮度）值
        // 再将亮度值加上（lighten）或减去（darken）相应的百分比。
        color: lighten($color: #222, $amount: 50%);
      }
      .router-link-exact-active {
        color: #222;
      }
    }
  }
}
// 使用伪元素而不是使用border-bottom是因为后者会导致页面重排重绘,页面会有抖动
.active ::after {
  content: "";
  position: absolute;
  height: 3px;
  bottom: 1px;
  right: 0;
  left: 0;
  z-index: 1;
  background: #80bd01;
}
</style>
