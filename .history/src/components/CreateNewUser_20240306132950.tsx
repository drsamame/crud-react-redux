import { Badge, Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hooks/useUserActions'
import { useState } from 'react'
export const CreateNewUser = () => {
  const { addUser } = useUserActions()
  const [result, setResult] = useState<'ok' | 'ko' | null>()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setResult(null)
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string
    if (name === '' || email === '' || github === '') {
      return setResult('ok')
    }
    addUser({ name, email, github })
    form.reset()
  }
  return (
    <Card className='mt-4'>
      <Title>Create new user</Title>
      <form className='grid grid-cols-1 gap-4' onSubmit={handleSubmit} >
        <TextInput name='name' placeholder='Aqui el nombre' />
        <TextInput name='email' placeholder='Aqui el email' />
        <TextInput name='github' placeholder='Aqui el usuario github' />
        <div className='mt-4'>
          <Button type='submit'>Crear usuario</Button>
          <span>
            { result === 'ok' && <Badge color='green'>Guardado correctamente</Badge>}
            { result !== 'ko' && <Badge color='red'>Ha habido un error</Badge>}
          </span>
        </div>
      </form>
    </Card>
  )
}
