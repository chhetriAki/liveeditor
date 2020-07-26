import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from 'classnames'

const useStyles = makeStyles( theme => ({
  root: {
    backgroundColor: "#fc4445",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    color: "rgba(255,255,255,0.8)",
    alignItems: "center"
  },  
  nav_root_responsive: {
    position: "relative"
  },
  title: {
    padding: "6px 15px",
    backgroundColor: "#dc143c",
    "&:hover": {
      color: "#fff",
      cursor: "pointer",
    },
  },
  nav_wrapper: {
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('xs')]: {
        display: "none"
      }
  },
  nav_wrapper_responsive: {
    display: "block",
    position:"absolute",
    top: "33px",
    width: "100vw",
    backgroundColor: "#dc143c",
    marginTop: "1px"
  },
  active: {
    backgroundColor: "#b22222",
    color: "#fff"
  },
  nav_item: {
    display: "block",
    color: "#f2f2f2",
    textAlign: "center",
    padding: "8px 15px",
    fontSize: "14px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#b22222",
      color: "#fff",
      transition: "background-color 0.5s ease-out"
    },
    [theme.breakpoints.down('xs')]: {
        display: "block",
        '&:hover': {
            backgroundColor: "#fa8072"
        }
      }
  },
  icon: {
      display: "none",
      [theme.breakpoints.down('xs')]: {
        display: "block",
        marginRight: "15px",
        cursor: "pointer"
      }
  },
  active: {
    backgroundColor: "#b22222",
    color: "#fff"
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const [responsiveClass, addResponsiveClass] = useState(false)

  return (
    <div className={responsiveClass ? classNames(classes.root, classes.nav_root_responsive):classes.root}>
      <div className={classes.title}>Shared Editor</div>
      <div className={responsiveClass ? classNames(classes.nav_wrapper, classes.nav_wrapper_responsive): classes.nav_wrapper}>
        <div className={classNames(classes.nav_item)} onClick={()=>addResponsiveClass(!responsiveClass)}>News</div>
        <div className={classes.nav_item} onClick={()=>addResponsiveClass(!responsiveClass)}>Contact</div>
        <div className={classes.nav_item} onClick={()=>addResponsiveClass(!responsiveClass)}>About</div>
      </div>      
      <div className={classes.icon} onClick={()=>addResponsiveClass(!responsiveClass)}>
          <i className="fa fa-bars"></i>
        </div>
    </div>
  );
};

export default Header;
