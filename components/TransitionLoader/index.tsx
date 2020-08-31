import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    progress: {
      color: 'white',
    },
  }),
);

function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: any) => url !== router.pathname && setOpen(true);
    const handleComplete = (url: any) =>
      url === router.pathname && setOpen(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    <Modal
      className={classes.modal}
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open}>
        <CircularProgress
          className={classes.progress}
          style={{ width: 60, height: 60 }}
        />
      </Fade>
    </Modal>
  );
}

export default TransitionsModal;
