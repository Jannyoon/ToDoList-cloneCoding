import { FaTrashAlt } from "react-icons/fa";
export default function Todo({todo, onUpdate, onDelete}){
  const {text, status} = todo;

  return (
    <li id={todo.id}>
      <input 
        type="checkbox" 
        id='checkbox' 
        checked = {status === 'completed'}
        onClick={()=>onUpdate(todo.id)}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={()=>onDelete(todo.id)}><FaTrashAlt /></button>
    </li> 
  )
}

