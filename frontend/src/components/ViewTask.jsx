import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {FiEdit} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import {IoCheckmarkCircle} from 'react-icons/io5'
import BackButton from "./BackButton";

const ViewTask = () => {
  
  const {id} = useParams();
  const [currentTask, setcurrentTask] = useState(null);


  useEffect(() => {
    axios
      .get(`https://mern-task-manager-backend-yc9u.onrender.com/tasks/${id}`)
      .then((res) => {
        setcurrentTask(res.data);
      })
      .catch((error) => {
        console.log(error)
      });
  }, [])

  const handleMarkTaskStatus = (currentTask) =>{
    const updatedStatus = !currentTask.completed;

    axios
      .put(`https://mern-task-manager-backend-yc9u.onrender.com/tasks/${id}/status`, {
        completed:updatedStatus,
      })
      .then(() => {
        setcurrentTask((prevTask) => ({
          ...prevTask,
          completed:updatedStatus,
        }))
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <div className="main">
      <div className="create-task">
      <BackButton />
      {currentTask? (
        <>
        <p className="task-title">{currentTask.title}</p>
        <p className="task-description">{currentTask.description}</p>
        <div className="task-bottom">
          <IoCheckmarkCircle onClick={() => handleMarkTaskStatus(currentTask)} className={currentTask.completed ? 'btn' : 'btn status-color'} />
          <Link to={`/tasks/editTask/${currentTask._id}`}><FiEdit className='icon-edit' /></Link>
          <Link to={`/tasks/deleteTask/${currentTask._id}`}><MdDelete className='icon-delete' /></Link>
        </div>
        </>
      ) : (
      <>
      <p>No task data available.</p>
      </>
      )}
      </div>
    </div>
  )
}

export default ViewTask
