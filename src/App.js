import React from "react";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/LoginPage/LoginPage";
import FavsPage from "./components/FavsPage/FavsPage";
import ProductPage from "./components/ProductPage/ProductPage";
import PrivateArea from "./components/PrivateArea/PrivateArea";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SearchCallProvider from "./context/searchContext";
import { AuthContextProvider } from "./context/authContext";
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    <>
      <AuthContextProvider>
        <SearchCallProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PublicRoute />}>
                <Route index element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/favs" element={<FavsPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
              <Route path="/private" element={<PrivateRoute /> }>
                <Route index element={<PrivateArea />} />
                <Route path="/private/home" element={<MainPage />} />
                <Route path="/private/logout" element={<Logout />} />
                <Route path="/private/favs" element={<FavsPage />} />
                <Route path="/private/product/:id" element={<ProductPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SearchCallProvider>
      </AuthContextProvider>
      <Footer />
    </>
  );
}

export default App;
