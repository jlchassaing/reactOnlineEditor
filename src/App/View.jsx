import React, { useState } from "react";
import Edit from "./Edit.jsx";

export default function View() {
  const [list, updateList] = useState([]);

  const addPost = post => e => {
    e.preventDefault;
    updateList(...list, post);
  };

  return (
    <div>
      <h1>Posts</h1>
      {list.map((post, id) => (
        <article key={id}>
          <h2>{post.title}</h2>
          <div>{post.text}</div>
        </article>
      ))}
      <div>
        <Edit action={addPost} />
      </div>
    </div>
  );
}
