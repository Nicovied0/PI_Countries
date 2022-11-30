const { Router } = require('express')
const router = Router()
const { Country, Activity } = require('../db')
const { getActivities } = require('../controllers/getInfoApi')



router.get('/', async (req, res) => {
  try {
    const getActivity = await getActivities()
    res.status(200).send(getActivity)
    // console.log(req.params)
    // const id = 2
    // console.log(getActivity.find(e => e.dataValues.id === id), "soy yo")

  } catch {
    res.status(404).send('Error in get activities')
  }
})


router.post('/', async (req, res) => {
  const { name, difficulty, duration, season, countryId } = req.body
  const createActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    countryId
  })

  const countries = await Country.findAll({
    where: {
      name: countryId
    }
  })
  createActivity.addCountries(countries)
  res.status(200).send(createActivity)

})

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params
    const activities = await Activity.destroy({
      where: {
        id: id
      }
    })

    console.log(activities)
    res.send('se borro')
  } catch (error) {
    console.log(error)
  }
})

router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { season } = req.body
    if(!id || !season)res.send('manda datos gil')

    const activities = await Activity.update(
      { season: season },
      { where: { id: id } }
    )
    console.log(activities)
    res.send('Actualizado')
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
