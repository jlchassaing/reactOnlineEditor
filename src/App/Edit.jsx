import React, { useReducer } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { editorConfig } from "./editorConfig";
import { Editor, Input, Button } from "./style";

export default function Edit({ action }) {
  const [{ title, text }, dispatch] = useReducer(reducer, {
    title: "Titre",
    text: "Texte"
  });

  return (
    <Editor>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <form onSubmit={action({ title, text })}>
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
        <Button type="submit">Save</Button>
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
