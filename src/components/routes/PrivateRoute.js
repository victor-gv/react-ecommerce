import React from "react";
import {Navigate, Outlet} from 'react-router-dom';
import  {useAuthContext} from "../../context/authContext";

export default function PrivateRoute() {
    const {isAuthenticated} = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}