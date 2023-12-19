import { File } from '@asyncapi/generator-react-sdk'


export default function ({asyncapi}) {
  return <File name={"package.json"}>{
    `{
  "name": "${asyncapi.info().title().toLowerCase().replace(/ /g, "-")}",
  "version": "0.1.0",
  "description": "${asyncapi.info().description().split('\n')[0]}...",
  "type": "module",
  "engines": {
    "node": ">=14.15.1"
  },
  "scripts": {
    "dev": "glee dev",
    "start": "glee start"
  },
  "keywords": [
    "glee"
  ],
  "dependencies": {
    "@asyncapi/glee": "^0.32.18"
  },
  "devDependencies": {
    "@types/node": "^20.5.9"
  }
}`
  }</File>
}