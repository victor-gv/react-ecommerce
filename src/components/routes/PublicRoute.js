import React from "react";
import {Navigate, Outlet, useParams} from 'react-router-dom';
import  {useAuthContext} from "../../context/authContext";

export default function PublicRoute() {
    const {isAuthenticated} = useAuthContext();
    const params = useParams();
    const url = window.location.href;


    if (isAuthenticated) {
        if (!url.includes('/private') && url.includes('product/')){
            return <Navigate to={`/private/product/${params.title}`} />;
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