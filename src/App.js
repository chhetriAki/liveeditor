import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header'
import Footer from './components/Footer'

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
      <div>Body</div>
      <Footer/>
    </div>
  );
}

export default App;
