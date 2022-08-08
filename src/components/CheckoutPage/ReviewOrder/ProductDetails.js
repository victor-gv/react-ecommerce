import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import useCart from '../../Hooks/useCart';
import useStyles from './styles';




const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' }
];

function ProductDetails() {

          /* Destructuring the useCart hook. */
          const {
            totalPrice,
            cart,
          } = useCart();

  const classes = useStyles();
  return (
    <List disablePadding>
      {cart.map(product => (
        <ListItem className={classes.listItem} key={product.title}>
          <ListItemText primary={product.title} secondary={product.category} />
          <Typography variant="body2">{product.price}€</Typography>
        </ListItem>
      ))}
      <ListItem className={classes.listItem}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" className={classes.total}>
          {totalPrice}€
        </Typography>
      </ListItem>
    </List>
  );
}

export default ProductDetails;
