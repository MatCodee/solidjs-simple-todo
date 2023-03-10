

function TodoItemComponent(props) {
    const { title, done,id } = props.todo;
    return (
        <div class="flex items-center justify-between w-96 bg-slate-50 p-4 rounded-xl shadow-lg">
            <div class="flex gap-5">
                <h3 class="font-medium text-xl">{title}</h3>
                <p>Done: {done ? "Yes" : "No"}</p>
            </div>
            <div class="flex gap-3">
                <button onClick={() => props.deleteFunction(id)}  class="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Delete</button>
            </div>
        </div>
    );
}

export default TodoItemComponent;