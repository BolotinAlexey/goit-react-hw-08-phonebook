import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';

import useAuth from 'hooks/useAuth';
const Home = lazy(() => import('pages/Home'));
const RegisterForm = lazy(() => import('pages/RegisterForm'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const { isRefreshing } = useAuth;

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    )
  );
}

export default App;