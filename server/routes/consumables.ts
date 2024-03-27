import express from 'express'
import * as consumable from '../consumables'
const router = express.Router()

router.get('/', async (req, res) => {
  const data = await consumable.getConsumable()
  res.json(data)
})

export default router
