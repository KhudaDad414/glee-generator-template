import { File } from '@asyncapi/generator-react-sdk'


export default function ({ asyncapi }) {
  return asyncapi.servers().all().filter(server => server.security().length > 0).map(server => <File name={server.id() + '.ts'}>// Code Here</File>)
}