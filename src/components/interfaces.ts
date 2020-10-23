import { type } from "os";

export type IBaseProps = {
  addBase:any
  base: string,
  toppings: string[],
  setShowModal:any
}

export type IPizza = {
  addTopping: any,
  base: string,
  toppings: string[]
}

export type IModal = {
  showModal: boolean,
  setShowModal: any
}