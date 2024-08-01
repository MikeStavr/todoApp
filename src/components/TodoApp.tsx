import { Pencil, Trash } from "lucide-react";
import React, { useEffect } from "react";

const TodoApp = () => {
  const [todo, setTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState<string[]>([]);

  const submitTodo = (event: React.FormEvent): void => {
    event.preventDefault();
    if (todo === "") alert("No todo has been submitted!");
    else {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };

  const editTodo = (todo: string): void => {
    const newTodo = prompt("Edit the todo", todo);
    if (newTodo) {
      const index = todoList.indexOf(todo);
      todoList[index] = newTodo;
      setTodoList([...todoList]);
    }
  };
  const saveToLocalStorage = () => {
    if (todoList.length === 0) {
      alert("No todos to save!");
      return;
    }
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };

  const removeFromLocalStorage = () => {
    localStorage.removeItem("todoList");
  };

  useEffect(() => {
    const todos = localStorage.getItem("todoList");
    if (todos) {
      setTodoList(JSON.parse(todos));
    }
  }, []);

  return (
    <>
      <button
        className="btn btn-success m-2"
        onClick={() => {
          saveToLocalStorage();
        }}
      >
        Save to local storage.
      </button>
      <button
        className="btn btn-error"
        onClick={() => {
          removeFromLocalStorage();
        }}
      >
        Remove from local storage.
      </button>

      <section className="flex h-screen">
        <div className="m-auto">
          <h1 className="text-3xl">Todo App</h1>
          <p>All your todos in one place.</p>
          <form className="mt-2 ">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              placeholder="Add a new todo"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            />
            <button
              type="submit"
              className="btn btn-primary mt-2 w-full"
              onClick={(event) => {
                submitTodo(event);
              }}
            >
              Add
            </button>
          </form>
          <ul
            className={
              todoList.length === 0
                ? ""
                : "menu bg-base-200 rounded-box w-full mt-2"
            }
          >
            {todoList.map((todo) => {
              return (
                <div className="flex flex-row justify-between">
                  <div>
                    <li
                      key={todo}
                      className="text-gray-900 text-lg cursor-pointer"
                      onClick={(e) => {
                        e.currentTarget.style.textDecoration =
                          e.currentTarget.style.textDecoration ===
                          "line-through"
                            ? "none"
                            : "line-through";
                      }}
                    >
                      {todo}
                    </li>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        editTodo(todo);
                      }}
                    >
                      <Pencil />
                    </button>{" "}
                    <button
                      onClick={() => {
                        setTodoList(todoList.filter((t) => t !== todo));
                      }}
                    >
                      <Trash color="red" />
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TodoApp;
