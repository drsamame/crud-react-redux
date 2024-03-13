import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title
} from '@tremor/react'
import { useSelector } from 'react'

export function ListOfUser() {
  const users = useSelector((state) => state.users)
  return (
    <>
      <Card>
        <Title>
          Usuarios <Badge>{users.length}</Badge>
        </Title>
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
                        d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                      />
                    </svg>
                  </button>
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
