import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectAllPosts, fetchPosts } from "../features/posts/postSlice";
import { useEffect } from "react";

const Posts = () => {
  const postReducer = useSelector(selectAllPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (postReducer.status === "idle") {
      dispatch(fetchPosts());
    }
  }, [postReducer.status, dispatch]);

  return (
    <div>
      {postReducer.status === "loading"
        ? "Loading"
        : postReducer.status === "succeeded"
        ? postReducer.posts.map((todo, i) => (
            <div className="w-full flex justify-between" key={i}>
              <li>{todo.title} </li>
              {/* <p className = "text-blue-500" >Edit</p> */}
            </div>
          ))
        : postReducer.status === "rejected"
        ? "Failed when fetching"
        : `${postReducer.error} - Try later`}
    </div>
  );
};

export default Posts;
