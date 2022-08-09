import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import useCart from "../../Hooks/useCart";
import { useFormikContext } from 'formik';
import { useEffect } from "react";



function ProductDetails() {
  /* Destructuring the useCart hook. */
  const { totalPrice, cart } = useCart();
  const { values: formValues } = useFormikContext();

  const [discountActive, setDiscountActive] = useState(false);

  useEffect(() => {
    if (formValues.discountCode === "SHOPHUB20") {
      setDiscountActive(true);
    } else {
      setDiscountActive(false);
    }
  } , [formValues.discount]);

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
        <Typography variant="subtitle1" >
          {discountActive ? totalPrice - 10 : totalPrice}€
        </Typography>
      </ListItem>
    </List>
  );
}

export default ProductDetails;
