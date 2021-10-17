/**
 * 
 * @author Mustafiz Kaifee <https://github.com/Mustafiz04>
 */
const quotes = require('../data/quotes.json')

// utility to generate a random number
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const index = randomInt(0, quotes.length) // random index to be used

const getRandomQuote = () => quotes[index].text

const getQuote = (options) => {
  !options && (options = { author: true }); // default option
  return {
    text: quotes[index].text,
    ...(options && options.author ? { author: quotes[index].from } : {})
  }
}

module.exports = {
  getRandomQuote,
  getQuote
}