import { createContext, useReducer } from "react";
import { ITodo, TodoAction, todoReducer } from "./todoReducer";

export type TodoContextType = {
  todos: ITodo[];
  dispatch: React.Dispatch<TodoAction>;
};

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
