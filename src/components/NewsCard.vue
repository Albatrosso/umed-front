<template>
	<div>
		<img class="news__img"
				 :src="require(`../assets/img/${newsCard.id}.jpg`)" alt="Санкт-Петербург">
		<h2 class="news__title">{{ newsCard.title }}</h2>
		<time class="news__time" :datetime="newsCard.dateTime">{{newsCard.date}}</time>
		<p class="news__subtitle">
			{{newsCard.text}}
		</p>
	</div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class NewsCard extends Vue{
  @Prop (Object) newsCard;

};
</script>

<style scoped lang="scss">
	.news {
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
	}
</style>
