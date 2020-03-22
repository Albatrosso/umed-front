<template>
  <main class="news-main">
    <div class="news">
    <div class="news__headline">
      <div class="news__overlay"/>
      <h2 class="news__heading">Новости</h2>
    </div>

    <div v-if="!news" class="news__placeholder">
      <div v-for="i in 6" :key="i">
        <news-placeholder/>
      </div>
    </div>
    <div class="news__wrapper">
      <ul class="news__list">
          <li class="news__list__item" v-for="item in news" :key="item.id">
            <router-link class="news__link" :to="`/news/${item.id}`">
              <news-card :news-card="item"></news-card>
            </router-link>
          </li>
      </ul>
    </div>
  </div>
  </main>
</template>

<script>
import { Component, Vue} from 'vue-property-decorator';
import newsPlaceholder from '../components/NewsPlaceholder.vue'
import { mapGetters } from 'vuex';
import NewsCard from '../components/NewsCard.vue';

@Component({
  components: {
    newsPlaceholder,
    'news-card': NewsCard,
  },
  computed: {
    ...mapGetters([
      'GET_NEW',
    ]),
  },
})
export default class News extends Vue {
  get news() {
     return this.GET_NEW;
  }

  mounted() {
    this.$store.dispatch('GET_NEWS');
  }


}
</script>

<style scoped lang="scss">
  .news {

    &__placeholder {
      display: flex;
      justify-content: space-around;
      flex-flow: wrap;
      align-items: center;
    }
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
