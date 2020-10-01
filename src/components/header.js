import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
// import { IconButton  } from '@material-ui/core';
// import { Button } from '@material-ui/core';
import { Typography  } from '@material-ui/core';

const Header = () => {
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" >Project Shop</Typography>
         
        </Toolbar>
      </AppBar>
    );
}

export default Header;
