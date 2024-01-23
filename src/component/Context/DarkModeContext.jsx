import {useState, useEffect, createContext, useContext} from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({children}){
  const [darkMode, setDarkMode] = useState(false); //light mode로 시작
  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  }

  useEffect(()=>{
    const isDark = localStorage.theme === 'dark' ||  //Boolean값 저장해놓음
    (!('theme' in localStorage) && 
    window.matchMedia('(prefers-color-scheme: dark)').matches);
  
    setDarkMode(isDark); //내부 상태 업데이트
    updateDarkMode(isDark);    
  }, [darkMode])


  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
}

//사용하는 곳에서 굳이 DarkModeContext라고 알지 않아도 되도록
//훅을 사용하겠다

export function updateDarkMode(darkMode){
  if (darkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    
  }
  else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
export const useDarkMode = ()=>useContext(DarkModeContext);