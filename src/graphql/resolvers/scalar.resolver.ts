import {
  BigIntResolver,
  ObjectIDResolver,
  DateTimeResolver,
  VoidResolver,
} from 'graphql-scalars'
import {GraphQLUpload} from 'graphql-upload-ts'

import {Resolvers} from '../generated-types'

const scalarResolver: Resolvers = {
  BigInt: BigIntResolver,
  ObjectId: ObjectIDResolver,
  DateTime: DateTimeResolver,
  Void: VoidResolver,
  Upload: GraphQLUpload,
}

export default scalarResolver
