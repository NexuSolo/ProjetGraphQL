import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/schema.ts',
  generates: {
    './src/graphqlgenerate/types.ts': {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: './context#Context',
        mappers: {
        }
      },
    }
  }
}
export default config