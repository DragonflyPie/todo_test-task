import { ITodo } from "../todoReducer";

export type Filter = "all" | "completed" | "uncompleted";

export const filterTodos = (todos: ITodo[], filter: Filter): ITodo[] => {
  switch (filter) {
    case "completed":
      return todos.filter((todo) => todo.completed === true);
    case "uncompleted":
      return todos.filter((todo) => todo.completed === false);
    default:
      return todos;
  }
};
