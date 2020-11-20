<template>
  <footer class="footer">
    <ul>
      <li
        v-for="item in list"
        :key="item.id"
        :class="{ active: item.name === pathname }"
      >
        <!-- 命名路由跳转 -->
        <router-link :to="{ name: item.name }">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{ item.title }}</span>
          <div
            class="count"
            v-if="item.name === 'self-message' && count.data > 0"
          >
            {{ count.data }}
          </div>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  props: {
    pathname: String
  },
  data() {
    return {
      list: [
        { title: "首页", name: "Index", icon: "iconshouye" },
        {
          title: "发表",
          name: "TopicCreate",
          icon: "iconfabiaowenzhang"
        },
        { title: "消息", name: "Message", icon: "iconxiaoxi" },
        { title: "我的", name: "Info", icon: "iconziyuan" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  background: #fff;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ddd;
  z-index: 10;
  height: 49px;
  text-align: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    li {
      flex: 1;
    }
  }
  a {
    display: block;
    position: relative;
    color: #222;
    i {
      display: block;
      line-height: 24px;
    }
    span {
      display: block;
      line-height: 16px;
      font-size: 13px;
    }
  }
  .active {
    a {
      color: red;
    }
  }
}
</style>
