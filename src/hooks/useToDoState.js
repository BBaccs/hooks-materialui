// Not about re using this logic but just to clean up the component:
import UseLocalStorageState from './UseLocalStorageState';
import { v4 as uuidv4 } from 'uuid';

export default initialTodos => {

    const [todos, setTodos] = UseLocalStorageState("todos", initialTodos);

    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
        },
        removeTodo: todosIDwouldBeAgoodNameForMe => {
            const updateTodos = todos.filter(todo => todo.id !== todosIDwouldBeAgoodNameForMe);
            setTodos(updateTodos);
        },
        toggleTodo: todoId => {
            const updateTodos = todos.map(todo => {
                return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo;
            });
            setTodos(updateTodos);
        },
        editToDo: (todoID, newTask) => {
            const updatedTodos = todos.map(todo => {
                return todo.id === todoID ? { ...todo, task: newTask } : todo;
            });
            setTodos(updatedTodos);
        },


    }

}

