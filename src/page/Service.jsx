/* eslint-disable react/jsx-key */
import React from 'react'
import Todo from '../component/Todo'
    const todolist = [{
        heading: 'This is Heading',
        title : `Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.`,
        btn : 'Add to Card'
    },
    {
        heading: 'This is Heading',
        title : `Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.`,
        btn : 'Add to Card'
    },
    {
        heading: 'This is Heading',
        title : `Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.`,
        btn : 'Add to Card'
    }]

const Service = () => {
  return (
    <>
      <div className="todo_details">
      <div className="">
        <h2>This is Services page</h2>
        <div className="col-flex columns-3 m-7">
          {todolist.map(({heading,title,btn},index) =>{
            return <Todo {...{key : index, heading ,title , btn}}/>
          })}
        </div>
        <div className="col-flex columns-3 m-7">
          {todolist.map(({heading,title,btn},index) =>{
            return <Todo {...{key : index, heading ,title , btn}}/>
          })}
        </div>
        <div className="col-flex columns-3 m-7">
          {todolist.map(({heading,title,btn},index) =>{
            return <Todo {...{key : index, heading ,title , btn}}/>
          })}
        </div>
      </div>
      </div>
    </>
  )
}

export default Service
