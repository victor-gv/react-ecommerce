import React from "react";
import MainPage from "./components/MainPage/MainPage";
import Sneakers from "./components/Sneakers/Sneakers";
import LoginPage from "./components/LoginPage/LoginPage";
import FavsPage from "./components/FavsPage/FavsPage";
import ProductPage from "./components/ProductPage/ProductPage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SearchCallProvider from "./context/searchContext";
import { AuthContextProvider } from "./context/authContext";
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import Logout from "./components/Logout/Logout";
import DiscountContextProvider from "./context/discountContext";
import Clothes from "./components/Clothes/Clothes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <SearchCallProvider>
          <DiscountContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PublicRoute />}>
                <Route index element={<MainPage />} />
                <Route path="sneakers" element={<Sneakers />} />
                <Route path="clothes" element={<Clothes />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/favs" element={<FavsPage />} />
                <Route path="/product/:title" element={<ProductPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
              <Route path="/private" element={<PrivateRoute /> }>
                <Route index element={<MainPage />} />
                <Route path="sneakers" element={<Sneakers />} />
                <Route path="clothes" element={<Clothes />} />
                <Route path="/private/checkout" element={<CheckoutPage />} />
                <Route path="/private/logout" element={<Logout />} />
                <Route path="/private/favs" element={<FavsPage />} />
                <Route path="/private/product/:title" element={<ProductPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
          </DiscountContextProvider>
        </SearchCallProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
