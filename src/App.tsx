import { useEffect, useState } from "react";
import { TodoForm } from "./components/ToDoForm";
import { Todo, TodoListProps } from "./components/ToDo";
import { TodoList } from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title: string) {
    setTodos((currentTodos) => {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title,
        completed: false,
      };
      return [...currentTodos, newTodo];
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function updateTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  const todoListProps: TodoListProps = {
    todos,
    deleteTodo,
    updateTodo,
  };

  return (
    <div className="App">
      <TodoForm onSubmit={addTodo} />
      <TodoList {...todoListProps} />
    </div>
  );
}

export default App;
