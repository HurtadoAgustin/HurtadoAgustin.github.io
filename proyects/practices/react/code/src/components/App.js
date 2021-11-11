import { TodoProvider } from "../GlobalContext"
import { AppUI } from "./AppUI/index";

export default function App(){
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}