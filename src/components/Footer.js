import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
       display: "grid",
       placeItems: "center",
       backgroundColor: "#fa8072",
       padding: "7px 5px",
       color: "#fff",
       fontSize: "12px"
  }
});

const Footer = (props) => {
 const classes = useStyles();

    return (
        <div className={classes.root}>
            Enjoy Live Editing
        </div>
    )
}

export default Footer; 