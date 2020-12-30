import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import HomeIcon from '@material-ui/icons/Home';

const Header=()=> {
  return (
    <div className="header">
      <AppBar color="primary">
        <HomeIcon color="secondary"/>
      </AppBar>
      </div>
  );
}

export default Header;