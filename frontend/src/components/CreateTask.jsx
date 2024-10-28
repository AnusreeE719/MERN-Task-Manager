import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';
import './Styles.css'

const CreateTask = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleCreateTask = (e) => {
    e.preventDefault();
    const data = {title, description};
    axios
      .post('https://mern-task-manager-backend-yc9u.onrender.com/tasks', data)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='main'>
        <div className="create-task">
        <BackButton />
      <h1>Create Task</h1>
      <form onSubmit={handleCreateTask}>
        <div className='form-content'>
            <label htmlFor="">Title</label>
            <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='form-content'> 
            <label htmlFor="">Description</label>
            <textarea maxLength={150} name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button className='form-btn' type="submit" >Save</button>
      </form>
    </div>
    </div>
  )
}

export default CreateTask
