

import Post from "../post/Post";
import "./list.scss";

function List({ posts, onDelete }) {
  return (
    <div className="list">
      {posts.map((post) => (
        <Post key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default List;
