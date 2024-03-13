import { Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hooks/useUserActions'
import { addNewUser, type User } from '../store/users/slice'
export const CreateNewUser = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    console.log(form)
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    addNewUser({name, email, github})
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
