import React, { useEffect, useContext } from "react";
import useFetch from "../../Hooks/useFetch";
import useCart from "../../Hooks/useCart";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@mui/material";
import ProductDetails from "./ProductDetails";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";
import { discountContext } from "../../../context/discountContext";

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  const discountActive = useContext(discountContext);
  const { getUser } = useFetch();
  const { totalPrice } = useCart();

  const username = JSON.parse(localStorage.getItem("user"));
  const user = getUser(username);

  useEffect(() => {
    if (user) {
      if (
        formValues.discountCode === `SHOPHUB20-${username}` &&
        user.discountActivated === false
      ) {
        discountActive.setDiscountActive(true);
      } else {
        discountActive.setDiscountActive(false);
      }
    }
  }, [formValues.discount, user]);


  const checkDiscount = () => {
   //return '-10€' if discountActive.discountActive === true && user.discountActivated === false. If discountActive.discountActive === true but user.discountActivated === true return 'code not valid or already used'. if discountActive.discountActive === false return 'no discount'.
   if (user) {
      if (
        formValues.discountCode === `SHOPHUB20-${username}` &&
        user.discountActivated === false
      ) {
        return `-10€`;
      } else if (
        formValues.discountCode === `SHOPHUB20-${username}` &&
        user.discountActivated === true
      ){
        return `Code already used`;
      } else if (
        formValues.discountCode !== `SHOPHUB20-${username}` && formValues.discountCode !== ''
      ) {
        return `Code not valid`;
      } else {
        return `No discount applied`;
      }
   }

  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <ProductDetails
        totalPrice={
          discountActive.discountActive ? Number(totalPrice) - 10 + '€': Number(totalPrice) + '€'
        }
      />
      <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
        <PaymentDetails
          formValues={formValues}
          discountCode={checkDiscount()}
        />
      </Grid>
    </React.Fragment>
  );
}
