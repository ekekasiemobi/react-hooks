import React from 'react'
import './App.css'
import {Counter} from './components/counter'
import ToDoList from './components/TodoList'
import UserData from './components/UserData'

export function App() {
  
  return (
    <>
      <Counter />
      <ToDoList />
      <UserData />
    </>
  )
}

export default App
