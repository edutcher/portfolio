import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "91vh",
    backgroundImage:
      "url(https://res.cloudinary.com/dd9hrrpch/image/upload/v1620178274/Sl3KP_rc0wew.jpg)",
  },
  main: {
    textAlign: "center",
  },
  header: {
    color: "white",
    paddingTop: "150px",
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.main}>
        <div className={classes.header}>
          <h1>Hi, I'm Ethan</h1>
          <h3>I make websites</h3>
        </div>
      </Container>
    </div>
  );
}
