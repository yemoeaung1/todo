import { useState, FormEvent } from "react";

interface TodoFormProps {
  onSubmit: (title: string) => void;
}

export function TodoForm({ onSubmit }: TodoFormProps) {
  const [newItem, setNewItem] = useState("");

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(newItem);
    setNewItem("");
  };

  return (
    <div className="p-3 bg-info bg-opacity-10 border border-info border rounded form-container">
      <form onSubmit={submitHandler}>
        <label>Enter Task </label>
        <input
          className="form-control form-control-lg"
          value={newItem}
          type="text"
          id="item"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
}
