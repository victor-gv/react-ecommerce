import React, { useState, useEffect } from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@mui/material';
import ProductDetails from './ProductDetails';
import ShippingDetails from './ShippingDetails';
import PaymentDetails from './PaymentDetails';

export default function ReviewOrder() {
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
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <ProductDetails />
      <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
        <PaymentDetails 
          formValues={formValues}
          discountCode={discountActive ? '-10€' : '-'}
          />
      </Grid>
    </React.Fragment>
  );
}
