import * as hook from '../hooks/useConsumables'

export default function DeleteButton({ id }: { id: number }) {
  const delItem = hook.useDeleteItem()
  const handleDelete = (e: any) => {
    delItem.mutate(e.target.id)
  }
  return (
    <button
      id={String(id)}
      onClick={handleDelete}
      className="button"
      aria-label="delete button"
    >
      Delete
    </button>
  )
}
