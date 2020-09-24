import React from 'react';
import clsx from 'clsx';

import Topbar from '../Topbar';
import Sidebar from '../Sidebar';

import useStyles from './Main.styles';

function Main({ withSidebar = true, noPadding = false, children }) {
  const classes = useStyles();
  const mainClasses = clsx(
    classes.content,
    withSidebar && classes.paddingLeft,
    noPadding && classes.noPadding,
    !withSidebar && !noPadding && classes.paddingBoth,
  );
  return (
    <>
      <Topbar />
      {withSidebar && <Sidebar />}
      <main className={mainClasses}>
        {children}
      </main>
    </>
  )
}

export default Main;