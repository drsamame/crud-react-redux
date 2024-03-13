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
  { id: '1', name: 'John Doe', github: 'azhtom', email: 'US-West 1' },
  {
    id: '2',
    name: 'John Doe',
    github: 'ldez',
    email: 'US-West@gmail.com'
  },
  {
    id: '3',
    name: 'John Doe2',
    github: 'ldez',
    email: 'US-West@gmail.com'
  },
  { id: '4', name: 'John Doe3', github: 'Sphinxxxx', email: 'azhtom' }
]

export function ListOfUser() {
  return (
    <>
      <Card>
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
              <TableHeaderCell className='text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                Acciones
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.name}>
                <TableCell className='font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                  {item.id}
                </TableCell>
                <TableCell>
                  <img
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      marginRight: '8px'
                    }}
                    src={`https://unavatar.io/github/${item.github}`}
                    alt={item.name}
                  />
                  {item.name}
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell> Acciones </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
