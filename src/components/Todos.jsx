import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo, selectAllTodos } from "../features/todo/todoSlice";
import Posts from "./Posts";
import AddPost from "./AddPost";

const Todos = () => {
  const todos = useSelector(selectAllTodos);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      {todos.map((todo, i) => (
        <div className="w-full flex justify-between" key={i}>
          <li>{todo.text} </li>
          {/* <p className = "text-blue-500" >Edit</p> */}
          <p
            className="text-red-500 cursor-pointer"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </p>
        </div>
      ))}
      <Posts/>
      <AddPost/>
      {/* <Posts/> */}

    </div>
  );
};

export default Todos;
