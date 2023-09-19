import  {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from "../features/todo/todoSlice"

const AddTodo = () => {

const [input, setInput] = useState("");
const dispatch = useDispatch();

const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("")
}

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={addTodoHandler}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
       Add Todo
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  
    <div className="flex items-center justify-between">
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
       Add Todo
      </button>
  
    </div>
  </form>
  )
}

export default AddTodo