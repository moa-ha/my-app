import * as hook from '../hooks/useConsumables'

export default function DeleteButton({ id }: { id: number }) {
  const delItem = hook.useDeleteItem()
  const handleDelete = (e: any) => {
    delItem.mutate(e.target.id)
  }
  return (
    <button id={id} onClick={handleDelete} aria-label="delete button">
      Delete
    </button>
  )
}
