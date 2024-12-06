import { Toaster } from "sonner";
import TodoParent from "./components/TodoParent";

export default function App() {
  return (
    <>
      <main className="grow">
        <TodoParent></TodoParent>
      </main>
      <Toaster position="top-center" richColors />
    </>
  );
}
