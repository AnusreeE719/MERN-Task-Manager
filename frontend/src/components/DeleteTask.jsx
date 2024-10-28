import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import BackButton from "./BackButton";


const DeleteTask = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  const handleDeleteTask = () => {
    axios
      .delete(`https://mern-task-manager-backend-zmaj.onrender.com/tasks/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="main">
      <div className="create-task">
        <BackButton />
        <h1>Delete Task</h1>
        <div className="confirm-delete">
            <h3>Are you sure you want to delete this task?</h3>
            <button className="form-btn" onClick={handleDeleteTask}>Yes</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteTask
