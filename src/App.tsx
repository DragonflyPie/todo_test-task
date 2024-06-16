import { useContext, useMemo, useState } from "react";
import { TodoContext, TodoContextType } from "./TodosProvider";
import { Filter, filterTodos } from "./utils/filter";
import Form from "./Form";
import TodoList from "./Todos";
import Footer from "./Footer";

function App() {
  const [filter, setFilter] = useState<Filter>("all");
  const { todos } = useContext(TodoContext) as TodoContextType;

  const switchFilter = (value: Filter) => {
    setFilter(value);
  };

  const todosToRender = useMemo(
    () => filterTodos(todos, filter),
    [todos, filter]
  );

  return (
    <div className="flex flex-col pt-[15vh]  bg-gray-300 items-center min-h-screen">
      <h1 className="font-light  text-4xl text-gray-600 pb-10">Todos</h1>
      <div className="bg-white p-4 flex flex-col gap-5 w-full md:w-[40rem] min-h-[55vh]">
        <Form />
        <TodoList todos={todosToRender} />
        <Footer filter={filter} switchFilter={switchFilter} />
      </div>
    </div>
  );
}

export default App;
