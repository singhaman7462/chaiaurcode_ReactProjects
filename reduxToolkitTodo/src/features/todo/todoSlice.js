import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Namaste Bharat"}],
    editId:null
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action) => {
            state.todos=state.todos.filter(
                (todo)=>todo.id!==action.payload);
        },
        updateTodo:(state,action) =>{
            state.todos=state.todos.map(
                (todo)=>{
                    if(todo.id===action.payload.id){
                        todo.text=action.payload.text;
                    }
                    return todo;
                }
            )
        },
        setEditId:(state,action)=>{
            state.editId=action.payload;
        }
    }
})

export const {addTodo,removeTodo,updateTodo,setEditId} = todoSlice.actions

export default todoSlice.reducer;