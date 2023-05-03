import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn, isRefreshing } = useAuth();

  return isLoggedIn || isRefreshing ? Component : <Navigate to={redirectTo} />;
}
