<template>
  <div class="article">
    <img src="../../assets/default_image.png" class="article__image"/>
    <div class="article__info">
      <h2 class="article__info_title"> {{article.title}} </h2>
      <div class="article__info_description"> {{article.description}} </div>
      <div class="article__info_website">
        More about &quot;<a :href="article.website"> {{article.title}} </a>&quot;...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      required: true,
      default: () => {},
      type: Object
    }
  }
}
</script>

<style scoped>
  .article {
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: row;
    border: solid gray 2px;
    border-radius: 20px 5px;
    box-shadow: -10px 5px 5px gray;
    margin-bottom: 20px; 
  }

  .article__image {
    height: 100%;
    width: 25%;
    border: solid grey 1px;
    margin: 20px; 
  }

  .article__info {
    max-width: 75%;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
  }

  .article__info_title {
    flex-grow: 0;
  }

  .article__info_description {
    flex-grow: 1;
  }

  .article__info_website {
    flex-grow: 0;
    margin-bottom: 2px;
  }

</style>
