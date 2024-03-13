import { type UserId, deleteUserById, type User } from '../store/users/slice'
import { useAppDispatch } from './store'

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const removeUser = (id: UserId) => () => {
    dispatch(deleteUserById(id))
  }

  const addUser = ({ name, email, github }: User) => {
    dispatch(addUser({ name, email, github }))
  }

  return { removeUser, addUser }
}
