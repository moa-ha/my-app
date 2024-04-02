import type { ConsumablesData, Consumable } from '../models/consumables.ts'
import consumablesData from './db/consumables-data.ts'
import * as fs from 'node:fs/promises'
import Path from 'node:path'
import url from 'node:url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

export async function getItem(): Promise<Consumable[]> {
  try {
    const json = await fs.readFile(
      Path.join(__dirname, './storage/consumables.json'),
      'utf-8',
    )
    const data = JSON.parse(json)
    return data
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return consumablesData.consumables
    }
    throw error
  }
}

export async function getItemById(id: number): Promise<Consumable | undefined> {
  try {
    const json = await fs.readFile(
      Path.join(__dirname, './storage/consumables.json'),
      'utf-8',
    )
    const data = JSON.parse(json)

    return data.find((item: Consumable) => item.id === id)
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return consumablesData.consumables.find(
        (item: Consumable) => item.id === id,
      )
    }
    throw error
  }
}

export async function addItem(data: ConsumablesData): Promise<void> {
  const items = await getItem()
  const id = items.length + 1

  const addedItem = { id, ...data }
  const addedList = [...items, addedItem]
  const result = JSON.stringify(addedList, null, 2)

  await fs.writeFile(
    Path.join(__dirname, './storage/consumables.json'),
    result,
    'utf-8',
  )
}

export async function deleteItem(id: number): Promise<void> {
  const items = await getItem()

  const addedItem = { id, ...data }
  const addedList = [...items, addedItem]
  const result = JSON.stringify(addedList, null, 2)

  await fs.writeFile(
    Path.join(__dirname, './storage/consumables.json'),
    result,
    'utf-8',
  )
}
