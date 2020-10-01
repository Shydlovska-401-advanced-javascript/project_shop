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
          <Typography variant="h6" >
            <h2>Project Shop</h2>
          </Typography>
         
        </Toolbar>
      </AppBar>
    );
}

export default Header;