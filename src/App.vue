<template>
  <div id="app">
    <!-- <div
			class="custom-style bg-gray-200 min-h-screen p-8 flex items-center justify-center"
		>
			<div class="box-border md:box-content">12351515</div>
		</div> -->
    <!-- <keep-alive> 是用在其一个直属的子组件被开关的情形 
			如果你在其中有 v-for 则不会工作 -->
    <!-- <transition name="fade" appear>
			<div class="app-loading" v-show="isShowLoading">
				<div class="box">
					<div class="line-spin-fade-loader">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<h2>vue-cnode</h2>
					<p>中国最专业的Node.j开源社区</p>
				</div>
			</div>
		</transition> -->
    <transition>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isShowLoading: true,
      userInfo: null
    };
  },
  watch: {
    userInfo: {
      handler: function(val, old) {
        // if(old){
        console.log({ val, old });
        console.log({ call: this });
        // }
      },
      deep: true
    }
  },
  created() {
    this.userInfo = {
      name: "tom"
    };
  },
  mounted() {
    // this.showApp()
    console.log({ performanceB: performance.now() });
  },
  methods: {
    showApp() {
      const blank = performance.now();
      console.log({ performanceC: blank });
      const timer = setTimeout(
        () => {
          clearInterval(timer);
          // this.isShowLoading = false
          document.querySelector(".app-loading").className +=
            " app-loading-hide";
        },
        blank > 2000 ? 0 : 2000 - blank
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  max-width: 640px;
  margin: auto;
  font-size: 13px;
  background: #fff;
  -webkit-tap-highlight-color: transparent;
}

.app-loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  max-width: 640px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  // transition: all 0.3s;
  background-color: #80bd01;
}
.box {
  width: 400px;
  height: 200px;
  text-align: center;
  color: white;
  .line-spin-fade-loader {
    position: relative;
    width: 0;
    margin: auto;
    div {
      background-color: #fff;
      border-radius: 2px;
      margin: 2px;
      animation-fill-mode: both;
      position: absolute;
      width: 5px;
      height: 15px;
    }
    div:nth-child(1) {
      top: 20px;
      left: 0;
      animation: line-spin-fade-loader 1.2s 0.12s infinite ease-in-out;
    }
    div:nth-child(2) {
      top: 13.63636px;
      left: 13.63636px;
      transform: rotate(-45deg);
      animation: line-spin-fade-loader 1.2s 0.24s infinite ease-in-out;
    }
    div:nth-child(3) {
      top: 0;
      left: 20px;
      transform: rotate(90deg);
      animation: line-spin-fade-loader 1.2s 0.36s infinite ease-in-out;
    }
    div:nth-child(4) {
      top: -13.63636px;
      left: 13.63636px;
      transform: rotate(45deg);
      animation: line-spin-fade-loader 1.2s 0.48s infinite ease-in-out;
    }
    div:nth-child(5) {
      top: -20px;
      left: 0;
      animation: line-spin-fade-loader 1.2s 0.6s infinite ease-in-out;
    }
    div:nth-child(6) {
      top: -13.63636px;
      left: -13.63636px;
      transform: rotate(-45deg);
      animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out;
    }
    div:nth-child(7) {
      top: 0;
      left: -20px;
      transform: rotate(-90deg);
      animation: line-spin-fade-loader 1.2s 0.84s infinite ease-in-out;
    }
    div:nth-child(8) {
      top: 13.63636px;
      left: -13.63636px;
      transform: rotate(45deg);
      animation: line-spin-fade-loader 1.2s 0.96s infinite ease-in-out;
    }
  }
  h2 {
    margin-top: 50px;
    line-height: 70px;
    font-size: 40px;
  }
}
.app-loading-hide {
  left: 120%;
  bottom: 120%;
  opacity: 0;
}
@keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 10s;
}
.fade-enter,
.fade-leave-to {
  left: 120%;
  bottom: 120%;
  opacity: 0;
}
.custom-style {
  color: red;
}
</style>
