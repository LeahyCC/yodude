/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment StarshipItem on Starship {\n    name\n    id\n    model\n    starshipClass\n    length\n    maxAtmospheringSpeed\n  }\n": types.StarshipItemFragmentDoc,
    "\n  query allStarshipsQuery {\n    allStarships {\n      starships {\n        ...StarshipItem\n      }\n    }\n  }\n": types.AllStarshipsQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment StarshipItem on Starship {\n    name\n    id\n    model\n    starshipClass\n    length\n    maxAtmospheringSpeed\n  }\n"): (typeof documents)["\n  fragment StarshipItem on Starship {\n    name\n    id\n    model\n    starshipClass\n    length\n    maxAtmospheringSpeed\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allStarshipsQuery {\n    allStarships {\n      starships {\n        ...StarshipItem\n      }\n    }\n  }\n"): (typeof documents)["\n  query allStarshipsQuery {\n    allStarships {\n      starships {\n        ...StarshipItem\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;