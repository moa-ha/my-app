// figure out why it render all the functions twice - can see when console.log
import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'

import * as api from '../apis/consumables'
import { ConsumableData, Consumables } from '../../models/consumables'

export function useConsumables() {
  const query = useQuery({
    queryKey: ['consumables'],
    queryFn: api.getConsumables,
  })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useAddItem() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (item: ConsumableData) => api.addItem(item),
    // mutationFn: async ({ item }: { item: ConsumableData }) => {
    //   const res = await request.post('/api/v1/consumables').send(item)
    //   return res.body as { id: number }
    // },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['items'] })
    },
  })
}
