import { File } from '@asyncapi/generator-react-sdk'


export default function ({asyncapi}) {
  return <File name={".gitignore"}>{
    `node_modules
.glee`
  }</File>
}