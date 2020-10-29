import { type } from "os";

export interface IBaseProps  {
  addBase:any
  base: string,
  toppings: string[],
  setShowModal:any
}

export interface IPizza  {
  addTopping: any,
  base: string,
  toppings: string[]
}

export interface IModal  {
  showModal: boolean,
  setShowModal: any
}

export interface ISearch {
  onClick: any,
  isOpen: any
}

export interface IExpand {
  SearchBox: any;
}

export interface ISearchBar {
  value: any,
  onChange: any,
  id: number
  locked: boolean,
  active: boolean,
  label: any
}

export interface IUser {
  searchTerm: any
}