import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import Main from '../../components/Main';

import useStyles from './NotFound.styles';

function NotFound() {
  const classes = useStyles();

  useEffect(() => {
    document.title = 'Not Found | WizeTube';

    return () => document.title = 'WizeTube';
  }, []);

  return (
    <Main withSidebar={true}>
      <section className={classes.content}>
        <Typography variant='h4'>
          We couldn't find that page
        </Typography>
      </section>
    </Main>
  );
}

export default NotFound;