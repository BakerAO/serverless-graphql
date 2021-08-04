import { ApolloServer } from 'apollo-server-lambda'
import types from './types'
import resolvers from './resolvers'

const server = new ApolloServer({ types, resolvers })

exports.graphqlHandler = server.createHandler()
