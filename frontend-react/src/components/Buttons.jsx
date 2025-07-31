import { Link } from 'react-router-dom'

const Buttons = (props) => {
  return (
    <>
      <Link className={`btn ${props.class}`} to={props.url}>{props.text}</Link>
    </>
  )
}

export default Buttons
