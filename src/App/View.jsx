import React, { useState } from "react";
import Edit from "./Edit.jsx";
import { Main, Post, Button } from "./style";

export default function View() {
  const [list, updateList] = useState([]);
  const [doEdit, setDoEdit] = useState(false);
  const [nextId, setNextId] = useState(0);

  const defaultEditId = -1;
  const [editId, setEditId] = useState(defaultEditId);

  const addPost = post => e => {
    e.preventDefault();
    updateList([...list, post]);
    setNextId(nextId + 1);
    setDoEdit(false);
  };

  const updatePost = post => e => {
    e.preventDefault();
    updateList([
      ...list.filter(v => v.id < post.id),
      post,
      ...list.filter(v => v.id > post.id)
    ]);
    setEditId(defaultEditId);
  };

  return (
    <Main>
      <h1>Posts</h1>
      {list.map(({ id, title, text }) => (
        <Post key={id}>
          {editId === id ? (
            <Edit id={id} post={{ title, text }} action={updatePost} />
          ) : (
            <div>
              <h2>{title}</h2>
              <div dangerouslySetInnerHTML={{ __html: text }} />
              <Button onClick={() => setEditId(id)}>Edit</Button>
            </div>
          )}
        </Post>
      ))}
      <div>
        {doEdit === true ? (
          <Edit id={nextId} action={addPost} />
        ) : (
          <Button onClick={() => setDoEdit(true)}>Add</Button>
        )}
      </div>
    </Main>
  );
}
