import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
    const { isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            //Redirect to the home page after successful authentication
            navigate('/');
        }
    }, [isLoading, isAuthenticated, navigate]);
    return <div>Loading...</div>;
};

export default Callback;