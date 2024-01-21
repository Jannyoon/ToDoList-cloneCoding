import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function AddTodo({onAdd}){
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) =>{
    e.preventDefault(); //페이지가 refresh되는 것을 막는다.
    if (text.trim()!=='') onAdd({id : uuidv4(), text:text.trim(), status : 'active'});
    setText('');
  }
  return (
    <form onSubmit = {handleSubmit}>
      <input 
        type='text' 
        placeholder='Add Todo' 
        value={text} 
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  )
}