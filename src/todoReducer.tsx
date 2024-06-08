export interface ITodo {
  id: string;
  completed: boolean;
  value: string;
}

export type TodoAction =
  | { type: "addTodo"; payload: string }
  | { type: "switchCompleted"; payload: string }
  | { type: "clearCompleted" };

export function todoReducer(state: ITodo[], action: TodoAction): ITodo[] {
  switch (action.type) {
    case "addTodo":
      return [
        ...state,
        {
          id: Date.now().toString(),
          completed: false,
          value: action.payload,
        },
      ];
    case "switchCompleted": {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    }
    case "clearCompleted": {
      return state.filter((todo) => todo.completed === false);
    }
    default:
      return state;
  }
}
