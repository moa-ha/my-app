export interface ConsumablesData {
  name: string
  replaced: string
  tocheck: string
  atMileage: number
}

export interface Mileage {
  id: number
  data: ConsumablesData
}
export interface Consumable extends ConsumablesData {
  id: number
}
