// figure out why it render all the functions twice - can see when console.log

import request from 'superagent'
import { Consumable, ConsumablesData } from '../../models/consumables'

const rootUrl = '/api/v1/consumables'

export function getConsumables(): Promise<ConsumablesData[]> {
  return request.get(rootUrl).then((res) => {
    return res.body.consumables
  })
}

export function addItem(item: ConsumablesData): Promise<Consumable> {
  // console.log(item)
  return request.post(rootUrl).send(item)
}
