import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Result(props) {
  const classes = useStyles();
  let isSong = props.result.album;
  let image, artistName, songName, releaseDate, genre;
  if (isSong) {
    image = props.result.album.images[0].url;
    artistName = props.result.artists[0].name;
    songName = props.result.name;
    releaseDate = props.result.album.release_date;
  } else {
    image = props.result.images[0].url;
    artistName = props.result.name;
    genre = props.result.genres[0];
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            Artist Name: {artistName}
          </Typography>
          <Typography gutterBottom>
            Genre: {genre}
            Song: {songName}
            Release Date: {releaseDate}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" href={props.result.href}>
          Visit Artist Spotify Profile
        </Button>
      </CardActions>
    </Card>

  )
}

export default Result;
