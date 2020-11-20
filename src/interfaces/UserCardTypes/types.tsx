export interface ICommitItem {
  value: {
    node:
    {
      body: string,
      position: number,
      publishedAt: Date,
      repository: {name: string},
      url: string
    }
  }
}

export interface IPinItem {
  value: {
    node:
    {
      description: string,
      forkCount: number,
      nameWithOwner: string,
      openGraphImageUrl: string,
      stargazerCount: number,
      url: string
    }
  }
}

export interface IPullItem {
  key: number,
  value: {
    node:
    {
      title: string,
      state: string,
      closedAt: string,
      permalink: string,
      publishedAt:string
    }
  },
  
}

export interface IRepoItem {
  key: number,
  value: {
    node:
    {
      id: number,
      nameWithOwner: string,
      url: string,
      updatedAt: string,
      openGraphImageUrl: string,
      stargazerCount:number
    }
  },
}

export interface IIndex {
  data: {
    pullRequests: any,
    repositories: any,
    pinnedItems: any,
    commitComments: any
  }
}