// figure out why it render all the functions twice - can see when console.log

import request from 'superagent'
import { Consumable, ConsumablesData } from '../../models/consumables'

const rootUrl = '/api/v1/consumables'

export function getItems(): Promise<Consumable[]> {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function getItemById(id: number) {
  const url = rootUrl + `/${id}`
  return request.get(url).then((res) => {
    return res.body
  })
}

export async function addItem(item: ConsumablesData) {
  return await request.patch(rootUrl).send(item)
}

export async function deleteItem(id: number) {
  const url = rootUrl + `/${id}`
  return await request.delete(url)
}

export async function editMileage(id: number, data: ConsumablesData) {
  const url = rootUrl + `/${id}`
  return await request.patch(url).send(data)
}
