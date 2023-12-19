import { File } from '@asyncapi/generator-react-sdk'


export default function ({ asyncapi }) {
  return asyncapi.operations().filterByReceive().map(operation => (<File name={operation.id() + '.ts'}>//Code Here</File>))
}