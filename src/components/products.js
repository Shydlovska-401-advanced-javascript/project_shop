import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../store/products';
import { addToCart } from '../store/cart';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Products = ({ getProducts, products, active, addToCart }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]); // is this what we listen for?

  const classes = useStyles();
  console.log('PRODUCTS>>>>>', products);
  console.log('ACTIVE CATEGORY', active);

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {products.map(product => {
            if (product.category === active) {
              return (
                <Grid item key={product.title} xs={12} sm={6} md={4}>
                  <Card className={classes.product}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.title}
                      </Typography>
                      <Typography>{product.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => addToCart(product)}
                      >
                        ADD TO CART
                      </Button>
                      <Button size="small" color="primary">
                        DETAILS
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            }
            // if ends here
          })}
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    active: state.categories.activeCategory,
  };
};

const mapDispatchToProps = { getProducts, addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
