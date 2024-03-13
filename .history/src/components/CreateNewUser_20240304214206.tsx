import { Button, Card, TextInput, Title } from '@tremor/react'
export const CreateNewUser = () => {
  return (
    <Card className='mt-4'>
      <Title>Create new user</Title>
      <form className=''>
        <TextInput placeholder='Aqui el nombre' />
        <TextInput placeholder='Aqui el email' />
        <TextInput placeholder='Aqui el usuario github' />
        <div className='mt-4'>
          <Button type='submit'>Crear usuario</Button>
        </div>
      </form>
    </Card>
  )
}
