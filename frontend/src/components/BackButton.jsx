import { Link } from "react-router-dom";
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import './Styles.css'

const BackButton = () => {
  return (
    <div className="back">
      <Link to={'/'}><BsArrowLeftCircleFill className="back-icon"/></Link>
    </div>
  )
}

export default BackButton
