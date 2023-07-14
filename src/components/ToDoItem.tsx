import { Todo } from "./ToDo";
export function ToDoItem({ title }: Todo) {
  return (
    // <li>
    //   <input
    //     type="checkbox"
    //     checked={completed}
    //     onChange={(e) => updateTodo(id, e.target.checked)}
    //   />
    //   {title}
    //   <button onClick={() => deleteTodo(id)}>Delete Task</button>
    // </li>
    <label>{title}</label>
  );
}
