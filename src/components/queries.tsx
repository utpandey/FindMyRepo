import gql from 'graphql-tag';

export const SEARCH_FOR_USERS = gql ` 
    query search_for_users($search_term: String!){
        user(login:$search_term){
            avatarUrl(size: 480)
            bio
            createdAt
            email
            login
            bioHTML
            resourcePath
            websiteUrl
            url
            commitComments(first:2){
                totalCount
            }
            company
            followers(first:2){
                totalCount
            }
            following(first:2){
                totalCount
            }
            isCampusExpert
            issueComments(first:2){
                totalCount
            }
            issues(first:2){
                totalCount
            }
            location
            name
            organizations(first:5){
                totalCount
            }
            pinnedItems(first:2){
                totalCount,
            }
            projects(first:5){
                totalCount
            }
            pullRequests(first:2){
                totalCount,
                edges{
                    node{
                        body,title,state,number
                    }
                }
            }
            repositories(first:2){
                totalCount
                totalDiskUsage
                edges{
                    node{
                        id
                        name
                    }
                } 
            }
            repositoriesContributedTo(first:5){
                totalCount
            }
            starredRepositories(first:5){
                totalCount
            }
            status{
                emoji
                id
            }
            twitterUsername
            watching(first:2){
                totalCount
            }
        }
    }`;







// # repository(owner:$search_term,name:$search_term) {
// #     owner{
// #         id
// #     },
// #     issues(last:20, states:CLOSED) {
// #     edges {
// #         node {
// #         title
// #         url
// #         labels(first:5) {
// #             edges {
// #             node {
// #                 name
// #             }
// #             }
// #         }
// #         }
// #         }
// #     }
// # }



export const SEARCH_FOR_REPOS = gql `
    query($search_term: String!) {
        rateLimit{
            cost
            remaining
            resetAt
        }
        search(query: $search_term, type: REPOSITORY, first: 10) {
            repositoryCount,
            
            edges {
                node {
                    ... on Repository {
                        name,
#                         url,
#                         forkCount,
                        openGraphImageUrl,
#                         nameWithOwner,
#                         mirrorUrl,
#                         licenseInfo {
#                             body,
#                             description,
#                             nickname,
#                             name,
#                             spdxId,
#                         },
#                         primaryLanguage {
#                             name,
#                             color
#                         },
#                         pullRequests(first:2)
#                         {
#                             edges {
#                                 node {
#                                     additions,
#                                     body
#                                     closedAt,
#                                     # editor,
#                                     # hovercard(includeNotificationContexts:true)
#                                 }
#                             }
#                         },
                        owner {
                            login  
                        },
                        stargazers {
                            totalCount
                        },
                        description,
# # /////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        # collaborators(first:2) {
                        #     totalCount,
                        #     # edges {
                        #     #     node {
                        #     #         login,name,avatarUrl(size:1080)
                        #     #     }
                        #     # }
                        # },
                        mentionableUsers(first:2){
                            totalCount,
                            edges{node{
                                login,name
                            }}
                        },
                        assignableUsers(first:2){
                            totalCount,
                            edges{node{
                                login,name
                            }}
                        },
                        commitComments(first:5) {
                            totalCount,
                            edges {
                                node {
                                    author {login},
                                    body,createdAt,path,
                                    editor {login},
                                }
                            }
                        },
                        forks(first:2) {
                            totalCount,totalDiskUsage,
                            edges {
                                node {
                                    nameWithOwner,description,forkCount,createdAt,homepageUrl,
                                    stargazerCount,licenseInfo{nickname}
                                }
                            }
                        },
                        issues(first:2) {
                            totalCount,
                            edges{
                                node{
                                title,url,number,state
                                }
                            }
                        }, #orderBy: LabelOrder = {field: CREATED_AT, direction: ASC}
                        labels(first:3) {
                            totalCount,
                            edges{
                                node{
                                    name,createdAt,description,updatedAt,resourcePath,
                                }   
                            }
                        },
                        languages(first:10) {
                            totalCount,totalSize,
                            edges{
                                node{
                                    name,color
                                }
                            }
                        },
                        pullRequests(first:2) {
                            totalCount,
                            edges {
                                node{
                                    title,number,permalink,additions,
                                    body,state,createdAt,deletions,
                                    publishedAt,author{login},headRepository{name},
                                    headRepositoryOwner{login}
                                }
                            }
                        },
                        packages(first:2){
                            totalCount,
                            edges{
                                node{
                                    name,packageType,statistics{downloadsTotalCount}
                                }
                            }
                        },
                        watchers(first:2){
                            totalCount,
                            edges{
                                node{
                                    login,url,location
                                }
                            }
                        },
                }
            }
        }
        }
    }
    
`;

export const GET_REPO_ISSUES = gql `
    query($name: String!, $owner: String!) {
        repository(name: $name, owner: $owner) {
            description
            url
            homepageUrl
            issues(first: 20, states: [OPEN], orderBy: {field: CREATED_AT, direction: DESC}) {
                nodes {
                    title,
                    bodyHTML,
                    createdAt
                    comments(first:20){
                        nodes {
                            bodyHTML
                        }
                    }
                }
            }
        }
    }
`;