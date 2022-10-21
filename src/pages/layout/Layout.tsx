import { GroupIcon, LogoutIcon, ProfileIcon } from '@assets/svgs';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>header</header>
      <ProfileIcon />
      <GroupIcon />
      <LogoutIcon />
      <main>
        <Outlet />
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default Layout;
