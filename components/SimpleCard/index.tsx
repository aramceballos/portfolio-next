import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

type SimpleCardProps = {
  name: string;
  src: string;
};

const SimpleCard = (props: SimpleCardProps): JSX.Element => {
  const { name, src } = props;

  const classes = useStyles();

  const handleClick = () => {
    const win = window.open(src, '_blank')!;
    win.focus();
  };

  return (
    <>
      <div className='container' onClick={handleClick}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={src} title={name} />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <style jsx>{`
        .container {
          width: 345px;
          margin: 20px auto;
        }
      `}</style>
    </>
  );
};

export default SimpleCard;
