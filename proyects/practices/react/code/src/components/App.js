import { TodoProvider } from "../GlobalContext"
import { AppUI } from "./AppUI";

export default function App(){
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}