import './App.css'
import { Todo } from './Todo';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const url = "https://retoolapi.dev/CVz2rC/todo";
  const [todos, setTodos] = useState<Todo[]>([{id: 1, name: "Főzés", done: false}]);

  return (
    <>
    <main>
      <TodoList todos={todos} />
    </main>
    </>
  )
}

export default App
