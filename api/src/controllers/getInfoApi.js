const axios = require('axios')
const { Country, Activity } = require('../db')

const getApiInfo = async () => {
  try {
    const apiData = await axios('https://restcountries.com/v3/all')
    const countriesInfo = apiData.data.map((c) => {
      return {
        id: c.cca3,
        name: c.name.common,
        flag: c.flags[0] != null ? c.flags[0] : 'Flag not found',
        continent: c.continents[0] != null ? c.continents[0] : 'Continents not found',
        capital: c.capital != null ? c.capital : 'Capital not found',
        subregion: c.subregion != null ? c.subregion : 'Subregion not found',
        area: c.area != null ? c.area : 'Area not found',
        population: c.population != null ? c.population : 'Population  not found'
      }
    })
    
    const saveInDbOrCreate = () => {
      countriesInfo.map(i => {
        Country.findOrCreate({
          where: {
            name: i.name,
            id: i.id
          },
          defaults: {
            continent: i.continent,
            flag: i.flag,
            capital: i.capital,
            subregion: i.subregion,
            area: i.area,
            population: i.population
          }
        }).catch((err) => { console.log(err) });
      })
    }
    // console.log(countriesInfo)
    saveInDbOrCreate()
    return countriesInfo
  } catch {
    res.send('Error getting info to countries')
  }
}

const getDbInfo = async () => {
  await getApiInfo()
  const aux = await Country.findAll({
    include: {
      model: Activity,
      attributes: ['name', 'difficulty', 'duration', 'season'],
      through: {
        attributes: [],
      }
    }
  })
  return aux
}

const getActivities = async () => {
  const getAct = await Activity.findAll()
  // console.log(getAct)
  return getAct;
}




module.exports = { getDbInfo, getActivities };