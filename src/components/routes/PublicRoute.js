import React from "react";
import {Navigate, Outlet, useParams} from 'react-router-dom';
import  {useAuthContext} from "../../context/authContext";
import useFetch from "../Hooks/useFetch";

export default function PublicRoute() {
    const {isAuthenticated} = useAuthContext();
    const params = useParams();
    const url = window.location.href;
    const { products } = useFetch();



    if (isAuthenticated) {
        if (!url.includes('/private') && url.includes('product/')){
            if (!products.find(product => product.title === params.title)){
                return <Navigate to="/error" />;
            } else {
                return <Navigate to={`/private/product/${params.title}`} />;
            }
        } else {
            return <Navigate to="/private" />;
        }
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}