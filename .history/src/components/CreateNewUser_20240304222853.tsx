import { Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hooks/useUserActions'
export const CreateNewUser = () => {
  const handleSubmit = (event: React.FormEvent) => {
    const form = event.target as typeof event.target & {
      email: { value: string }
      password: { value: string }
    }
    const formData = new FormData(form)

    const name = formData.get('name')
    const email = formData.get('email')
    const github = formData.get('github')
  }
  return (
    <Card className='mt-4'>
      <Title>Create new user</Title>
      <form onSubmit={handleSubmit} className=''>
        <TextInput name='name' placeholder='Aqui el nombre' />
        <TextInput name='email' placeholder='Aqui el email' />
        <TextInput name='github' placeholder='Aqui el usuario github' />
        <div className='mt-4'>
          <Button type='submit'>Crear usuario</Button>
        </div>
      </form>
    </Card>
  )
}
