import gql from 'graphql-tag';

export const SEARCH_FOR_USERS = gql ` 
    query search_for_users($search_term: String!){
        rateLimit{
            cost
            remaining
            resetAt
        }
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
            commitComments(last:3){
                totalCount,
                edges{
                    node{
                        body,position,publishedAt,repository{name},url,
                    }
                }
            }
            company
            followers(last:2){
                totalCount
            }
            following(last:2){
                totalCount
            }
            isCampusExpert
            issueComments(last:2){
                totalCount
            }
            issues(last:2){
                totalCount
            }
            location
            name
            organizations(last:5){
                totalCount
            }
            pinnedItems(last:3){
                totalCount,
                edges{
                    node{
                        ... on Repository {
                            description,forkCount,nameWithOwner,name,primaryLanguage{name,color,id},
                            url,stargazerCount,openGraphImageUrl,licenseInfo{nickname}
                        }
                    }
                }
            }
            projects(last:5){
                totalCount
            }
            pullRequests(last:3){
                totalCount,
                edges{
                    node{
                        title,state,number,closedAt,permalink,publishedAt
                    }
                }
            }
            repositories(last:6){
                totalCount
                totalDiskUsage
                edges{
                    node{
                        id,nameWithOwner,licenseInfo{nickname},url,primaryLanguage{name,color},
                        updatedAt,openGraphImageUrl,stargazerCount
                    }
                } 
            }
            repositoriesContributedTo(last:5){
                totalCount
            }
            starredRepositories(last:5){
                totalCount
            }
            status{
                emoji
                id
            }
            twitterUsername
            watching(last:2){
                totalCount
            }
        }
    }`;

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
                        mentionableUsers(last:2){
                            totalCount,
                            edges{node{
                                login,name
                            }}
                        },
                        assignableUsers(last:2){
                            totalCount,
                            edges{node{
                                login,name
                            }}
                        },
                        commitComments(last:5) {
                            totalCount,
                            edges {
                                node {
                                    author {login},
                                    body,createdAt,path,
                                    editor {login},
                                }
                            }
                        },
                        forks(last:2) {
                            totalCount,totalDiskUsage,
                            edges {
                                node {
                                    nameWithOwner,description,forkCount,createdAt,homepageUrl,
                                    stargazerCount,licenseInfo{nickname}
                                }
                            }
                        },
                        issues(last:2) {
                            totalCount,
                            edges{
                                node{
                                title,url,number,state
                                }
                            }
                        }, #orderBy: LabelOrder = {field: CREATED_AT, direction: ASC}
                        labels(last:3) {
                            totalCount,
                            edges{
                                node{
                                    name,createdAt,description,updatedAt,resourcePath,
                                }   
                            }
                        },
                        languages(last:10) {
                            totalCount,totalSize,
                            edges{
                                node{
                                    name,color
                                }
                            }
                        },
                        pullRequests(last:2) {
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
                        packages(last:2){
                            totalCount,
                            edges{
                                node{
                                    name,packageType,statistics{downloadsTotalCount}
                                }
                            }
                        },
                        watchers(last:2){
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
            issues(last: 20, states: [OPEN], orderBy: {field: CREATED_AT, direction: DESC}) {
                nodes {
                    title,
                    bodyHTML,
                    createdAt
                    comments(last:20){
                        nodes {
                            bodyHTML
                        }
                    }
                }
            }
        }
    }
`;