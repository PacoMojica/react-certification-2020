import React, { useRef, useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';

import ChannelInfo from './ChannelInfo.component';

import formatDescription from '../../utils/formatDescription';

import { useStyles } from '../../providers/Styles';

function Description({ descriptionText }) {
  const { classes } = useStyles();
  const [showMore, setShowMore] = useState(false);
  const [isOverflown, setIsOverflown] = useState(false);
  const descriptionRef = useRef(null);

  const formattedDescription = useCallback(() => (
    formatDescription(descriptionText)
  ), [descriptionText]);

  const toggleDescription = () => setShowMore(!showMore);

  useEffect(() => {
    const descriptionHeight = descriptionRef.current.clientHeight;
    const maxHeight = Math.round(window.innerHeight * 0.16);

    if (descriptionHeight > maxHeight) {
      setIsOverflown(true);
    }
  }, []);

  return (
    <div className={classes.descriptionSection}>
      <div className={clsx(classes.description, isOverflown && !showMore && classes.limitedHeight)} ref={descriptionRef}>
        <ChannelInfo />
        <span className={classes.descriptionText}>
          {formattedDescription()}
        </span>
      </div>
      {isOverflown && (
        <div>
          <Button variant='text' className={classes.showMore} onClick={toggleDescription}>
            Show {showMore ? 'less' : 'more'}
          </Button>
        </div>
      )}
    </div>
  )
}

export default Description;