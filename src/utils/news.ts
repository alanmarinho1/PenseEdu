const NewsAPI = require('newsapi');

export const newsapi = new NewsAPI('5567112c098942f597c6b197fb8cc0f7');


// newsapi.v2.everything({
//     q: '"pensamento computacional"OR"educação digital"',

// }).then(response => {
//     console.log(response)
// })