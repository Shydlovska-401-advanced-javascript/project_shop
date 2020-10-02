import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import { changeCategory } from '../store/categories';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  categories: {
    margin: theme.spacing(3),
  },
}));

const Categories = props => {
  const classes = useStyles();

  return (
    <div className="categories">
      <AppBar position="static">
        <Toolbar> 
          <Breadcrumbs separator='|' aria-label="breadcrumb">
          {props.categories.categories.map(category => {
            const isActive = category.name === props.categories.activeCategory.name
            return (
            <Link key={category._id} color={isActive ? 'primary' : 'inherit'} href="#" onClick={() => props.changeCategory(category.name)}>
              {category.displayName || category.name}
          </Link>
          )})}
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = { changeCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
