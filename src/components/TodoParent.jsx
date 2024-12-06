import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import TodoItem from "./TodoItem";
import { addTodo, deleteTodo, editTodo } from "../crud";
export default function TodoParent() {
  const [list, setList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    if (data.get("todoName").trim() === "") {
      confirm("bo'sh kiritmang");
    } else {
      const newTodo = { id: Date.now(), todoName: data.get("todoName") };
      setList(addTodo(newTodo, list));
      e.target.reset();
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center flex-col py-10"
    >
      <div className="grid w-full px-14 mb-5 items-center gap-1.5">
        <Label htmlFor="todo">Todo</Label>
        <Input
          type="text"
          id="todo"
          name="todoName"
          placeholder="todo kiriting"
        />
      </div>
      <ul className="flex flex-col px-14 w-full gap-5">
        {list.map(({ todoName, id }) => {
          return (
            <li key={id}>
              <TodoItem
                id={id}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                setList={setList}
                list={list}
                title={todoName}
              ></TodoItem>
            </li>
          );
        })}
      </ul>
    </form>
  );
}
