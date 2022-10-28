const { Router } = require('express')
const router = Router()
// const { Country , Activity } = require('../db')
const { getDbInfo  }  =require('../controllers/getInfoApi')

router.get('/', async (req,res) =>{
  const info = await getDbInfo()
  res.send(info)
})



module.exports = router;