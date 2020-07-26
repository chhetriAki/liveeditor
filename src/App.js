import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header'
import Footer from './components/Footer'
import CustomEditor from './components/CustomEditor'
const useStyles = makeStyles({
  app_root: {
   display: "grid",
   gridTemplateRows: "auto 1fr auto",
   height: "100vh",
   backgroundColor: "#edf5e1"
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app_root}>
      <Header />
      <CustomEditor/>
      <CustomEditor/>
      <Footer/>
    </div>
  );
}

export default App;
