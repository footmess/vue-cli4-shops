<template>
  <section>
    <ul
      class="infinite-list"
      v-infinite-scroll="$emit('infinite-load')"
      style="overflow:auto"
    >
      <li v-for="item in list" :key="item.id">
        <router-link :to="{ name: 'TopicDetail', params: { id: item.id } }">
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
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  filters: {
    // formatDate(value){
    // }
  }
};
</script>

<style lang="scss" scoped></style>
