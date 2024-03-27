import type { Consumables, ConsumableData } from '../models/consumables.ts'
import consumablesData from './db/consumables-data.ts'
import * as fs from 'node:fs/promises'

interface Data {
  consumables: ConsumableData[]
}

export async function getConsumable(): Promise<Data> {
  try {
    const json = await fs.readFile('./db/consumables-data.ts', 'utf-8')
    const data = JSON.parse(json)
    return data
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return consumablesData
    }
    throw error
  }
}
