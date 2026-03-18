import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Redirect them to the /admin/login page, but save the current location they were trying to go to
        return <Navigate to="/admin/login" replace />;
    }

    return children;
}
