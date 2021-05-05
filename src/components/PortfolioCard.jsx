import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: 300,
    marginLeft: "15px",
    marginBottom: "90px",
  },
  media: {
    height: 140,
  },
});

export default function PortfolioCard(props) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.project.image_url}
            title={props.project.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.project.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href={props.project.repo_url}>Repo</a>
          </Button>
          <Button size="small" color="primary">
            <a href={props.project.live_url}>Live</a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
