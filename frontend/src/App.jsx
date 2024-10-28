import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import CreateTask from './components/CreateTask'
import EditTask from './components/EditTask'
import DeleteTask from './components/DeleteTask'
import ViewTask from './components/ViewTask'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <Home /> } />
      <Route path='/tasks/createTask' element = { <CreateTask /> } />
      <Route path='/tasks/task/:id' element= { <ViewTask /> } />
      <Route path='/tasks/editTask/:id' element = { <EditTask /> } /> 
      <Route path='/tasks/deleteTask/:id' element = { <DeleteTask /> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

