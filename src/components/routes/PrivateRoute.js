import React from "react";
import {Navigate, Outlet, useParams} from 'react-router-dom';
import  {useAuthContext} from "../../context/authContext";
import useFetch from "../Hooks/useFetch";



export default function PrivateRoute() {
    const {isAuthenticated} = useAuthContext();
    const url = window.location.href;
    const params = useParams();
    const { products } = useFetch();


    if (!isAuthenticated) {
        if (url.includes('product/')){
            //if params.title don't match any product, redirect to error page
            if (!products.find(product => product.slug === params.title)){
                return <Navigate to="/error" />;
            } else {
                 return <Navigate to={`/product/${params.title}`} />;
            }
        } else {
            return <Navigate to="/login" />;
        }
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}