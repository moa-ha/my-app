// figure out why it render all the functions twice - can see when console.log

import request from 'superagent'
import { Consumable, ConsumablesData } from '../../models/consumables'

const rootUrl = '/api/v1/consumables'

export function getItems(): Promise<ConsumablesData[]> {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export async function addItem(item: ConsumablesData) {
  return await request.patch(rootUrl).send(item)
}
