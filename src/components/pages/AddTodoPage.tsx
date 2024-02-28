import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddTodoPage() {
    const url = "https://retoolapi.dev/CVz2rC/todo";
    const todoRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function addNewTodo(event:FormEvent) {
        event.preventDefault();
        const todoName = todoRef.current?.value;
        const todo = {name: todoName, done: false}
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            todoRef.current!.value = "";
            navigate("/");
        }
    }

    return ( <>
        <form onSubmit={event => addNewTodo(event)}>
            <div>
                <label htmlFor="todo">Teendő</label>
                <input type="text" id="todo" required ref={todoRef}/>
            </div>
            <button type="submit">Felvétel</button>
        </form>
    </> );
}

export default AddTodoPage;