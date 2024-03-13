import { type UserId, deleteUserById } from '../store/users/slice'
import { useAppDispatch } from './store'

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const removeUser = (id: UserId) => () => {
    dispatch(deleteUserById(id))
  }

  const addUser = ({ name, email, github }) => {
    dispatch(addUser({ name, email, github }))
  }

  return { removeUser, addUser }
}
