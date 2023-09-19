import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../features/posts/postSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addPostHandler = (e) => {
    e.preventDefault();
    dispatch(addNewPost({title, body: "new data"}));
    
    setTitle("");
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={addPostHandler}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Add New Post
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddPost;
