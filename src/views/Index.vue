<template>
  <section>
    <div v-show="!isLoading">
      <base-nav :query="params.tab" />
      <!-- <main-content :list="list" @infinite-load="getData" /> -->
      <section>
        <ul>
          <li v-for="item in list" :key="item.id">
            <router-link
              :to="{
                name: 'TopicDetail',
                params: { id: item.id }
              }"
            >
              <div class="top">
                <div class="headimg"></div>
                <div class="author">
                  <strong>{{ item.author.loginname }}</strong>
                  <div>
                    <time>{{ item.create_at | format }}</time>
                    <span class="tag">#分享#</span>
                  </div>
                </div>
              </div>
              <div class="flag" v-if="item.top || item.good">
                <div class="icon" v-if="item.good">
                  <i class="iconfont iconjingpin"></i>
                </div>
                <div class="icon" v-if="item.top">
                  <i class="iconfont iconTest-Flusk"></i>
                </div>
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="bottom">
                <div class="item">
                  <i class="iconfont"></i>
                  <div class="num">
                    {{ item.visit_count > 0 ? item.visit_count : "暂无阅读" }}
                  </div>
                </div>
                <div class="item">
                  <i class="iconfont"></i>
                  <div class="num">
                    {{ item.reply_count > 0 ? item.reply_count : "暂无评论" }}
                  </div>
                </div>
                <div class="item">
                  <i class="iconfont"></i>
                  <time class="num">{{ item.last_reply_at | format }}</time>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </section>
      <base-footer :pathname="pathName" />
    </div>
    <base-loading v-show="isLoading" />
  </section>
</template>

<script>
import BaseNav from "@/components/BaseNav";
import BaseFooter from "@/components/BaseFooter";
// import MainContent from "@/components/MainContent";
import BaseLoading from "@/components/BaseLoading";
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    tab: {
      type: String,
      default: "all"
    },
    customLimit: {
      type: String,
      default: "20"
    },
    customPage: {
      type: String,
      default: "1"
    },
    pathName: String
  },
  components: {
    BaseNav,
    BaseFooter,
    BaseLoading
    // MainContent
  },
  data() {
    return {
      // 列表
      list: [],
      // 数据正在加载中
      // loading: true,
      // 是否全部加载完
      // done: false,
      // 请求参数
      params: {
        tab: this.tab,
        mdrender: false,
        limit: this.customLimit,
        // 页数
        page: this.customPage
      }
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    }),
    ...mapMutations({
      setFalse: state => state.commit
    })
  },
  created() {
    this.getData();
  },
  beforeRouteUpdate(to, from, next) {
    this.params = {
      tab: to.query.tab,
      mdrender: false,
      limit: to.query.customLimit || "20",
      page: to.query.customPage || "1"
    };
    this.list = [];
    this.isLoading = true;
    this.getData();
    this.isLoading = false;
    next();
  },
  methods: {
    async getData() {
      const data = await this.$http.get("/topics", {
        params: this.params
      });
      this.list = [...this.list, ...data];
      // this.params.page++
      // this.loading = false
      // this.done = data.length < 20
      this.isLoading = false;
      console.log(this.list);
    }
  }
};
</script>

<style lang="scss" scoped></style>
