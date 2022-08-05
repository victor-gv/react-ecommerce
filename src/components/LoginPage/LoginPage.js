import React, {useState} from "react";
import useCart from "../Hooks/useCart";
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


  const {login, userEmail, setUserEmail, userPassword, setUserPassword} = useAuthContext();
  const { users, setUsers, getUser, getAllUsers, addNewUser } = useFetch();

  const [newName, setNewName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");


/**
 * If the name of the input is email, set the userEmail state to the value of the input. If the name of
 * the input is password, set the userPassword state to the value of the input.
 * @param e - the event object
 */
  function handleInputChange(e) {
    const email = e.target.name === "email" ? e.target.value : userEmail;
    const password = e.target.name === "password" ? e.target.value : userPassword;
    setUserEmail(email);
    setUserPassword(password);
  }

  function handleSubmit(e) {
    e.preventDefault();
    users.forEach((user) => {
      if (user.email === userEmail && user.password === userPassword) {
        localStorage.setItem("user", JSON.stringify(user.username));
        login();
      }
    }
    );
  }

  function handleNewUser (e) {
    e.preventDefault();
    const name = e.target.name === "firstName" ? e.target.value : newName;
    const username = e.target.name === "username" ? e.target.value : newUsername;
    const email = e.target.name === "email" ? e.target.value : newEmail;
    const password = e.target.name === "password" ? e.target.value : newPassword;
    setNewName(name);
    setNewUsername(username);
    setNewEmail(email);
    setNewPassword(password);
  }

  
  function createNewUser (e) {
    e.preventDefault();
    const user = {
      name: newName,
      username: newUsername,
      email: newEmail,
      password: newPassword
  }
    getUser(user.email);
    if (user.email === newEmail) {
      addNewUser(user);
      localStorage.setItem("user", JSON.stringify(user.username));
      login();
    } else {
      alert("User already exists");
    }
  }


/* Destructuring the useCart hook. */
  const { addQuantity, substractQuantity, removeProduct, totalPrice, cart, totalQuantity} = useCart();



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
              <span><h2>LOG IN INTO YOUR ACCOUNT</h2></span>
              <p>Enter your email associated with your account and your password and you will comfortably and easily access your personal account.
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
                      <Avatar className="signin__icon" sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography component="h1" variant="h5">
                        Sign in
                      </Typography>
                      <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              onChange={handleInputChange}
                              value={userEmail}
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              onChange={handleInputChange}
                              value={userPassword}
                              autoComplete="new-password"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox value="allowExtraEmails" color="primary" />
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
                      <p>Create your Shophub account to take advantage of amazing discounts across all of our categories.</p>
                      <Box component="form" onSubmit={createNewUser} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="given-name"
                              name="firstName"
                              required
                              fullWidth
                              id="firstName"
                              label="First Name"
                              onChange={handleNewUser}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id="userName"
                              label="User Name"
                              name="username"
                              autoComplete="family-name"
                              onChange={handleNewUser}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              onChange={handleNewUser}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              autoComplete="new-password"
                              onChange={handleNewUser}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox value="allowExtraEmails" color="primary" />
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
