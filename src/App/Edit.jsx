import React, { useReducer } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { editorConfig } from "./editorConfig";
import { Editor, Input } from "./style";

export default function Edit(action = () => {}) {
  const [{ title, text }, dispatch] = useReducer(reducer, {
    title: "Titre",
    text: "Texte"
  });

  return (
    <Editor>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <form>
        <div>
          <Input
            type="text"
            defaultValue={title}
            onChange={e =>
              dispatch({ type: "AddTitle", title: e.target.value })
            }
          />
        </div>
        <CKEditor
          editor={ClassicEditor}
          onInit={editor => {}}
          config={editorConfig}
          data={text}
          onChange={(event, editor) =>
            dispatch({ type: "AddText", text: editor.getData() })
          }
        />
        <button type="submit" onSubmit={action({ title, text })}>
          Save
        </button>
      </form>
    </Editor>
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
