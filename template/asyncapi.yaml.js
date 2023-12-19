import { File } from '@asyncapi/generator-react-sdk'


export default function ({originalAsyncAPI}) {
  return <File name={"asyncapi.yml"}>{originalAsyncAPI}</File>
}