<template>
  <main class="news-main">
    <div class="news">
    <div class="news__headline">
      <div class="news__overlay"/>
      <h2 class="news__heading">Новости</h2>
    </div>
    <div class="news__wrapper">
      <ul class="news__list">
        <li class="news__list__item" v-for="item in news" :key="item.id">
          <router-link class="news__link" :to="`/news/${item.id}`">
            <img class="news__img"
                 :src="require(`../assets/img/${item.id}.jpg`)" alt="Санкт-Петербург">
            <h2 class="news__title">{{ item.title }}</h2>
            <time class="news__time" :datetime="item.dateTime">{{item.date}}</time>
            <p class="news__subtitle">
              {{item.description}}
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  </main>
</template>

<script>
import { Component, Vue, Watch } from 'vue-property-decorator';


@Component({
})
export default class News extends Vue {
  news = [];

  mounted() {
    this.$store.dispatch('GET_NEWS');
    setTimeout(() =>   this.news = this.$store.state.news1, 300);
    setTimeout(() => console.log(this.news),300);


  }


}
</script>

<style scoped lang="scss">
  .news {
    &__headline {
      margin: 0 0 75px;
      padding: 85px 0;
      background-color: #e7e7e7;
      background-image: url("../assets/img/news.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      text-align: center;
      color: #ffffff;
      text-transform: uppercase;
      position: relative;
    }
    &__heading {
      @include reset-text;
      font-size: 35px;
      position: relative;
      z-index: 1;
    }
    &__overlay {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(60, 60, 60, 0.5);
      }
    }
    &__wrapper {
      width: 85%;
      margin: 0 auto;
      @media (min-width: 768px) {
        width: 690px;
      }
      @media (min-width: 1200px) {
        width: 1100px;
      }
    }
    &__list {
      @include reset-list;
      margin-bottom: 50px;
      @media (min-width: 768px) {
        padding: 0 65px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
      }
      @media (min-width: 1200px) {
        justify-content: space-between;
        padding: 0;
      }
      &::after {
        content: "";
        flex: auto;
      }
      &__item {
        width: 230px;
        min-height: 350px;
        overflow: hidden;
        margin: 0 auto 30px;
        padding: 0 0 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        @media (min-width: 768px) {
          margin: 0 90px 35px 0;
          &:nth-child(2n) {
            margin-right: 0;
          }
        }
        @media (min-width: 1200px) {
          margin-right:60px;
          &:nth-child(2n) {
            margin-right: 60px;
          }
          &:nth-child(4n) {
            margin-right: 0;
          }
        }
        &:hover,
        &:focus {
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
        }
      }
    }
    &__img {
      width: 100%;
      height: 175px;
      margin-bottom: 15px;
    }
    &__title {
      font-size: 20px;
      text-align: center;
      margin: 0 0 20px;
      padding: 0 20px;
    }
    &__time {
      font-size: 10px;
      line-height: 10px;
      text-align: right;
      display: inline-block;
      position: relative;
      width: auto;
      padding: 5px 8px;
      margin-bottom: 15px;
      margin-left: 20px;
      background-color: #e7e7e7;
      color: #6e6e6e;
      border-radius: 20px;
    }
    &__subtitle {
      height: 50px;
      padding: 0 20px;
      margin: 0;
      font-size: 12px;
      line-height: 16px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &__link {
      width: 100%;
      height: auto;
      font: inherit;
      color: #0c2230;
      text-decoration: none;
      display: block;
    }
  }

</style>
