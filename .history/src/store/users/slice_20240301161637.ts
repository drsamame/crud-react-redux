import { createSlice } from '@reduxjs/toolkit'

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWidthId extends User {
  id: string
}

const initialState: UserWidthId[] = [
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

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})
