<template>
<div class="news-placeholder">
  <div class="news-placeholder__animation"/>
</div>
</template>
<script>
  import { Vue, Component} from 'vue-property-decorator';
  @Component
  export default class NewsPlaceholder extends Vue {

  }
</script>
<style lang="scss" scoped>
  .news-placeholder {
    width: 230px;
    min-height: 370px;
    height: 370px;
    overflow: hidden;
    background-color: rgba(60, 60, 60, 1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-right: 30px;
    margin-bottom: 30px;


    &__animation {
      position: relative;
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    &__animation::before,
    &__animation:after{
      content: "";
      position: absolute;
      border-radius: 50%;
    }

    &__animation:before {
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, rgba(27, 152, 224,0.5) 0%, rgba(27, 152, 224,0.8) 50%, rgba(27, 152, 224,1) 100%);
      animation: animation .5s infinite linear;
    }
    &__animation:after {
      width: 90%;
      height: 90%;
      background-color: rgba(60, 60, 60, 1);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @keyframes animation {
    to {
      transform: rotate(360deg);
    }
  }
</style>




