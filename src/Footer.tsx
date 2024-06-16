import { useContext, useMemo } from "react";
import Button from "./components/Button";
import { Filter, filterTodos } from "./utils/filter";
import { TodoContext, TodoContextType } from "./TodosProvider";

interface FooterProps {
  filter: Filter;
  switchFilter: (value: Filter) => void;
}

const Footer = ({ filter, switchFilter }: FooterProps) => {
  const { todos, dispatch } = useContext(TodoContext) as TodoContextType;
  const undoneCount = useMemo(
    () => filterTodos(todos, "uncompleted").length,
    [todos]
  );
  return (
    <div className="flex justify-between text-gray-600 text-sm items-center mt-auto">
      <p>{undoneCount} items left</p>
      <div className="flex gap-3">
        <Button
          active={filter === "all"}
          onClick={() => switchFilter("all")}
          value="All"
        />
        <Button
          active={filter === "completed"}
          onClick={() => switchFilter("completed")}
          value="Completed"
        />
        <Button
          active={filter === "uncompleted"}
          onClick={() => switchFilter("uncompleted")}
          value="Active"
        />
      </div>
      <Button
        onClick={() => dispatch({ type: "clearCompleted" })}
        value="Clear completed"
      />
    </div>
  );
};

export default Footer;
