import React, { useReducer } from "react";
import CKeditor from "react-ckeditor-component";

export default function App() {
  const [{ title, text }, dispatch] = useReducer(reducer, {
    title: "Titre",
    text: "Texte"
  });
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <form>
        <div>
          <input
            type="text"
            onChange={e =>
              dispatch({ type: "AddTitle", title: e.target.value })
            }
          />
        </div>
        <CKeditor
          activeClass="p5"
          content={text}
          events={{
            change: e => dispatch({ type: "AddText", text: e.editor.getData() })
          }}
        />
      </form>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "AddTitle":
      return { ...state, title: action.title };
    case "AddText":
      return { ...state, text: action.text };
    default:
      return state;
  }
}
