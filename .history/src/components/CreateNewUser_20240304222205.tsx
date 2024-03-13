import { Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hooks/useUserActions'
export const CreateNewUser = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const event = event.target
    const formData = new FormData(form)

    const name = formData.get('name')
    const email = formData.get('email')
    const github = formData.get('github')
  }
  return (
    <Card className='mt-4'>
      <Title>Create new user</Title>
      <form onSubmit={handleSubmit} className=''>
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
