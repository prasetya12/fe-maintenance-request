'use client'
import { GraphQLClient } from "graphql-request";
import { loadEnvConfig } from '@next/env'

const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URI

const graphqlClient = new GraphQLClient(`${graphqlUrl}/graphql`);

export default graphqlClient;