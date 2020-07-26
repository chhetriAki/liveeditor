import React, { useEffect, useMemo, useState,useRef } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { makeStyles } from "@material-ui/core/styles";
import useSocketIOClient from './groups/useSocketIOClient'
const useStyles = makeStyles({
  root: {
    display: "grid",
    padding: "7px 5px",
    color: "#000",
    fontSize: "12px",
    height: "100%"
  },
});


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

  const socket = useSocketIOClient()

  useEffect(() => {
    if (socket) {
      socket.on(`onEditorValueUpdate-${props.sharedEditorId}`, ({editorId, value}) => {
        if (editorInstanceId.current !== editorId) {
            isRemoteEditorChange.current = true;
            setValue(JSON.parse(value));
            isRemoteEditorChange.current = false;
          }
      });
    }
    
    return () => {
        socket && socket.off(`onEditorValueUpdate-${props.sharedEditorId}`)
    }
  }, [socket]);

  function onValueChange(value) {
    if (!isRemoteEditorChange.current) {
      socket.emit("onEditorValueChange", {
        editorId: editorInstanceId.current,
        value: JSON.stringify(value),
        sharedEditorId: props.sharedEditorId
      });
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
