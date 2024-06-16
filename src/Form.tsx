import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { TodoContext, TodoContextType } from "./TodosProvider";

const Form = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(TodoContext) as TodoContextType;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "addTodo", payload: value });
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border p-2 border-gray-400 rounded-sm w-full"
      />
    </form>
  );
};

export default Form;
