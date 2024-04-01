import express from 'express'
import * as consumable from '../consumables'
const router = express.Router()

router.get('/', async (req, res) => {
  const data = await consumable.getItem()
  res.json(data)
})

router.post('/', async (req, res) => {
  try {
    const newItem = req.body
    const data = await consumable.addItem(newItem)
    res.json(data)
  } catch (e) {
    res.sendStatus(500)
  }
})

export default router
