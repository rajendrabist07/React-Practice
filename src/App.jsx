import './App.css';
import { useState, useEffect } from 'react';
import ModeToggle from './components/ModeToggle';
import UserProfile from './components/ObjectState';
import TodoList from './components/ArrayStatus';
import StudyMaterials from './components/StudyMaterials';
import {
  UseStateHook,
  UseEffectHook,
  UseContextHook,
  UseContextProvider,
  UseRefHook,
  UseMemoHook,
  UseCallbackHook,
  UseReducerHook,
  TodoApp
} from './components/Hooks';
import Clock from './components/Clock';
import API from './components/API';









function App() {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function alartMultipleOf5() {
      if (count % 5 === 0) {
        // alert("it's multiple of 5");
      }
    }
    alartMultipleOf5()
  }, [count])

  function changeTo() {
    setShow(!show)
  }

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>

      {/* <StudyMaterials />



      <div className='main-box'>
        <input type='checkbox' placeholder='Check' checked={show} onChange={changeTo}></input>
        <p className='text-show'>{show ? 'Check' : 'Uncheck'}</p>

        <div className='counbtns'>
          <button onClick={() => setCount(count + 1)}>➕</button>
          <button onClick={() => setCount(count - 1)}>➖</button>
          <button onClick={() => setCount(0)}>🔄</button>
          <p>{count}</p>

        </div>

        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter Your Name...' /> <br /><br />

        <p>Hello, {value}!</p>

        <div className='Active'>
          <button onClick={() => setIsActive(!isActive)}>{isActive ? 'Deactivate' : 'Activate'}</button>
          <p>Status: {isActive ? '🟢 Active' : '🔴 Inactive'}</p>
        </div>

      </div>

      <div className='DarkMode'>
        <div className={darkMode ? 'container dark ' : 'container light'}>
          <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>

          <button onClick={toggleDarkMode}>Change Theme</button>
        </div>
      </div>

      <ModeToggle />
      <UserProfile />
      <TodoList />

      {/* ============ ALL REACT HOOKS SHOWCASE ============ 
      <h1 style={{ textAlign: 'center', fontSize: '48px', marginTop: '60px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        🎣 React Hooks Masterclass
      </h1>

      <UseStateHook />
      <UseEffectHook />

      <UseContextProvider>
        <UseContextHook />
      </UseContextProvider>

      <UseRefHook />
      <UseMemoHook />
      <UseCallbackHook />
      <UseReducerHook />

      {/* ============ PRO TODO APP ============ */}
      {/* <TodoApp />

      <Clock /> */}

      <API />
    </>
  )
}

export default App
