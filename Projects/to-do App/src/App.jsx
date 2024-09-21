import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Milk",
      dueDate: "11/22/33",
    },
    {
      name: "Bread",
      dueDate: "11/22/32",
    },
    {
      name: "TuRTURAY",
      dueDate: "11/22/44",
    },
  ];
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />

      <TodoItems todoItem={todoItems}></TodoItems>
    </center>
  );
}
export default App;
