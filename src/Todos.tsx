import Todo from "./components/Todo";
import { ITodo } from "./todoReducer";

interface TodoListProps {
  todos: ITodo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className="gap-2 flex flex-col">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          value={todo.value}
        />
      ))}
    </div>
  );
};

export default TodoList;
