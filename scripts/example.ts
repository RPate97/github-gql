import { GithubGql } from '../dist/index'

const example = async (): Promise<void> => {
  const client = new GithubGql({
    accessToken: process.env.GITHUB_ACCESS_TOKEN!
  })

  const result = await client.query({
    repository: {
      __args: {
        name: 'token.js',
        owner: 'token-js'
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
  
  console.log(result)
}

example()