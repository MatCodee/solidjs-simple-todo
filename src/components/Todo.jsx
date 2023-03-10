import { createSignal, onCleanup, createEffect } from "solid-js"
import { createStore } from "solid-js/store";

import TodoItemComponent from "./TodoItem";

function createLocalStore(initState) {
    const [state, setState] = createStore(initState);
    if (localStorage.todos) setState(JSON.parse(localStorage.todos));
    createEffect(() => (localStorage.todos = JSON.stringify(state)));
    return [state, setState];
}

function TodoComponent() {
    const [state, setState] = createLocalStore({
        todos: [],
        newTitle: "",
        idCounter: 0
    });
    function deleteTodo(id) {
        setState({
          todos: state.todos.filter(todo => todo.id !== id)
        });
    }

    return (
        <div class="container my-8 mx-auto flex items-center justify-center flex-col">
            <h1 class="text-3xl">Simple todos</h1>
            <div class="mt-6 flex max-w-md gap-x-4 mb-6">
            <input type="text" placeholder="enter todo click" oninput={(e) => setState({ newTitle: e.target.value })} required class="focus:ring-blue-500 focus:outline-none appearance-none min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            
            <button
                class="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={
                    () => setState({
                        idCounter: state.idCounter + 1,
                        todos: [
                            ...state.todos,
                            {
                                id: state.idCounter,
                                title: state.newTitle,
                                done: false,
                            }
                        ]
                    })
                }
            > Add Todo </button>
            <button
                class="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={() => setState({
                    todos: [],
                    newTitle: "",
                    idCounter: 0
                })}> Borrar tareas </button>
            </div>

            {state.todos.map((e) => (<TodoItemComponent key={e.id} todo={e} deleteFunction={() => deleteTodo(e.id)} />))}    
        </div>
    )

}

export default TodoComponent