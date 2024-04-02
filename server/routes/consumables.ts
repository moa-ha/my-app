import express from 'express'
import * as consumable from '../consumables'
const router = express.Router()

router.get('/', async (req, res) => {
  const data = await consumable.getItem()
  res.json(data)
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const data = await consumable.getItemById(id)
  res.json(data)
})

router.patch('/', async (req, res) => {
  try {
    const newItem = req.body
    const data = await consumable.addItem(newItem)
    res.json(data)
  } catch (e) {
    res.sendStatus(500)
  }
})

// router.delete('/', async (req, res) => {
//   try{
//     const item = req.body
//   }catch (e) {
//     res.sendStatus(500)
//   }
// })

export default router
