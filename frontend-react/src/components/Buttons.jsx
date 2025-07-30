import React from 'react'

const Buttons = (props) => {
  return (
    <>
      <a className={`btn ${props.class}`} href='#'>{props.text}</a>
    </>
  )
}

export default Buttons
