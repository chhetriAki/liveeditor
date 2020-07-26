import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CustomEditor from './CustomEditor';

const useStyles = makeStyles({
  root: {
       placeItems: "center",
       backgroundColor: "#F7F1F0",
       fontSize: "12px"
  }
});

const SharedEditor = ({match: {params: {id}}}) => {
 const classes = useStyles();

    return (
        <div className={classes.root}>
            <CustomEditor sharedEditorId={id} />
        </div>
    )
}

export default SharedEditor; 