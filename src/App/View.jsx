import React, { useState } from "react";
import Edit from "./Edit.jsx";
import { Main, Post, Button } from "./style";

export default function View() {
  const [list, updateList] = useState([]);
  const [doEdit, setDoEdit] = useState(false);

  const addPost = post => e => {
    e.preventDefault();
    updateList([...list, post]);
    setDoEdit(false);
  };

  return (
    <Main>
      <h1>Posts</h1>
      {list.map(({ title, text }, id) => (
        <Post key={id}>
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </Post>
      ))}
      <div>
        {doEdit === true ? (
          <Edit action={addPost} />
        ) : (
          <Button onClick={() => setDoEdit(true)}>Add</Button>
        )}
      </div>
    </Main>
  );
}
