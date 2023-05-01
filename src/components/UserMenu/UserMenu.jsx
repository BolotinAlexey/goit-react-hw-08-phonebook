import useAuth from 'hooks/useAuth';

import { ContainerUserMenu } from './UserMenu.styled.js';

export default function UserMenu() {
  const { user } = useAuth();
  return (
    <ContainerUserMenu>
      <p>Hi, {user.name} !</p>
      <button type="button">Log Out</button>
    </ContainerUserMenu>
  );
}
