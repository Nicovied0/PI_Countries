const axios = require('axios')

const getApiInfo = async () => {
  const apiData = await axios('https://restcountries.com/v3/all')
  const countriesInfo = apiData.data.map(c => {
    return {
      id: c.cca3,
      name: c.name.common,
      flag: c.flags[0],
      continent: c.continents[0],
      capital: c.capital != null ? c.capital : 'No se encontro capital',
      subregion: c.subregion,
      area: c.area,
      population: c.population
    }
  })
  // console.log(countriesInfo)
  return countriesInfo
}



module.exports = { getApiInfo };