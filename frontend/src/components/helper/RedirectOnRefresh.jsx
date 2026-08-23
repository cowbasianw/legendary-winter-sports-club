import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RedirectOnRefresh = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the current location is not the home page and if the page was just refreshed
        if (location.pathname !== '/' && !sessionStorage.getItem('visited')) {
            // Set a flag in sessionStorage indicating the user has visited the site
            sessionStorage.setItem('visited', 'true');
            // Redirect to the home page
            navigate('/');
        }
    }, [location, navigate]);

    return null; // This component doesn't render anything
};

export default RedirectOnRefresh;
