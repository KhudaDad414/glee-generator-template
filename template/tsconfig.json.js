import { File, Text } from "@asyncapi/generator-react-sdk"

export default async function ({ asyncapi }) {
  return (
    <File name={"tsconfig.json"}>
      <Text indent={0} newLines={1}>{`{`}</Text>
      <Text indent={2} newLines={1}>{`"compilerOptions": {`}</Text>
      <Text indent={4} newLines={1}>{`"allowJs": true,`}</Text>
      <Text indent={4} newLines={1}>{`"target": "es6",`}</Text>
      <Text indent={4} newLines={1}>{`"esModuleInterop": true,`}</Text>
      <Text indent={4} newLines={1}>{`"skipLibCheck": true,`}</Text>
      <Text indent={4} newLines={1}>{`"moduleResolution": "node",`}</Text>
      <Text indent={4} newLines={1}>{`"module": "ES2022"`}</Text>
      <Text indent={2} newLines={1}>{`}`}</Text>
      <Text indent={0} newLines={0}>{`}`}</Text>
    </File>
  )
}
