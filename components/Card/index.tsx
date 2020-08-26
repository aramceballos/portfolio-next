import React from 'react';
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

type MediaCardProps = {
  title: string;
  description?: string;
  src?: string;
  repository?: string;
  url?: string;
};

const MediaCard = (props: MediaCardProps) => {
  const { title, description, src, repository, url } = props;

  const classes = useStyles();

  const handleClick = (link: string) => {
    const win = window.open(link, '_blank')!;
    win.focus();
  };

  return (
    <>
      <div className='mediacard-container'>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={src} title={title} />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {url && (
              <Button
                size='small'
                color='primary'
                onClick={() => handleClick(url.toString())}>
                Go to page
              </Button>
            )}
            {repository && (
              <Button
                size='small'
                color='primary'
                onClick={() => handleClick(repository.toString())}>
                Repository
              </Button>
            )}
          </CardActions>
        </Card>
      </div>

      <style jsx>{`
        .mediacard-container {
          width: 345px;
          margin: 20px auto;
        }
      `}</style>
    </>
  );
};

export default MediaCard;
