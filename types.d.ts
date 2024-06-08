interface ITodo {
  id: string;
  done: boolean;
  value: string;
}

type Filter = "done" | "undone" | "all";
