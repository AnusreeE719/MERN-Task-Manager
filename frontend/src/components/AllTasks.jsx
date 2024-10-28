import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {FiEdit} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import {BsEye} from 'react-icons/bs'
import {IoCheckmarkCircle} from 'react-icons/io5'
import './Styles.css'
//BsEyeSlash

const AllTasks = () => {

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    axios
      .get('http://localhost:5555/tasks')
      .then((res) => {
        setTasks(res.data.data);
      })
      .catch((error) => {
        console.log(error)
      });
  }, [])

  const handleMarkTaskComplete =  (id, currentStatus) => {
    const updatedStatus = !currentStatus;
    
       axios
      .put(`http://localhost:5555/tasks/${id}/status`, {
        completed:updatedStatus,
      })
      .then(() => {
        setTasks((prevTasks) =>
        prevTasks.map((items) =>
          items._id === id ? { ...items, completed: updatedStatus } : items
        )
      );
      })
    .catch((error) => {
      console.log(error)
    });
      
  }

  return (
    <div className='task'>
      <div className='task-cards'>
        {tasks.map((val) => {
          return(
            <div key={val._id} className='card'>
            <div className='card-top'>
              <p className='title'>{val.title}</p>
              <Link to={`/tasks/task/${val._id}`}><BsEye className='icon-view' /></Link>
            </div>
            <p className='description'>{val.description}</p>
            <div className='card-bottom'>
              <IoCheckmarkCircle onClick={() => handleMarkTaskComplete(val._id, val.completed)} className={val.completed ? 'btn' : 'btn status-color'} />
              <Link to={`/tasks/editTask/${val._id}`}><FiEdit className='icon-edit' /></Link>
              <Link to={`/tasks/deleteTask/${val._id}`}><MdDelete className='icon-delete' /></Link>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllTasks
