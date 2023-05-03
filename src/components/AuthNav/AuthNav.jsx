import { NavLink } from 'react-router-dom';
import MUI from 'components/MUI.js';

export default function AuthNav() {
  return (
    <>
      <NavLink to="/register">
        <MUI.Button sx={{ color: 'white' }} variant="outlined">
          Register
        </MUI.Button>
      </NavLink>

      <NavLink to="/login">
        <MUI.Button sx={{ color: 'white' }} variant="outlined">
          LogIn
        </MUI.Button>
      </NavLink>
    </>
  );
}
