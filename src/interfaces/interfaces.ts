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
  isOpen: any,
  
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
  label: any,
  padding: any
}

export interface IUser {
  searchTerm: any
}

export interface IAbout {
  company: string,
  bio: string,
  following: any,
  followers: any,
  issues: any,
  location: string,
  name: string,
  createdAt: any,
  email: any,
  weburl: any
}

 export interface IProfile {
  commitComments: any,
  issueComments: any,
  pinnedItems: any,
  pullRequests: any,
  repositories: any,
  repositoriesContributedTo: any,
  starredRepositories: any,
  watching: any,
 }