import { Todo } from "../Todo";

function TodoListItem(props: Props) {
    const todo = props.todo;
    //const {id, name, done} = todo;
    /* 
        const id = todo.id;
        const name = todo.name;
        const done = todo.done;
    */
    const { name } = todo;
    return ( <li>
        {name}
    </li> );
}

interface Props {
    todo: Todo
}

export default TodoListItem;