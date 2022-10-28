const { Router } = require('express')
const router = Router()
const { Country , Activity } = require('../db')
const { getDbInfo } = require('../controllers/getInfoApi')

router.get('/', async (req, res) => {
  try {
    const { name } = req.query
    const info = await getDbInfo()
    if (name) {
      let searchByName = await info.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
      searchByName.length ?
        res.status(200).send(searchByName) :
        res.status(404).send('The country was not found!')
    }else{
      res.send(info)
    }
  } catch {
    res.status(404).send('Error in get Countries')
  }

})



module.exports = router;