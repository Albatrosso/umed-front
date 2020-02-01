<template>
  <header class="page-header">
    <div class="page-header__wrapper">
      <div class="page-header__mobile-wrapper">
        <a class="page-header__logo-link">
          <img src="../assets/img/logo.png" alt="Юмед" width="64" height="40">
        </a>
        <span class="page-header__tel">8 (495) 784-06-17</span>
        <button class="page-header__toggle" @click="openMenu">
          <span class="visually-hidden">Открыть/закрыть меню</span>
        </button>
      </div>
      <ul class="page-header__list" v-if="menuOpened || isDesktop">
        <li class="page-header__item">
          <a class="page-header__link">Главная</a>
        </li>
        <li class="page-header__item">
          <a class="page-header__link">Новости</a>
        </li>
        <li class="page-header__item page-header__item--dropdown">
          <a class="page-header__link page-header__link--dropdown">О нас</a>
          <ul class="page-header__list--sub">
            <li class="page-header__item--sub">
              <a class="page-header__link--sub">О компании</a>
            </li>
            <li class="page-header__item--sub">
              <a class="page-header__link--sub">Карьера</a>
            </li>
            <li class="page-header__item--sub">
              <a class="page-header__link--sub">Пациентам</a>
            </li>
            <li class="page-header__item--sub">
              <a class="page-header__link--sub">Реквизиты</a>
            </li>
            <li class="page-header__item--sub">
              <a class="page-header__link--sub">Презентации</a>
            </li>
          </ul>
        </li>
        <li class="page-header__item">
          <a class="page-header__link">Наши клиенты</a>
        </li>
        <li class="page-header__item">
          <a class="page-header__link">Каталог</a>
        </li>
        <li class="page-header__item">
          <a class="page-header__link">Контакты</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

    @Component({
      computed: {
        isDesktop: {
          get() {
            return window.innerWidth > 768;
          },
        },
      },
    })
export default class PageHeader extends Vue {
      menuOpened = false;

      openMenu() {
        this.menuOpened = !this.menuOpened;
      }
    }
</script>

<style scoped lang="scss">
  .page-header {
    background-color: $blue;
    height: 60px;
    width: 100%;
    position: fixed;
    z-index: 5;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    &__wrapper {
      margin: 0 auto;
      height: 100%;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media(min-width: 768px) {
        width: 95%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      @media (min-width: 800px) {
        width: 90%;
      }
      @media (min-width: 900px) {
        width: 85%;
      }
    }
    &__mobile-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin: 0 auto;
      @media (min-width: 768px) {
        justify-content: flex-start;
     }
    }
    &__logo-link {
      height: 40px;
    }
    &__toggle {
      background-color: transparent;
      border: none;
      width: 30px;
      height: 30px;
      background-image: url("../assets/svg/menu.svg");
      background-position: center;
      outline: none;
      @media (min-width: 768px) {
        display: none;
      }
    }
    &__tel {
      padding: 0 20px;
      white-space: nowrap;
      @media (min-width: 768px) {
        margin-left: 25px;
      }
    }
    &__list {
      @include reset-list;
      background-color: $blue;
      width: 100%;
      @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        width: auto;
      }
      @media (max-width: 768px) {
        position: absolute;
        top: 60px;
      }

      &--sub {
        @include reset-list;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 58px;
        width: 170px;
        background-color: #f4f4f4;
        color: $blue;
        text-align: center;
        display: none;
      }
    }
    &__item--dropdown:hover &__list--sub {
      display: block;
    }
    &__item {
      padding: 15px 0 15px 15px;
      white-space: nowrap;
      @media (min-width: 768px) {
        padding: 20px 0 20px 20px;
        &:first-child {
          padding-left: 0;
        }
      }
      &--dropdown {
        position: relative;
      }
      &--sub {
        padding: 10px;
        border-bottom: 1px solid #a8d9f5;
        &:hover,
        &:focus {
          opacity: 0.5;
        }
      }
    }
    &__link {
      @include reset-link;
      color: #ffffff;
      &:hover,
      &:focus {
        opacity: 0.5;
      }
      &--dropdown {
        padding-right: 20px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 3px;
          right: -2px;
          width: 15px;
          height: 15px;
          background-image: url("../assets/svg/down-arrow.svg");
        }
      }
    }
  }

</style>
