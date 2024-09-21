function AddTodo() {
  return (
    <div class="flex mt-5 justify-around items-center  bg-yellow-600">
      <div>
        <input
          type="text"
          placeholder=" Enter Todo Here"
          class="bg-slate-900 rounded-md text-white"
        ></input>
      </div>
      <div>
        <input type="date" class="rounded-md"></input>
      </div>
      <div>
        <button
          type="button"
          class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
