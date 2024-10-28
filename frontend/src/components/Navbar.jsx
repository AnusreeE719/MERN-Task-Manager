import { Link } from 'react-router-dom'
import './Styles.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <h1>TASK MANAGER</h1>
        <Link to={`/tasks/createTask`}><button>Create Task</button></Link>
    </div>
  )
}

export default Navbar
