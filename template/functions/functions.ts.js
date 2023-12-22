import { File, Text } from '@asyncapi/generator-react-sdk'


export default async function ({ asyncapi }) {
  return asyncapi.operations().filterByReceive().map(operation => (<File name={operation.id() + '.ts'}>
  <Text indent={0} newLines={2}>{'import { GleeFunction } from "@asyncapi/glee"'}</Text>
  <Text indent={0} newLines={1}>{`const ${operation.id()}: GleeFunction = async ({ payload }) => {`}</Text>
  <Text indent={1} newLines={1}>{'// You can add your implementation logic here.'}</Text>
  <Text indent={1} newLines={1}>{`throw new Error("Function '${operation.id()}' is not yet implemented.")`}</Text>
  <Text indent={0} newLines={1}>{'}'}</Text>
  <Text indent={0} newLines={1}>{`export default ${operation.id()}`}</Text>
  </File>))
}