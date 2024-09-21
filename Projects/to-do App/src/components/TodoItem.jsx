function TodoItem({
  todoName,
  todoDate,
}) /*({todoName,todoDate}) can also be written{props,props} as we are destructuring props*/ {
  return (
    <div class="flex mt-5 space-x-10 justify-center items-center font-semibold">
      <div>{todoName}</div>
      <div>{todoDate}</div>
      <div>
        <button
          type="button"
          class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
