import ArticleCardsColumn from '../components/articles/ArticleCardsColumn.vue'

export const routes = [
  {
    path: '/articles',
    name: 'articles',
    component: ArticleCardsColumn
  },
  {
    path: '*',
    redirect: '/articles'
  }
]