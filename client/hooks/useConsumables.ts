// figure out why it render all the functions twice - can see when console.log
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import * as api from '../apis/consumables'
import { Consumable, ConsumablesData, Mileage } from '../../models/consumables'

export function useConsumables() {
  const query = useQuery({
    queryKey: ['consumables'],
    queryFn: api.getItems,
  })
  return {
    ...query,
  }
}

export function useGetItemById(id: number) {
  return useQuery({
    queryKey: ['consumable', id],
    queryFn: () => api.getItemById(id),
  })
}
export function useAddItem() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (item: ConsumablesData) => api.addItem(item),
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}
export function useDeleteItem() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => api.deleteItem(id),
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}

export function useEditMileage() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (input: Mileage) => api.editMileage(input.id, input.data),
    onSuccess: () => client.invalidateQueries({ queryKey: ['consumables'] }),
  })
}
