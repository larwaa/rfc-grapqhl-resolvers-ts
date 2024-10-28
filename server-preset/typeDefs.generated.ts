import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"SchemaExtension","directives":[{"kind":"Directive","name":{"kind":"Name","value":"link"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"StringValue","value":"https://specs.apollo.dev/federation/v2.3","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"import"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"@key","block":false},{"kind":"StringValue","value":"@requires","block":false},{"kind":"StringValue","value":"@external","block":false}]}}]}],"operationTypes":[{"kind":"OperationTypeDefinition","type":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"operation":"query"}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Food"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"meals"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Meal"}}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Meal"},"interfaces":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"key"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fields"},"value":{"kind":"StringValue","value":"id","block":false}}]}],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"diet"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"external"},"arguments":[]}]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"foods"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Food"}}}}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"requires"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fields"},"value":{"kind":"StringValue","value":"diet","block":false}}]}]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"related"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Meal"}}}}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"requires"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fields"},"value":{"kind":"StringValue","value":"diet","block":false}}]}]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"getFoods"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Food"}}}}},"directives":[]}]}]} as unknown as DocumentNode