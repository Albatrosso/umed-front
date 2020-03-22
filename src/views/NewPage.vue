<template>
  <div>
  <div class="news">
    <div class="news__headline">
      <div class="news__overlay"></div>
      <h2 class="news__heading">Новости</h2>
    </div>
    <div class="container">
      <router-link class="contact__back-link" to="/news">Назад к новостям</router-link>
      <article class="page-news__article">
        <h2 class="article__headline">{{newsPage.title}}</h2>
<!--        <time class="news__time news__time&#45;&#45;main-page" datetime="2019-06-05">5 июня 2019</time>-->
<!--        <div class="article__main">-->
<!--          <img class="article__img" :src="require(`../assets/img/${newsPage.id}.jpg`)" alt="Чебоксары">-->
<!--          <div class="article__text">-->
<!--            <p class="article__paragraph">{{newsPage.description}}</p>-->
<!--            <p class="article__paragraph">{{newsPage.event}}</p>-->
<!--            <p class="article__paragraph">{{newsPage.place}}</p>-->
<!--            <ul class="article__list" v-if="newsPage.org">{{newsPage.org.name}}-->
<!--              <li class="article__item" v-for="item in newsPage.org.orgList" :key="newsPage.org.orgList.indexOf(item)">-->
<!--                {{item}}-->
<!--              </li>-->
<!--            </ul>-->
<!--            <p class="article__paragraph" v-if="newsPage.addition">-->
<!--              {{newsPage.addition}}-->
<!--            </p>-->
<!--            <p class="article__paragraph" v-if="newsPage.end">-->
<!--              {{newsPage.end}}-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
        <pre class="article__text">
          {{newsPage.text}}
        </pre>
      </article>
    </div>
  </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters([
      'GET_NEW',
    ]),
  },
})
export default class NewPage extends Vue {
  get newsPage() {
    return this.GET_NEW[this.$route.params.id - 1];
  }

  mounted() {
    this.$store.dispatch('GET_NEWS');
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

    &__time {
      ont-size: 10px;
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

      &--main-page {
        padding: 10px 25px;
        margin: 0 0 20px;
      }
    }
  }

  .container {
    margin: 0 auto;
    width: 290px;

    @media (min-width: 768px) {
      width: 690px;
    }

    @media (min-width: 1200px){
      width: 1100px;
    }
  }

  .contact__back-link {
    color: $blue;
    padding-left: 30px;
    position: relative;
    &::before{
      content: url("../assets/svg/back-arrow.svg");
      width: 25px;
      height: 25px;
      position: absolute;
      top: -3px;
      left: 0;
    }
  }

  .page-news__article {
    margin-bottom: 80px;
  }

  .article {
    &__headline {
      margin-bottom: 35px;
    }

    &__text {
      white-space: pre-wrap;
      font-family: inherit;
      margin: 0 auto;
    }

    &__main {
      @media (min-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }

    &__img {
      display: block;
      margin: 0 auto 35px;

      @media (min-width: 768px) {
        margin-right: 50px;
        margin-bottom: 0;
      }
    }

    &__pararaph:first-child {
      @media (min-width: 768px) {
        margin-top: 0;
      }
    }

    &__list {
      margin-top: 25px;
    }
  }
</style>
