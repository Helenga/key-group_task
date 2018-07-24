import Api from '../../api'

const state = {
  articles: () => [],
  articlesNumber: 0
}

const getters = {
  articles: state => state.articles,
  articlesNumber: state => state.articlesNumber
}

const mutations = {
  UPDATE_ARTICLES(state, articles) {
    state.articles = articles
  },
  UPDATE_ARTICLES_NUMBER(state, articlesNumber) {
    state.articlesNumber = articlesNumber
  }
}

const actions = {
  loadArticles({commit}) {
    Api()
      .get('/articles')
      .then(response => {
        commit('UPDATE_ARTICLES', response.data.data);
        commit('UPDATE_ARTICLES_NUMBER', response.data.count);
      })
      .catch(error => window.console.error(error))
  }
}

export const articles = {
  state,
  getters,
  mutations,
  actions
}