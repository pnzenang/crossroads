import { useEffect, useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { BsMoon, BsSun } from 'react-icons/bs';
import { toggleTheme } from '../features/themeSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Wrapper>
      <section className=''>
        <header className='bg-base-300 sticky top-0 flex items-center h-20 left-0 right-0 z-50  '>
          <div className='container mx-auto align-element  '>
            <div className='relative  flex items-center justify-between py-5 sm:py-6 lg:py-1 left-0 right-0  z-20'>
              <div className='w-60 max-w-full '>
                <Logo />
              </div>
              <div className='flex  w-full items-center justify-between px-4'>
                <div className='flex items-center justify-between'>
                  <button
                    onClick={() => setOpen(!open)}
                    className={` ${
                      open && 'navbarTogglerActive'
                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-2 ring-primary ring-2 lg:hidden`}
                  >
                    <FiMenu className='w-7 h-7 text-primary' />
                  </button>
                  <nav
                    className={`  absolute right-4 top-full z-1 w-full max-w-[250px] justify-center rounded-lg bg-base-200 px-6 py-5 shadow dark:bg-dark-2 lg:static lg:flex lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none ${
                      !open && 'hidden'
                    } `}
                  >
                    <ul className='block lg:flex'>
                      <ListItem NavLink='/'>Home</ListItem>
                      <ListItem NavLink='/services'>Our Services</ListItem>
                      <ListItem NavLink='/pricing'>Pricing</ListItem>
                      <ListItem NavLink='/contact'>Contact</ListItem>
                      <Link
                        to='/Login'
                        className='inline-block whitespace-nowrap rounded-md border border-primary px-7 py-3 text-base font-medium text-primary transition hover:bg-primary hover:text-white lg:hidden'
                      >
                        Sign In
                      </Link>
                    </ul>
                  </nav>
                  <div className='lg:hidden items-center flex gap-x-5 justify-between  lg:pr-0 '>
                    <div className='w-11 h-11  pl-10  rounded-xl hover:shadow-xl flex items-center justify-center hover:bg-base-100 '>
                      <label className='swap swap-rotate text-primary'>
                        <input type='checkbox' onChange={handleTheme} />
                        {/* sun icon */}
                        <BsMoon className='swap-on h-7 w-7 ' />
                        {/* moon icon */}
                        <BsSun className='swap-off h-7 w-7  ' />
                      </label>
                    </div>
                    <div className=' flex justify-end '>
                      <Link
                        to='/Login'
                        className=' whitespace-nowrap rounded-md border border-primary px-7  py-3 text-base font-medium text-primary transition hover:bg-primary hover:text-white hidden'
                      >
                        Sign In
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='lg:flex items-center justify-between   lg:pr-0  sm:hidden '>
                  <div className='w-11 h-11  mx-2  rounded-xl hover:shadow-xl sm:flex hidden items-center justify-center hover:bg-base-100 '>
                    <label className='swap swap-rotate text-primary'>
                      <input type='checkbox' onChange={handleTheme} />
                      {/* sun icon */}
                      <BsMoon className='swap-on h-7 w-7 ' />
                      {/* moon icon */}
                      <BsSun className='swap-off h-7 w-7  ' />
                    </label>
                  </div>
                  <div className=' sm:flex justify-end hidden'>
                    <Link
                      to='/Login'
                      className='inline-block whitespace-nowrap rounded-md border border-primary px-7 py-3 text-base font-medium text-primary transition hover:bg-primary hover:text-white '
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* background: green; */
  position: sticky;
  top: 0;
  z-index: 4;
  /* height: 7rem; */
  /* padding: 1rem; */
  display: grid;
  align-items: center;
  transition: var(--transition);
`;
export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <Link
        to={NavLink}
        className='flex py-4 font-medium text-base-content hover:text-primary lg:mx-3 lg:inline-flex lg:py-6'
      >
        {children}
      </Link>
    </li>
  );
};
