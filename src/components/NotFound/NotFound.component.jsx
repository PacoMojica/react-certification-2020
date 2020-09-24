import React, { useEffect } from 'react';

function NotFound() {

  useEffect(() => {
    document.title = 'Not Found | WizeTube';

    return () => document.title = 'WizeTube';
  }, []);

  return <p>Not Found</p>;
}

export default NotFound;