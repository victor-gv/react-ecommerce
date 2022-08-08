import React, { useState } from "react";
import Navbar from "../Navbar/Navbar"
import useCart from "../Hooks/useCart";
import ProductItem from "../ProducItem/ProductItem";
import Cart from "../Cart/Cart";
import emptyCartImg from "../../images/empty_cart.png";
import Container from "@mui/material/Container";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@mui/material';
import {Formik} from 'formik';
import {Form} from 'formik';
import AddressForm from './Forms/AddressForm';
import PaymentForm from './Forms/PaymentForm';
import ReviewOrder from './ReviewOrder/ReviewOrder';
import CheckoutSuccess from './CheckoutSuccess/CheckoutSuccess';
import ValidationSchema from './FormModel/ValidationSchema';
import CheckoutFormModel from './FormModel/CheckoutFormModel';
import FormInitialValues from './FormModel/FormInitialValues';
import useStyles from './styles';
import './CheckoutPage.css'


const steps = ['Shipping address', 'Payment details', 'Review your order'];
const { formId, formField } = CheckoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <PaymentForm formField={formField} />;
    case 2:
      return <ReviewOrder />;
    default:
      return <div>Not Found</div>;
  }
}

const CheckoutPage = () => {


    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const currentValidationSchema = ValidationSchema[activeStep];
    const isLastStep = activeStep === steps.length - 1;
    
        /* Destructuring the useCart hook. */
        const {
          addQuantity,
          substractQuantity,
          removeProduct,
          totalPrice,
          cart,
          totalQuantity,
        } = useCart();
  
    function _sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    async function _submitForm(values, actions) {
      await _sleep(1000);
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
  
      setActiveStep(activeStep + 1);
    }
  
    function _handleSubmit(values, actions) {
      if (isLastStep) {
        _submitForm(values, actions);
      } else {
        setActiveStep(activeStep + 1);
        actions.setTouched({});
        actions.setSubmitting(false);
      }
    }
  
    function _handleBack() {
      setActiveStep(activeStep - 1);
    }

    


console.log(cart)
    const checkCart = () => {
      return cart.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          img={product.img}
          addQuantity={addQuantity}
          substractQuantity={substractQuantity}
          quantity={product.quantity}
          totalPrice={totalPrice}
          removeProduct={removeProduct}
        />
      ));
    };

    const ListLength = cart.length;

  return (
    <>
      <Navbar
          SearchBar={false}
          isMainPage={false}
          IconsNavbar={true}
          totalQuantity={totalQuantity}
      />
       <div className="checkout__wrapper">
         <Typography component="h1" variant="h4" align="center">
          Checkout
               </Typography>
               <Container className="checkout__container" component="main" maxWidth="lg">
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <CheckoutSuccess />
            ) : (
              <Formik
                initialValues={FormInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form id={formId}>
                    {_renderStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={_handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <div className={classes.wrapper}>
                        <Button
                          disabled={isSubmitting}
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.button}
                        >
                          {isLastStep ? 'Place order' : 'Next'}
                        </Button>
                        {isSubmitting && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </React.Fragment>
      </Container>
       </div>
              {ListLength === 0 ? (
          <Cart
            title={"Your cart is empty."}
            totalPrice={0}
            emptyCartImg={
              <img
                className="empty__cart"
                src={emptyCartImg}
                alt="Sad empty cart"
              />
            }
          />
        ) : (
          <Cart title={""} totalPrice={totalPrice} productItem={checkCart()} />
        )}
    </>
  );
};

export default CheckoutPage;
