import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const AuthProtector = () => {
    const auth = useAuth(); 
    if (!auth) {
        return <Navigate to={ '/signin'}
            replace/>;
    }
    return <Outlet/>;
};
