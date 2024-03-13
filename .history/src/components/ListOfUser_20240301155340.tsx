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
  { id: '1', name: 'John Doe', github: 'Dolu89', email: 'US-West 1' },
  {
    id: '2',
    name: 'John Doe',
    github: 'Waxo',
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
                <TableCell className='flex items-center'>
                  <img
                    className='w-8 h-8 rounded-full mr-2'
                    src={`https://unavatar.io/github/${item.github}`}
                    alt={item.name}
                  />
                  {item.name}
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  <button>Editar</button>
                  <button type='button'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z'
                      />
                    </svg>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
