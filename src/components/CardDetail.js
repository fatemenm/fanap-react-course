import React, { useEffect, Redirect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    marginBottom: 20
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    width: "100%"
  }
}));
const CardDetail = ({ selectedCard }) => {
  const classes = useStyles();
  return (
    <div className="ui container card-detail">
      <CardContent>
        <Typography variant="h4" color="textBlack" component="p">
          {selectedCard.title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          by: {selectedCard.author}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          date: {selectedCard.created}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={selectedCard.cover}
        title={selectedCard.title}
      />
      <CardContent>
        <Typography variant="h5" color="textBlack" component="p">
          {selectedCard.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {selectedCard.body}
        </Typography>
      </CardContent>
      <CardContent>
        <Button component={Link} to={"/"} variant="contained" color="primary">
          BACK TO LIST
        </Button>
      </CardContent>
    </div>
  );
};

export default CardDetail;
