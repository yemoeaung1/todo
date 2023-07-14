import { Todo } from "./ToDo";
import { ToDoItem } from "./ToDoItem";
import { TodoListProps } from "./ToDo";

export function TodoList(
  { todos, deleteTodo, updateTodo }: TodoListProps,
  { completed, id }: Todo
) {
  return (
    <div className=" p-3 bg-secondary bg-opacity-10 border border-black border rounded todo-container">
      <ul className="list-group todos">
        {todos.map((todo) => {
          // console.log(todo.id);
          return (
            <li className="list-group-item todo" key={todo.id}>
              <div>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={(e) => updateTodo(id, e.target.checked)}
                />
                <ToDoItem {...todo} />
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete Task
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
