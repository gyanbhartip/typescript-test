import { useState } from "react";
import "./App.css";
import NewTaskField from "./components/NewTaskField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="app">
      <span className="heading">typescript-todo</span>
      <NewTaskField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
