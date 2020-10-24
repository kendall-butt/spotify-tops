import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

function Result(props) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  let isSong = props.result.album;
  let image, heading, overline, genre;
  if (isSong) {
    image = props.result.album.images[0].url;
    overline = props.result.artists[0].name;
    heading = props.result.name;
    // releaseDate = props.result.album.release_date;
  } else {
    image = props.result.images[0].url;
    heading = props.result.name;
    overline = props.result.genres[0];
  }
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={cx(styles.media, mediaStyles.root)}
          image={image}
        />
        <CardContent>
          <TextInfoContent
            classes={textCardContentStyles}
            heading={heading}
            overline={overline}
            // body={genre}
          />
        </CardContent>
    </Card>

  )
}

export default Result;
