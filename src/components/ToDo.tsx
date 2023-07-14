export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, completed: boolean) => void;
}
