import React from 'react';
import styles from './Header.module.css';
import { HiMoon, HiSun} from "react-icons/hi";
import { useDarkMode } from '../Context/DarkModeContext';

export default function Header({filters, filter,onChangeMode, onFilterChange}){
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <header className={styles.header}>
      <span>
          <button onClick={toggleDarkMode}>
           {!darkMode && <HiMoon />}
           {darkMode && <HiSun/>}
          </button>
        </span>
      <ul className={styles.filters}>
        {filters.map((value, index)=>(
          <li key={index}>
            <button 
              onClick={()=>onFilterChange(value)} 
              className={`${styles.filter} ${filter === value && styles.selected}`}
            >
              {value}
            </button>
          </li>
        ))}

      </ul>
    </header>
  )
}