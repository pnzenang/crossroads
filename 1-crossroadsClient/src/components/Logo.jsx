import { NavLink } from 'react-router-dom';
import logo from '../assets/logisticsLogo.svg';

const Logo = () => {
  return (
    <NavLink to='/' className='flex   items-center '>
      <img src={logo} alt='logo' className='' />
    </NavLink>
  );
};
export default Logo;
