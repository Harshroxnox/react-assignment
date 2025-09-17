import React from 'react'

const ContactBarItem = (props) => {
  return (
    <div className="flex justify-center items-center">
      <img className='h-7 w-7 mr-2' src={props.link} alt="us" />
      <div>{props.label}</div>
    </div>
  )
}

export default ContactBarItem