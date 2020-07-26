import React, { useEffect, useMemo, useState,useRef } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Mitt from "mitt";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "grid",
    backgroundColor: "#000",
    padding: "7px 5px",
    color: "#fff",
    fontSize: "12px",
    border: "1px solid red",
  },
});

const emittor = new Mitt();

const CustomEditor = (props) => {
  const classes = useStyles();
  const editor = useMemo(() => withReact(createEditor()), []);
  const editorInstanceId = useRef(`${Date.now()}`);
  const isRemoteEditorChange = useRef(false);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "Start typing and share url with your friend to live edit together" }],
    },
  ]);

  useEffect(() => {
    emittor.on("*", (type, value) => {
      if (editorInstanceId.current !== type) {
        isRemoteEditorChange.current = true;
        setValue(value);
        isRemoteEditorChange.current = false;
      }
    });
  }, []);

  function onValueChange(value) {
    if (!isRemoteEditorChange.current) {
      emittor.emit(editorInstanceId.current, value);
      setValue(value);
    }
  }

  return (
    <div className={classes.root}>
      <Slate
        editor={editor}
        value={value}
        onChange={(value) => onValueChange(value)}
      >
        <Editable />
      </Slate>
    </div>
  );
};

export default CustomEditor;
