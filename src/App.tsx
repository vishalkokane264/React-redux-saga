import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store/index";
import HomePage from "./app/Components/HomePage";
import ListItem from "./app/Components/ListItem";
import { useCallback, useState } from "react";
import UserFrontend from "./app/Components/UserFrontend";
function App() {
  const [count, setCount] = useState<any>(0);
  const [todos, setTodos] = useState<any>([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodos = useCallback(() => {
    setTodos((prev: any) => [...prev, "newEnter"]);
  }, []);

  return (
    <Provider store={store}>
      <HomePage />
      <div>hello TODO</div>

      <ListItem todo={todos} addTodo={addTodos} />

      <div>count: {count}</div>
      <button onClick={increment}>increment count</button>
      <UserFrontend />
    </Provider>
  );
}

export default App;
