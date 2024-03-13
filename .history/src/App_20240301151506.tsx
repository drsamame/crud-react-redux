import './App.css'
import { ListOfUser } from './components/ListOfUser'

function App(): JSX.Element {
  return (
    <div className="container mx-auto">
      <h1 className='text-3xl font-bold text-center my-7'>Proyecto React Redux</h1>
      <ListOfUser />
    </div>
  )
}

export default App
