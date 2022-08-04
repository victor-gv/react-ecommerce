import {useEffect} from 'react'
import { useAuthContext } from '../../context/authContext';

function Logout() {
    const { logout } = useAuthContext();
    useEffect(() => {
        logout();
    });
    return null;
}

export default Logout