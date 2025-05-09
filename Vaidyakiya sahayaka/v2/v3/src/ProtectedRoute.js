import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Use the AuthContext

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    // If not authenticated, redirect to login page
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // If authenticated, render the child routes (UserDashboard, etc.)
    return <Outlet />;
};

export default ProtectedRoute;
