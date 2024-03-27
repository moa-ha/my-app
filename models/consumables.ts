export interface Consumables {
  name: string
  replaced: string
  tocheck: string
}

export interface ConsumableData extends Consumables {
  id: number
}
