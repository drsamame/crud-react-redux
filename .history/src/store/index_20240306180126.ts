import { configureStore, type Middleware } from '@reduxjs/toolkit'
import usersReducer from './users/slice'

const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux_state__', JSON.stringify(store.getState()))
}

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action
  next(action)

  if (type === 'users/deleteUserById') {
    fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
      method: 'DELETE'
    })
      .then((res) => {
        if (res.ok) {
          toast.success(`Usuario ${payload} eliminado correctamente`)
        }
        throw new Error('Error al eliminar el usuario')
      })
      .catch((err) => {
        console.log('error')
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
