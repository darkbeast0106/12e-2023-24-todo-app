function AddTodoPage() {
    return ( <>
        <form>
            <div>
                <label htmlFor="todo">Teendő</label>
                <input type="text" id="todo" required/>
            </div>
            <button type="submit">Felvétel</button>
        </form>
    </> );
}

export default AddTodoPage;