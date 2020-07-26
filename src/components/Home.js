import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
  root: {
       display: "grid",
       placeItems: "center",
       backgroundColor: "#fafafa",
       padding: "7px 5px",
       color: "#000",
       fontSize: "12px"
  },
  home_wrapeer: {
      textAlign: "center"
  },
  start_btn: {
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "#fc4445",
      padding: "5px 15px",
      borderRadius: "5px"
  }
});

const Home = (props) => {
 const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.home_wrapeer}>
            <p>A <strong>simple editor</strong> to have have live editing session with your team mates and friends</p>
            <Link to='/editor' className={classes.start_btn}><span>Click here to start</span></Link>
            </div>
        </div>
    )
}

export default Home; 