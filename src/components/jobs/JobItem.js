import React from 'react'

export const JobItem = (props) => {
  return (
    <li>
        <button>Delete</button>
        <h4>{props.title}</h4>
        <h5>{props.date[0]} - {props.date[0]}</h5>
        <p>{props.description}</p>
    </li>
  )
}
