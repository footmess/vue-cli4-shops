<template>
  <section class="wechat">
    <div class="flip-txt-loading">
      <span>B</span><span>5</span><span>C</span><span>S</span><span>G</span><span>O</span>
    </div>
    <div class="blur"></div>
  </section>
</template>

<script>
  export default {
    name: "base-loading",
    methods:{
    },
  }
</script>

<style lang="scss" scoped>
  .wechat{
    .blur{
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      filter: blur(8px);
      background: url("../assets/bg.png");
    }
    .flip-txt-loading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 99;
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 5px;
      color: #64b0f1;
    }

    .flip-txt-loading > span {
      animation: flip-txt  2s infinite;
      display: inline-block;
      transform-origin: 50% 50% -10px;
      transform-style: preserve-3d;
    }

    .flip-txt-loading > span:nth-child(1) {
      -webkit-animation-delay: 0.10s;
      animation-delay: 0.10s;
    }

    .flip-txt-loading > span:nth-child(2) {
      -webkit-animation-delay: 0.20s;
      animation-delay: 0.20s;
    }

    .flip-txt-loading > span:nth-child(3) {
      -webkit-animation-delay: 0.30s;
      animation-delay: 0.30s;
    }

    .flip-txt-loading > span:nth-child(4) {
      -webkit-animation-delay: 0.40s;
      animation-delay: 0.40s;
    }

    .flip-txt-loading > span:nth-child(5) {
      -webkit-animation-delay: 0.50s;
      animation-delay: 0.50s;
    }

    .flip-txt-loading > span:nth-child(6) {
      -webkit-animation-delay: 0.60s;
      animation-delay: 0.60s;
    }

    .flip-txt-loading > span:nth-child(7) {
      -webkit-animation-delay: 0.70s;
      animation-delay: 0.70s;
    }

    @keyframes flip-txt  {
      to {
        -webkit-transform: rotateX(1turn);
        transform: rotateX(1turn);
      }
    }
  }
</style>
