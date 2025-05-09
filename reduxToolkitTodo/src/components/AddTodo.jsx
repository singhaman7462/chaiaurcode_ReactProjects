import React, { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { addTodo ,updateTodo,setEditId} from '../features/todo/todoSlice';


function AddTodo({inputRef}) {
const [input,setInput]=useState('');
const toEdit=useSelector(state=>state.editId);
const dispatch=useDispatch();

const addTodoHandler = (e) =>{
  e.preventDefault();
  if(toEdit==null){
    dispatch(addTodo(input));
   }
   else{
    dispatch(updateTodo({id:toEdit,text:input}));
    dispatch(setEditId(null));
   }
 
  setInput(''); 
}

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo