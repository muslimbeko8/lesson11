import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TodoItem({
  title,
  deleteTodo,
  id,
  editTodo,
  list,
  setList,
}) {
  function editedTodo(todoId) {
    const todo = list.find(({ id }) => id === todoId);
    const newTodoName = prompt("Yangi ma'lumotni kiriting", todo.todoName);
    const newTodo = { todoName: newTodoName, id: todoId };
    setList(editTodo(newTodo, list));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button
          className="mr-3"
          onClick={() => {
            setList(deleteTodo(id, list));
          }}
          variant="destructive"
          type="button"
        >
          Delete
        </Button>
        <Button onClick={() => editedTodo(id)} variant="outline" type="button">
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
