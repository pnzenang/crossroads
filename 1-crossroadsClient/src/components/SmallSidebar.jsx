import styled from 'styled-components';
import { useDashboardContext } from '../pages/DashboardLayout';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import NavLinks2SM from './NavLinks2SM';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar
            ? 'sidebar-container show-sidebar bg-base-300'
            : 'sidebar-container bg-base-300'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header className=' scale-90'>
            <Logo className='logo  scale-100 ' />
          </header>
          <NavLinks2SM />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    transition: all 0.3s linear;
    display: grid;
    grid-template-columns: 1fr;
  }
  .show-sidebar {
    z-index: 99;
    transform: translateX(-100%);
  }
  .content {
    position: relative;
    padding: 4rem 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
  }

  .nav-links {
    /* padding-top: 2rem; */
    display: flex;
    flex-direction: column;
    color: #f27005;
  }
  .sidebar-links a {
    font-size: 2rem;
    text-transform: capitalize;
    transition: var(--transition);

    letter-spacing: var(--pacing);
    display: inline-block;
    margin-bottom: 1.5rem;
  }
  .sidebar-links a:hover {
    color: var(--clr-primary-5);
  }

  .close-btn {
    right: 1rem;
    background: transparent;
    border: transparent;
    font-size: 3rem;
    color: #bb2525;
    position: absolute;
    left: 1rem;
    top: 1rem;
  }
  .close-btn:hover {
    color: #e66b6b;
  }
  .nav-link {
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: 2rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: #e66b6b;
  }
  .logo {
    display: hidden;
  }
`;
export default SmallSidebar;
