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

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const item = await consumable.deleteItem(id)
    res.json(item)
  } catch (e) {
    res.sendStatus(500)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const updatedItem = await consumable.editMileage(id, req.body)
    res.json(updatedItem)
  } catch (e) {
    res.sendStatus(500)
  }
})

export default router
