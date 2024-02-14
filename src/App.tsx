import './App.css'
import { Todo } from './Todo';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';

function App() {
  const url = "https://retoolapi.dev/CVz2rC/todo";
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const readTodos = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json() as Todo[];
      setTodos(data);
    }
  };

  useEffect(() => {
    readTodos();
  }, []);

  return (
    <>
    <main>
      <TodoList todos={todos} />
    </main>
    </>
  )
}

export default App
