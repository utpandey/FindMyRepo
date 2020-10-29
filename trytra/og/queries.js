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
            commitComments(first:10){
                totalCount
            }
            company
            followers(first:10){
                totalCount
            }
            following(first:10){
                totalCount
            }
            isCampusExpert
            issueComments(first:20){
                totalCount
            }
            issues(first:20){
                totalCount
            }
            location
            name
            organizations(first:5){
                totalCount
            }
            pinnedItems(first:10){
                totalCount
            }
            projects(first:5){
                totalCount
            }
            pullRequests(first:20){
                totalCount
            }
            repositories(first:20){
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
            watching(first:10){
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
        search(query: $search_term, type: REPOSITORY, first: 20) {
            repositoryCount,
            
            edges {
                node {
                    ... on Repository {
                        name,
                        
                        owner {
                            login  
                        },
                        stargazers {
                            totalCount
                        },
                        descriptionHTML,
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