import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PortfolioCard from "../components/PortfolioCard";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#02050a",
  },
  main: {
    textAlign: "center",
  },
  header: {
    color: "white",
    paddingTop: "150px",
  },
}));

const portfolioItems = [
  {
    image_url:
      "https://github.com/edutcher/Day_Planner/raw/main/assets/planner.jpg",
    title: "Day Planner",
    live_url: "https://edutcher.github.io/Day_Planner/",
    repo_url: "https://github.com/edutcher/Day_Planner",
  },
  {
    image_url:
      "https://res.cloudinary.com/dd9hrrpch/image/upload/v1620183767/weatherDash_d6yim4.jpg",
    title: "Weather Dashboard",
    live_url: "https://edutcher.github.io/Weather_Dash/",
    repo_url: "https://github.com/edutcher/Weather_Dash",
  },
  {
    image_url:
      "https://github.com/m-whitmer/Project_2/raw/main/public/assets/img/shoeing.png",
    title: "Shoe Store",
    live_url: "https://vast-beyond-73038.herokuapp.com/",
    repo_url: "https://github.com/edutcher/Shoe_thing",
  },
  {
    image_url:
      "https://res.cloudinary.com/dd9hrrpch/image/upload/v1620185457/trivia_zkkqwj.jpg",
    title: "Trivia Game",
    live_url: "https://edutcher.github.io/Trivia_Game/",
    repo_url: "https://github.com/edutcher/Trivia_Game",
  },
  {
    image_url:
      "https://res.cloudinary.com/dd9hrrpch/image/upload/v1620185457/trivia_zkkqwj.jpg",
    title: "Snap That",
    live_url: "",
    repo_url: "https://github.com/edutcher/Snap_That",
  },
  {
    image_url:
      "https://res.cloudinary.com/dd9hrrpch/image/upload/v1620185842/empManager_dfrbyy.jpg",
    title: "Employee Manager",
    live_url: "https://fathomless-anchorage-55810.herokuapp.com/index",
    repo_url: "https://github.com/edutcher/Employee_Manager",
  },
];

export default function PortfolioPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.header}>
          <h1>This is a Portfolio</h1>
        </div>
        <Grid container>
          {portfolioItems.map((item) => (
            <PortfolioCard project={item} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
