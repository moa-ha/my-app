import { useCallback } from 'react'
import { useAddItem } from '../hooks/useConsumables.ts'
import AddItemForm from '../components/AddItemForm.tsx'
import { ConsumablesData } from '../../models/consumables.ts'
import { useNavigate } from 'react-router-dom'

export default function NewItem() {
  const newItem = useAddItem()
  const navigate = useNavigate()

  const handleNew = useCallback(
    async (item: Partial<ConsumablesData>) => {
      await newItem.mutateAsync({ item })
      navigate('/')
    },
    [newItem, navigate],
  )
  return <AddItemForm onAdd={handleNew} />
}
