import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: ['src/projects/GraphQL/**/*.{tsx,ts,js,jsx}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/projects/GraphQL/gql/': {
      preset: 'client',
    },
  },
}

export default config
