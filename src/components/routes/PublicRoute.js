import React from "react";
import {Navigate, Outlet} from 'react-router-dom';
import  {useAuthContext} from "../../context/authContext";

export default function PublicRoute() {
    const {isAuthenticated} = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to="/private" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}