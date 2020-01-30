<template>
<div class="main-page">
  <div class="main-page__header"></div>
  <div class="main-page__body">
    <div class="main-page__body-carousel">
      <el-carousel height="70vh" trigger="click">
        <el-carousel-item v-for="item in services" :key="item">
        <div class="main-page__body-carousel_overlay">
          <div class="main-page__body-carousel_value">
            {{item}}
          </div>
        </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div v-scroll class="main-page__body-about-us">
      <img class="main-page__body-about-us_photo"
           src="../img/about_us.jpg"/>
      <div class="main-page__body-about-us-text">
      <h2 class="main-page__body-about-us_title">О нас</h2>
      <p class="main-page__body-about-us_value">
        ГК ЮМед – ведущий поставщик медицинского оборудования и расходных материалов с 2012 года.
        Основная деятельность - это обеспечение клиник, от муниципальных больниц до
        крупнейших научно-исследовательских центров, медицинскими изделиями
        в области травматологии, ортопедии и спортивной медицины.
      </p>
      </div>
    </div>
    <div class="main-page__body-map">
    <Map v-scroll></Map>
    </div>
    <div v-scroll class="main-page__body-statistic">
        <h2 v-scroll class="main-page__body-statistic_headline">Ключевые показатели</h2>
        <div v-scroll class="main-page__body-statistic_list">
            <div class="main-page__body-statistic_wrapper">
              <b class="main-page__body-statistic_value">15</b>
              <span class="main-page__body-statistic_text">филиалов</span>
            </div>
            <div class="main-page__body-statistic_wrapper">
              <b class="main-page__body-statistic_value">9</b>
              <span class="main-page__body-statistic_text">лет на рынке</span>
            </div>
            <div class="main-page__body-statistic_wrapper">
              <b class="main-page__body-statistic_value">60</b>
              <span class="main-page__body-statistic_text">партнеров</span>
            </div>
        </div>
      </div>
    <div v-scroll class="main-page__body-clients">
      <div v-scroll class="main-page__body-clients-title">
        Наши партнеры
      </div>
      <div v-scroll class="main-page__body-clients-content-wrap">
        <div class="main-page__body-clients-content" v-for="client in clients" :key="client">
          <img class="main-page__body-clients-photo"
               :src="require(`../../src/img/${client}.png`)"
               :alt="client"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Map from '../components/Map.vue';

@Component({
  components: {
    Map,
  },
})
export default class HomePage extends Vue {
  services = [
    'артроскопия',
    'остеосинтез',
    'эндопротезирование',
  ]

  clients = [
    'karlstorz',
    'arthrex',
    'medgal',
    'osteosintez',
    'Smith',
    'Illizrov',
    'chm',
  ]
}
</script>

<style scoped lang="scss">
.main-page {
  font-family: 'Raleway', sans-serif;
  &__header {
    width: 100%;
    height: 90px;
    position: fixed;
    top: 0;
    background-color: black;
    z-index: 999;
    opacity: 0.3;
  }
  &__body {
    width: 100%;
    height: 100%;
  }
  &__body-carousel {
    width: 100%;
    z-index: 1;
  }

  &__body-carousel_overlay {
    display: flex;
    justify-content:flex-start;
    align-items:center;
    height: 100%;
    width: 100%;
  }
  &__body-carousel_overlay-video {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
  &__body-carousel_value {
    background-color: rgba(12, 34, 48, 0.4);
    font-weight: bold;
    font-size: 30px;
    padding: 20px;
    margin: 0 0 0 15%;
    border: 5px solid #ffffff;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    text-transform: uppercase;
    color: #ffffff;
    height: fit-content;
  }

  &__body-about-us{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 15% 0 15%;
    font-size: 20px;
  }
  &__body-about-us-text{
    width: 100%;
  }
  &__body-about-us_photo {
    max-width: 400px;
    height: auto;
    margin: 0 5% 0 0;
  }
  &__body-about-us_title {
    font-size: 32px;
  }
  &__body-about-us_value {
  width: 100%;
  height: auto;
  }
  &__body-map {
    z-index: -1;
    height: 500px;
    padding: 5% 15% 5% 15%;
  }
  &__body-statistic{
    margin: 0px 0 0px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 50px 20px 50px 20px;
    background-color: #eeeeee;
    color: #0c2230;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__body-statistic_headline{
    color: #0c2230;
    font-size: 35px;
    line-height: 45px;
    text-align: center;
    margin: 0;
  }
  &__body-statistic_list{
    display: flex;
    flex-flow: wrap;
    align-items: center;
    list-style: none;
    justify-content: space-around;
    width: 60%;
  }

  &__body-statistic_value{
    display: block;
    font-size: 90px;
    line-height: 1.2;
    margin-bottom: 15px;
    color: #1B98E0;
    text-align: center;
  }
  &__body-statistic_text{
    font-size: 24px;
    text-align: center;
  }
  &__body-clients {
    display: flex;
    align-items: center;
    flex-flow: column;
    padding: 80px 0 0 0;
  }
  &__body-clients-title {
    font-size: 35px;
    line-height: 1.2;
    margin: 0 0 40px 0;
  }
  &__body-clients-content-wrap {
    width: 80%;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
  }
  &__body-clients-content {
    padding: 0 15px;
    margin-bottom: 35px;
    -webkit-filter: grayscale(99%);
    filter: grayscale(99%);
  }
  &__body-clients-content:hover{
    transition: filter 0.3s ease-in-out;
    filter: grayscale(0%);
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


  .before-enter{
    opacity: 0;
    transition: all 1.5s ease-in-out;
  }
  .enter{
    opacity: 1;
    transition: all 1.5s ease-in-out;
  }

  @media (max-width:500px) {
    .main-page {
      &__body-carousel_overlay {
        justify-content: center;
        align-items: flex-end;
      }
      &__body-carousel_value {
        margin: 0 0 30px 0;
        font-size: 20px;
      }
      &__body-about-us_photo{
        width: 100%;
        border-radius: 0;
      }
    }

  }
}
</style>
