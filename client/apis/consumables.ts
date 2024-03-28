// figure out why it render all the functions twice - can see when console.log

import request from 'superagent'
import { Consumables, ConsumableData } from '../../models/consumables'

const rootUrl = '/api/v1'

export function getConsumables(): Promise<ConsumableData[]> {
  return request.get(rootUrl + '/consumables').then((res) => {
    return res.body.consumables
  })
}

export function addItem(): Promise<Consumables[]> {
  return request.post(rootUrl + '/consumables').then((res) => {
    return res.body.consumables
  })
}
