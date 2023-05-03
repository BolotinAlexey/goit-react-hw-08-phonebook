import { NavLink } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

import MUI from 'components/MUI';

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <MUI.Toolbar>
      <NavLink to="/">
        <MUI.Button sx={{ color: 'white' }} variant="outlined">
          Home
        </MUI.Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <MUI.Button sx={{ color: 'white' }} variant="outlined">
            Contacts
          </MUI.Button>
        </NavLink>
      )}
    </MUI.Toolbar>
  );
}
