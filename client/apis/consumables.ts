import request from 'superagent'

const rootUrl = '/api/v1'

export function getConsumables(): Promise<string[]> {
  return request.get(rootUrl + '/consumables').then((res) => {
    return res.body.consumables
  })
}
