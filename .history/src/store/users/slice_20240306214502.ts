import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWidthId extends User {
  id: UserId
}

const DEFAULT_STATE = [
  {
    id: '1',
    name: 'John Doe',
    github: 'Dolu89',
    email: 'US-West 1'
  },
  {
    id: '2',
    name: 'John Doe54',
    github: 'Waxo',
    email: 'US-West@gmail.com'
  },
  {
    id: '3',
    name: 'John Doe2',
    github: 'ldez',
    email: 'US-West@gmail.com'
  },
  {
    id: '4',
    name: 'John Doe3',
    github: 'Sphinxxxx',
    email: 'azhtom'
  }
]

const initialState: UserWidthId[] = (() => {
  const persistedState = localStorage.getItem('__redux_state__')
  if (persistedState !== null) {
    return JSON.parse(persistedState).users
  }
  return DEFAULT_STATE
})()

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      return [...state, { id, ...action.payload }]
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    },
    rollbackUser: (state, action: PayloadAction<UserWidthId>) => {
      const isUserAlready = state.some((user) => user.id === action.payload.id)
      if (!isUserAlready) {
        return [...state, action.payload]
      }
    }
  }
})

export default userSlice.reducer
export const { deleteUserById, addNewUser } = userSlice.actions
