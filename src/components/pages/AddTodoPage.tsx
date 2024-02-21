import { FormEvent, useRef } from "react";

function AddTodoPage() {
    const url = "https://retoolapi.dev/CVz2rC/todo";
    const todoRef = useRef<HTMLInputElement>(null);

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
            // TODO: sikeres felvétel
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