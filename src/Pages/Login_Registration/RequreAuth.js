import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { Skeleton} from "antd";
import auth from '../../firebase.init';

const RequreAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
   if(loading) {
    return <Skeleton />;
   }
 
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequreAuth;