import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import { url } from "inspector";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    marginBottom: 20
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    width: "100%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));
// <h1>{card.title}</h1>

const CardItem = ({ card, onCardSelect }) => {
  const classes = useStyles();
  // const preventDefault = event => event.preventDefault();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {card.id}
          </Avatar>
        }
        title={card.title}
        subheader={card.created}
      />
      <CardMedia
        className={classes.media}
        image={card.cover}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {card.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <Link
            to={`detail/${card.id}`}
            onClick={() => {
              onCardSelect(card);
            }}
          >
            {" "}
            READ MORE
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
