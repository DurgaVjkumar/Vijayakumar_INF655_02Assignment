import React from 'react'
import './TaskItem.css'

export const TaskItem = (props) => {
  return (
    <div className="task-item">
        <h2>{ props.title }</h2>
        <div className="task-item__description">{ props.description }</div>
    </div>
  )
}
