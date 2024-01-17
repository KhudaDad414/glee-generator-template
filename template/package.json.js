import { File } from "@asyncapi/generator-react-sdk"

export default async function ({ asyncapi }) {
  const description = asyncapi.info().description()
  const response = await fetch("https://registry.npmjs.org/@asyncapi/glee")
  const data = await response.json()
  const latestGleeVersion = data["dist-tags"].latest
  return (
    <File name={"package.json"}>{`{
  "name": "${asyncapi.info().title().toLowerCase().replace(/ /g, "-")}",
  "version": "0.1.0",
  "description": "${description ? asyncapi.info().description().split("\n")[0] : ""}",
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
    "@asyncapi/glee": "^${latestGleeVersion}"
  },
  "devDependencies": {
    "@types/node": "^20.5.9"
  }
}`}</File>
  )
}
