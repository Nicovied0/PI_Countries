const { Router } = require('express')
const router = Router()
// const { Country , Activity } = require('../db')
const { getApiInfo }  =require('../controllers/getInfoApi')

router.get('/', async (req,res) =>{
  const info = await getApiInfo()
  res.send(info)
})



module.exports = router;