/* eslint-disable react/prop-types */
// import './todo.css'

const Todo = ({heading,title,btn}) => {
  return (
    <div>
      <div className='bg-red-500 p-5'>
        <h1 className='text-3xl font-bold'> {heading} </h1>
        <p> {title} </p>
        <button> {btn} </button>
    </div>
    </div>
  )
}

export default Todo
