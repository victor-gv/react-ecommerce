import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import useCart from "../Hooks/useCart";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";
import ProductItem from "../ProducItem/ProductItem";
import emptyCartImg from "../../images/empty_cart.png";
import "./LoginPage.css";
import { useAuthContext } from "../../context/authContext";
import useFetch from "../Hooks/useFetch";

function LoginPage() {
  const { login } = useAuthContext();
  const { users, addNewUser } = useFetch();
  const { handleSubmit, control } = useForm();
  const { handleSubmit: handleSubmit2, control: control2, reset } = useForm();

  const [loginError, setLoginError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [newEmailError, setNewEmailError] = useState(false);

  const onSubmit = (data) => {
    users.forEach((user) => {
      if (user.email === data.email && user.password === data.password) {
        localStorage.setItem("user", JSON.stringify(user.username));
        setLoginError(false);
        login();
      } else {
        setLoginError(true);
        setTimeout(() => {
          setLoginError(false);
        }, 3000);
      }
    });
  };



  const onSubmitNewUser = (newUser) => {
    const emailExist = users.find((user) => user.email === newUser.emailNewUser);
    const usernameExist = users.find((user) => user.username === newUser.username);

    if (emailExist) {
      setNewEmailError(true);
      setTimeout(() => {
        setNewEmailError(false);
      } , 3000);
    }
    if (usernameExist) {
      setUsernameError(true);
      setTimeout(() => {
        setUsernameError(false);
      } , 3000);
    }
    if (!emailExist && !usernameExist) {
      const newUserData = {
        name: newUser.firstName,
        username: newUser.username,
        email: newUser.emailNewUser,
        password: newUser.passwordNewUser,
      };
      addNewUser(newUserData);
      localStorage.setItem("user", JSON.stringify(newUser.username));
      reset();
      login();
  };

  }



  /* Destructuring the useCart hook. */
  const {
    addQuantity,
    substractQuantity,
    removeProduct,
    totalPrice,
    cart,
    totalQuantity,
  } = useCart();

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
      <div className="loginPage__wrapper">
        <div id="loginPage">
          <Navbar
            SearchBar={false}
            isMainPage={false}
            IconsNavbar={true}
            totalQuantity={totalQuantity}
          />
          <section className="login__title">
            <span>
              <h2>LOG IN INTO YOUR ACCOUNT</h2>
            </span>
            <p>
              Enter your email associated with your account and your password
              and you will comfortably and easily access your personal account.
            </p>
          </section>
          <div className="login__container">
            <div className="login__signin">
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      className="signin__icon"
                      sx={{ m: 1, bgcolor: "secondary.main" }}
                    >
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign in
                    </Typography>
                    <Box
                      component="form"
                      onSubmit={handleSubmit(onSubmit)}
                      sx={{ mt: 3 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({
                              field: { onChange, value },
                              fieldState: { error },
                            }) => (
                              <TextField
                                autoFocus
                                autoComplete="email"
                                fullWidth
                                label="Email Address"
                                onChange={onChange}
                                value={value}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type="email"
                              />
                            )}
                            rules={{ required: "Email is required" }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({
                              field: { onChange, value },
                              fieldState: { error },
                            }) => (
                              <TextField
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                onChange={onChange}
                                value={value}
                                autoComplete="new-password"
                                error={!!error}
                                helperText={error ? error.message : null}
                              />
                            )}
                            rules={{
                              required: "Password is required",
                            }}
                          />
                          {loginError ? (
                            <Alert className="errorAlert" severity="error">
                              Email or password is incorrect.
                            </Alert>
                          ) : null}
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="allowExtraEmails"
                                color="primary"
                              />
                            }
                            label="Remember me"
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </div>
            <div className="login__signup">
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 5,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <h3>New to Shophub?</h3>
                    <p className="login__signup__text">
                      Create your Shophub account to take advantage of amazing
                      discounts across all of our categories.
                    </p>
                    <Box
                      component="form"
                      onSubmit={handleSubmit2(onSubmitNewUser)}
                      sx={{ mt: 3 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Controller
                            name="firstName"
                            control={control2}
                            defaultValue=""
                            render={({
                              field: { onChange, value },
                              fieldState: { error },
                            }) => (
                              <TextField
                                autoComplete="given-name"
                                fullWidth
                                label="First Name"
                                onChange={onChange}
                                value={value}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type="text"
                              />
                            )}
                            rules={{ required: "First name is required" }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Controller
                            name="username"
                            control={control2}
                            defaultValue=""
                            render={({
                              field: { onChange, value },
                              fieldState: { error },
                            }) => (
                              <TextField
                                fullWidth
                                label="User Name"
                                autoComplete="family-name"
                                onChange={onChange}
                                value={value}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type="text"
                              />
                            )}
                            rules={{
                              required: "User name is required",
                              pattern: {
                                value: /^[a-zA-Z0-9]{3,10}$/,
                                message:
                                  "User name must be alphanumeric between 3 and 10 characters.",
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Controller
                            name="emailNewUser"
                            control={control2}
                            defaultValue=""
                            render={({
                              field: { onChange, value },
                              fieldState: { error },
                            }) => (
                              <TextField
                                fullWidth
                                label="Email Address"
                                autoComplete="email"
                                onChange={onChange}
                                value={value}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type="email"
                              />
                            )}
                            rules={{ required: "Email is required" }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Controller
                            name="passwordNewUser"
                            control={control2}
                            defaultValue=""
                            render={({
                              field: { onChange, value },
                              fieldState: { error },
                            }) => (
                              <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={onChange}
                                value={value}
                                error={!!error}
                                helperText={error ? error.message : null}
                              />
                            )}
                            rules={{
                              required: "Password is required",
                              pattern: {
                                value:
                                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
                                message:
                                  "Password must include one number, one uppercase letter, one lowercase letter and one special character. The length must be between 8 and 20 characters.",
                              },
                            }}
                          />

                          {usernameError ? (
                            <Alert className="errorAlert" severity="error">
                              There is already an account with this username.
                            </Alert>
                          ) : null}
                          {newEmailError ? (
                            <Alert className="errorAlert" severity="error">
                              There is already an account associated with this
                              email.
                            </Alert>
                          ) : null}
                        </Grid>

                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="allowExtraEmails"
                                color="primary"
                              />
                            }
                            label="I want to receive inspiration, marketing promotions and updates via email."
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign Up
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </div>
          </div>
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
      </div>
    </>
  );
}

const theme = createTheme();

export default LoginPage;
