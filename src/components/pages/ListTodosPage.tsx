import { useEffect, useState } from "react";
import { Todo } from "../../Todo";
import TodoList from "../TodoList";

function ListTodosPage() {
  const url = "https://retoolapi.dev/CVz2rC/todo";
  const [todos, setTodos] = useState<Todo[]>([]);

  const readTodos = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const data = (await response.json()) as Todo[];
      setTodos(data);
    }
  };

  useEffect(() => {
    readTodos();
  }, []);

  return <TodoList todos={todos} />;
}

export default ListTodosPage;
