import type { ConsumablesData, Consumable } from '../models/consumables.ts'
import consumablesData from './db/consumables-data.ts'
import * as fs from 'node:fs/promises'

export async function getItem(): Promise<Consumable[]> {
  try {
    const json = await fs.readFile('./storage/consumables.json', 'utf-8')

    const data = JSON.parse(json)
    return data
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return consumablesData.consumables
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

  // await fs.writeFile('./storage/consumables.json', result)
  await fs.writeFile('./db/consumables-data.ts', result)
}
