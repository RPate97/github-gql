import { Client, createClient, FieldsSelection, Mutation, MutationGenqlSelection, Query, QueryGenqlSelection } from "./generated";
import { fetch } from "undici"; // or node-fetch

export type ConfigOptions = {
  accessToken: string
  url?: string
}

export class GithubGql implements Client {
  private client: Client

  constructor(opts: ConfigOptions) {
    const url = opts.url ?? 'https://api.github.com/graphql'
    const client = createClient({
      url,
      headers: {
        Authorization: `Bearer ${opts.accessToken}`
      }
    })
    this.client = client
  }

  query<R extends QueryGenqlSelection>(request: R & { __name?: string; }): Promise<FieldsSelection<Query, R>> {
    return this.client.query(request)
  }
  mutation<R extends MutationGenqlSelection>(request: R & { __name?: string; }): Promise<FieldsSelection<Mutation, R>> {
    return this.client.mutation(request)
  }
}