import {
  configureStore,
  type Middleware,
  type PayloadAction
} from '@reduxjs/toolkit'
import { toast } from 'sonner'
import usersReducer, { rollbackUser, type UserWidthId } from './users/slice'

const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux_state__', JSON.stringify(store.getState()))
}

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action as PayloadAction<string>
  const previousState = store.getState()
  next(action)
  if (type === 'users/deleteUserById') {
    const userToRemove = previousState.users.find((user: UserWidthId) => user.id === payload)

    fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
      method: 'DELETE'
    })
      .then((res) => {
        if (res.ok) {
          toast.success(`Usuario ${payload} eliminado correctamente`)
        }
      })
      .catch((err) => {
        toast.error('Error eliminando el usuario')
        if (userToRemove) store.dispatch(rollbackUser())
        console.log(err)
      })
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      persistanceMiddleware,
      syncWithDatabase
    )
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
