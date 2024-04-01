// figure out why it render all the functions twice - can see when console.log
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import * as api from '../apis/consumables'
import { ConsumablesData, Consumables } from '../../models/consumables'

export function useConsumables() {
  const query = useQuery({
    queryKey: ['consumables'],
    queryFn: api.getItems,
  })
  return {
    ...query,
  }
}

export function useAddItem() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (item: ConsumablesData) => api.addItem(item),
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}
