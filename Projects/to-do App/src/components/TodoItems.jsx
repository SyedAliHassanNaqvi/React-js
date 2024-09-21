import TodoItem from "./TodoItem";
const TodoItems = ({ todoItem }) => {
  return (
    <div>
      {todoItem.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
