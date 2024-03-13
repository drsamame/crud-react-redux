import { configureStore, type Middleware } from '@reduxjs/toolkit'
import usersReducer from './users/slice'

const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux_state__', JSON.stringify(store.getState()))
}

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action
  next(action)
  console.log(action)
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistanceMiddleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
