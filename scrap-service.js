const axios = require('axios');
const qs = require('qs');

const findVideoId = async (query) => {
  const urlEncodedQuery = qs.stringify({
    search_query: query
  }) 
  return axios.get(`https://www.youtube.com/results?${urlEncodedQuery}`)
    .then(function (response) {
      // handle success
      // "label":"Foo Fighters - The Pretender by Foo Fighters 12 years ago 4 minutes, 31 seconds 489,744,833 views"
      const pattern = /"videoId":"(.*?)"/g
      const matches = Array.from(response.data.matchAll(pattern))
      const [_, videoId] = matches[0]
  
      return videoId
    })
}


module.exports = {
  findVideoId
}
