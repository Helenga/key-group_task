'use strict'

const faker = require('faker')
const randomInt = require('../helpers/random-int')

class Article {
  constructor() {
    this.id = faker.random.number(),
    this.title = faker.name.title(),
    this.website = faker.internet.url(),
    this.description = faker.lorem.paragraph(),
    this.image = faker.image.image()
  }
}

const articlesNumber = randomInt(0, 30)

let articles = {
  data: [],
  count: articlesNumber
};

for (let i = 0; i < articlesNumber; i++) {
  articles.data.push(new Article())
}

module.exports = articles