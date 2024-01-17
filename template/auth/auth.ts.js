import { File, Text } from '@asyncapi/generator-react-sdk'


export default function ({ asyncapi }) {
  const serversWithAuth = asyncapi.servers().all().filter(server => server.security().length > 0)
  return serversWithAuth.map(server =>{
    const clients = asyncapi.extensions().get('x-remoteServers')
    if(clients && clients[server.id()]){
      return <File name={server.id() + '.ts'}>
        <Text indent={0} newLines={1}>{`export async function serverAuth() {`}</Text>
        <Text indent={1} newLines={1}>{'// You can add your authentication logic here.'}</Text>
        <Text indent={1} newLines={1}>{`throw new Error("Function 'auth/${server.id()}' is not yet implemented.")`}</Text>
        <Text indent={0} newLines={1}>{'}'}</Text>
      </File>
    }
    return <File name={server.id() + '.ts'}>
    <Text indent={0} newLines={1}>{`export async function clientAuth() {`}</Text>
    <Text indent={1} newLines={1}>{'// You can add your authentication logic here.'}</Text>
    <Text indent={1} newLines={1}>{`throw new Error("Function 'auth/${server.id()}' is not yet implemented.")`}</Text>
    <Text indent={0} newLines={1}>{'}'}</Text>
  </File>
  
  })
}
