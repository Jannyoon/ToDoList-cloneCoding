import { FaTrashAlt } from "react-icons/fa";
import styles from './Todo.module.css'

export default function Todo({todo, onUpdate, onDelete}){
  const {text, status} = todo;

  return (
    <li className={styles.todo}>
      <input 
        type="checkbox" 
        id={todo.id}
        className={styles.checkbox} 
        checked = {status === 'completed'}
        onClick={()=>onUpdate(todo.id)}
      />
      <label htmlFor={todo.id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={()=>onDelete(todo.id)} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>

    </li> 
  )
}

