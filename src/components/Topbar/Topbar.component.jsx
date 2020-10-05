import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip';

import MenuIcon from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';

import StylesProvider from '../../providers/Styles';
import { useSidemenu } from '../../providers/Sidemenu';
import { useSearch } from '../../providers/Search';

import UserActions from './UserActions.component';
import useStyles from './Toopbar.styles';

function Topbar() {
  const classes = useStyles();
  const { toggleDrawer } = useSidemenu();
  const { query, setQuery } = useSearch();
  const history = useHistory();

  const handleSearch = () => history.push(`/search/${query}`);
  const handleChange = event => setQuery(event.target.value);
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      history.push(`/search/${query}`);
    }
  }

  return (
    <StylesProvider classes={classes}>
      <div className={classes.gutter}></div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} component={RouterLink} color='inherit' to='/'>
            WizeTube
          </Typography>
          <div className={classes.search}>
            <InputBase
              className={classes.input}
              placeholder="Search"
              value={query}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
            <Tooltip title='Search'>
              <Button className={classes.button} onClick={handleSearch}>
                <Search />
              </Button>
            </Tooltip>
          </div>
          <div className={classes.actions}>
            <UserActions />
          </div>
        </Toolbar>
      </AppBar>
    </StylesProvider>
  );
}

export default Topbar;