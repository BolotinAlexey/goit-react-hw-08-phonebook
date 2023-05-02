import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations.js';

import { ContainerUserMenu } from './UserMenu.styled.js';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <ContainerUserMenu>
      <p>Hi, {user} !</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </ContainerUserMenu>
  );
}
