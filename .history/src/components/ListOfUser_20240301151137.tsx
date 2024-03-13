import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react'

const users: Array<{
  id: string
  name: string
  email: string
  github: string
}> = [
  { id: '1', name: 'John Doe', github: 'live', email: 'US-West 1' },
  {
    id: '2',
    name: 'John Doe',
    github: 'gitgithub',
    email: 'US-West@gmail.com'
  },
  {
    id: '3',
    name: 'John Doe2',
    github: 'gitgithub',
    email: 'US-West@gmail.com'
  },
  { id: '4', name: 'John Doe3', github: 'gitgithub', email: 'github@gmail.com' }
]

export function ListOfUser() {
  return (
    <>
      <Card>
        {' '}
        <Table className='mt-8'>
          <TableHead>
            <TableRow className='border-b border-tremor-border dark:border-dark-tremor-border'>
              <TableHeaderCell className='text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                Id
              </TableHeaderCell>
              <TableHeaderCell className='text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                Nombre
              </TableHeaderCell>
              <TableHeaderCell className='text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                Email
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.name}>
                <TableCell className='font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                  {item.id}
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
