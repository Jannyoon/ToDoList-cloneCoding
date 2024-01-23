import {useState, useEffect} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'


export default function TODOLIST({filter}){

  const [todos, setTodos] = useState(()=>readTodosFromLocalStorage());
  //useState... 내부적으로 기존의 값을 기억하고 있다
  //컴포넌트가 리렌더링 될 때마다 useState도 호출되어서, 초기값도 전달이 되는데
  //이미 기억되고 있는 값이 있다면, 내부적으로 읽어온 값이 아닌 기억하고 있는 값을 사용한다.
  //컴포넌트가 마운트 될 때...
  //함수 자체를 계속 호출하는 것x, call back 함수 자체를 전달하게 되면
  //useState 초기값이 필요한 경우에만 얻는다.

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


  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


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

function readTodosFromLocalStorage(){
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}