import {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'


export default function TODOLIST({filter}){

  const [todos, setTodos] = useState([{
    id : '123', 
    text: 'a',
    status : 'active'
  },
  {
    id : '124',
    text: 'b',
    status : 'active'
  }]);


  function handleAdd(todo){
    //새로운 투두를 todos에 업데이트 해야 함
    setTodos([...todos, todo]);
  }

  //해당 id의 state를 변경하겠음
  function handleUpdate(id){
    setTodos(todos.map((item)=>{
      if (item.id===id){  
        return ({...item, 
          status : item.status==='active'?'completed':'active'})
      }
      return item;
    }))
  }

  //해당 id를 삭제하겠음
  function handleDelete(id){
    setTodos(todos.filter((item)=>item.id!==id));
  }

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map(item => (
          <Todo    //Todo 목록이 들어가는 컴포넌트
            key={item.id} 
            todo={item} //item 자체를 전달한다

            onUpdate = {handleUpdate}
            onDelete = {handleDelete}
          />
        ))}
      </ul>      
      <AddTodo  onAdd={handleAdd}/> 
    </section>
    

  )
}


function getFilteredItems(todos, filter){
  if (filter==='all') return todos;
  return todos.filter((todo)=>todo.status === filter); //status가 'completed' || 'active'
}