import { File, Text } from '@asyncapi/generator-react-sdk'


export default async function ({ asyncapi }) {
  return asyncapi.operations().filterByReceive().map(operation => (<File name={operation.id() + '.ts'}>
  <Text indent={0} newLines={2}>{'import { GleeFunction } from "@asyncapi/glee"'}</Text>
  <Text indent={0} newLines={1}>{`const ${operation.id()}: GleeFunction = async ({ payload }) => {`}</Text>
  <Text indent={1} newLines={1}>{'// Your business logic goes here...'}</Text>
  <Text indent={0} newLines={1}>{'}'}</Text>
  <Text indent={0} newLines={1}>{`export default ${operation.id()}`}</Text>
  </File>))
}