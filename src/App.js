import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'components/Layout/Layout';
const Home = lazy(() => import('pages/Home'));
const RegisterForm = lazy(() => import('pages/RegisterForm'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));

// import AppBar from 'components/AppBar/AppBar';
// import ContactForm from 'components/ContactForm/ContactForm';
// import Filter from 'components/Filter/Filter';
// import ContactList from 'components/ContactList/ContactList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
