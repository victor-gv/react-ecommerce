import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import useCart from "../../Hooks/useCart";




function ProductDetails(props) {
  /* Destructuring the useCart hook. */
  const { cart } = useCart();


  return (
    <List disablePadding>
      {cart.map((product) => (
        <ListItem className="productDetails__container" key={product.title}>
          <div className="productDetails__img">
            <img src={product.img} alt={product.title} />
          </div>
          <ListItemText className="productDetails__title" primary={product.title} secondary={product.category} />
          <Typography className="productDetails__price" variant="body2">
            {product.price}€
          </Typography>
        </ListItem>
      ))}
      <ListItem className="productDetails__total">
        <ListItemText primary="Total" />
        <Typography variant="subtitle1">{props.totalPrice}</Typography>
      </ListItem>
    </List>
  );
}

export default ProductDetails;
