import { ChangeEvent, FormEvent, useContext, useMemo, useState } from "react";
import Todo from "./components/Todo";
import { ITodo } from "./todoReducer";
import { TodoContext, TodoContextType } from "./TodosProvider";
import Button from "./components/Button";
import { Filter, filterTodos } from "./utils/filter";

function App() {
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const { todos, dispatch } = useContext(TodoContext) as TodoContextType;

  const todosToRender = useMemo(
    () => filterTodos(todos, filter),
    [todos, filter]
  );

  const undoneCount = useMemo(
    () => filterTodos(todos, "uncompleted").length,
    [todos]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clearCompleted = () => {
    dispatch({ type: "clearCompleted" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "addTodo", payload: value });
    setValue("");
  };

  return (
    <div className="flex flex-col pt-[15vh]  bg-gray-300 items-center min-h-screen">
      <h1 className="font-light  text-4xl text-gray-600 pb-10">Todos</h1>
      <div className="bg-white p-4 flex flex-col gap-5 w-full md:w-[40rem] min-h-[55vh]">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            className="border rounded-sm w-full"
          />
        </form>
        <div className="gap-2 flex flex-col">
          {todosToRender.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              value={todo.value}
            />
          ))}
        </div>
        <div className="flex justify-between text-gray-600 text-sm items-center mt-auto">
          <p>{undoneCount} items left</p>
          <div className="flex gap-3">
            <Button
              active={filter === "all"}
              onClick={() => setFilter("all")}
              value="All"
            />
            <Button
              active={filter === "completed"}
              onClick={() => setFilter("completed")}
              value="Completed"
            />
            <Button
              active={filter === "uncompleted"}
              onClick={() => setFilter("uncompleted")}
              value="Active"
            />
          </div>
          <Button onClick={clearCompleted} value="Clear completed" />
        </div>
      </div>
    </div>
  );
}

export default App;
