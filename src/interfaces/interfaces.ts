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

export interface IRepoObject {
  repo: any,
  i : any
}

export interface IRepository {
  // repo: {
  //   node:
  //   {
  //     name: string, description: string, openGraphImageUrl: string,
  //     owner: { login: string }, stargazers: { totalCount: { totalStarCount: number } }
  //   }
  // }
  repo : any
}

export interface IStateType {
  from: { pathname: string },
  repo: any
}

export interface IRepoCard {
  node : any,
  name: any,
  description : any,
  openGraphImageUrl : any,
  owner : any,
  stargazers : any,
}

