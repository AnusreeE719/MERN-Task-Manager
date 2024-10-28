import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import BackButton from './BackButton';
import './Styles.css'

const EditTask = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`https://mern-task-manager-backend-zmaj.onrender.com/tasks/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
      })
      .catch((error) => {
        console.log(error)
      });
  }, [])

  const handleEditTask = (e) => {
    e.preventDefault(); 
    const data = {title, description};
    axios
      .put(`https://mern-task-manager-backend-zmaj.onrender.com/tasks/${id}`, data)
      .then(() =>{
        navigate('/');
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <div className='main'>
        <div className="create-task">
          <BackButton />
      <h1>Edit Task</h1>
      <form onSubmit={handleEditTask}>
        <div className='form-content'>
            <label htmlFor="">Title</label>
            <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='form-content'> 
            <label htmlFor="">Description</label>
            <textarea maxLength={150} name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button className='form-btn' type="submit">Save</button>
      </form>
    </div>
    </div>
  )
}

export default EditTask
