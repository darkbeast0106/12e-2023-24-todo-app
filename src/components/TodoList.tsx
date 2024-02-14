import { Todo } from "../Todo";
import TodoListItem from "./TodoListItem";

function TodoList(props: Props) {
    const {todos} = props;
    return ( <ul>
        {
            todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)
        }
    </ul> );
}

interface Props {
    todos: Todo[]
}


export default TodoList;