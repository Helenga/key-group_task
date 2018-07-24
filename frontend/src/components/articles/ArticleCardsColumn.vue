<template>
  <section class="article-column">
    <div v-for="article in articles" :key="article.id">
      <article-card :article="article"></article-card>
    </div>
  </section>
</template>

<script>
import ArticleCard from './ArticleCard.vue'
import store from '../../store/index'
import {mapGetters} from 'vuex'

export default {
  components: {
    ArticleCard
  },
  computed: {
    ...mapGetters(['articles'])
  },
  created() {
    store.dispatch('loadArticles')
  }
}
</script>

<style scoped>
.article-column {
  display: flex;
  flex-direction: column;
}
</style>
