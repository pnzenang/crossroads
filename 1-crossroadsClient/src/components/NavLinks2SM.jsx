import { NavLink } from 'react-router-dom';
import { useDashboardContext } from '../pages/DashboardLayout';
import links2 from '../utils/links2';

const NavLinks2SM = () => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className='nav-links pt-20'>
      {links2.map((link) => {
        const { text, path, icon } = link;
        const { userRole } = user;
        {
          if (
            userRole === 'user' &&
            (path === 'admin' ||
              path === 'all-packages-admin' ||
              // path === 'all-deceased-admin' ||
              path === 'register')
          )
            return;
        }
        return (
          <NavLink
            to={path}
            key={text}
            className='nav-link py-10 pl-9 text-primary'
            onClick={toggleSidebar}
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks2SM;
