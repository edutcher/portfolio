import React from "react";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "92vh",
    backgroundColor: "#02050a",
  },
  main: {
    textAlign: "center",
    height: "200px",
  },
  header: {
    color: "white",
  },
  space: {
    height: "100px",
  },
}));

export default function ContactPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.space}></div>
        <Paper className={classes.main}>
          <h3>
            {" "}
            <a href="https://github.com/edutcher">Github</a>{" "}
          </h3>
          <h3>
            {" "}
            <a href="https://www.linkedin.com/in/ethan-dutcher-905178ab/">
              LinkedIn
            </a>
          </h3>
          <h3>email: edutcher@gmail.com</h3>
        </Paper>
      </Container>
    </div>
  );
}
