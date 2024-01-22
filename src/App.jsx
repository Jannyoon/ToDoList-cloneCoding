import './index.css';
import TODOLIST from './component/TodoList/todo1';
import Header from './component/Header/Header';
import { useState } from 'react';
import { DarkModeProvider } from './component/Context/DarkModeContext';

const filters = ['all', 'active', 'completed'];

export default function App(){
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header 
        filters={filters} 
        filter={filter} 
        onFilterChange={(filter)=>setFilter(filter)}
      />
      <TODOLIST filter={filter}/>
    </DarkModeProvider>
  )
}