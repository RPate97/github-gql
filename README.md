# Github-gql
An end-to-end type-safe JavaScript client for the GitHub v4 GraphQL API.

## Features
- End-to-end type safe
- Functional intellisense for both input queries and response data
- No requirement for any external type generation process
- Zero dependencies

## Installation
```bash
npm install github-gql
```

## Usage
```typescript
import { GithubGql } from 'github-gql'

const example = async (): Promise<void> => {
  // Create the client with a personal or installation access token
  const client = new GithubGql({
    accessToken: process.env.GITHUB_ACCESS_TOKEN!
  })

  // Call the query endpoint
  const result = await client.query({
    // Specify your graphql query with complete type safety
    repository: {
      __args: {
        name: 'github-gql',
        owner: 'rpate97'
      },
      id: true,
      nameWithOwner: true,
      issues: {
        __args: {
          first: 10
        },
        nodes: {
          title: true,
          body: true,
        },
      }
    }
  })
  
  // The result will be correctly typed based on your input query
  console.log(result)
}

example()
```

## Why does this exist? 
I found the [official client recommendation from GitHub](https://github.com/octokit/graphql-schema?tab=readme-ov-file#schema-as-types) to be difficult to deal with. It is not type safe and requires inline
gql queries. 

Typically when building my own GraphQL APIs for internal consumption, I'll achieve end-to-end type safety by using a code generation tool such as [GraphQL Codegen](https://github.com/dotansimha/graphql-code-generator) combined with a compatible GraphQL client such as [Apollo Client](https://www.apollographql.com/docs/react/). Setting this sort of thing up just to interact with an external API from my GitHub bot seems like overkill to me. I believe this should be maintained in a separate package and available to others. 

So I decided to create this library and release it for the benefit of anyone else working with the GitHub v4 GraphQL API. Enjoy.

## Credit
This client is largely automatically generated with the help of [GenQL](https://github.com/remorses/genql), give them a star to show your appreciation. While you're at it, make sure you star this repo too.

## License
All code is provided under the MIT license.