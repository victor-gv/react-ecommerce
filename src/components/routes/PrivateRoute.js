import React from "react";
import {Navigate, Outlet, useParams} from 'react-router-dom';
import  {useAuthContext} from "../../context/authContext";



export default function PrivateRoute() {
    const {isAuthenticated} = useAuthContext();
    const url = window.location.href;
    const params = useParams();
    

    if (!isAuthenticated) {
        if (url.includes('product/')){
            return <Navigate to={`/product/${params.title}`} />;
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