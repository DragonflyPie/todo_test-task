import { useContext } from "react";
import { ITodo } from "../todoReducer";
import { TodoContext, TodoContextType } from "../TodosProvider";

interface TodoProps extends ITodo {}

const Todo = ({ value, completed, id }: TodoProps) => {
  const { dispatch } = useContext(TodoContext) as TodoContextType;

  return (
    <div className="flex items-center gap-3">
      <div
        className={`rounded-full border size-8 border  cursor-pointer relative flex justify-center items-center
       ${completed ? "border-gray-400" : "border-gray-300"} 
        `}
        onClick={() => dispatch({ type: "switchCompleted", payload: id })}
      >
        {completed && (
          <div className="text-green-600  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </div>
        )}
      </div>
      <p
        className={`${completed ? "line-through text-gray-300" : "text-black"}`}
      >
        {value}
      </p>
    </div>
  );
};

export default Todo;
