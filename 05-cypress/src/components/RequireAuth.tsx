import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  let isAuthenticated = !!window.localStorage.getItem('authToken');
  return isAuthenticated ? children : <Navigate to={'/login'} />;
}

export default RequireAuth;
