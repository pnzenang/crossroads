import styled from 'styled-components';
import { FaAlignLeft } from 'react-icons/fa6';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import { LogoutContainer } from '../components';

const Navbar2 = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper className='bg-base-200  sticky'>
      <div className=' h-20 nav-center '>
        <button
          type='button'
          className='toggle-btn text-primary'
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div className=' hidden  '>
          <Logo className='hidden w-1 ' />
        </div>
        <h4 className='logo-text'>dashboard</h4>
        <div className='btn-container'>
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1); */
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: sticky; */

  top: 0;

  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    /* color: #e89f0c; */
  }
  .logo-text {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .btn-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .btn {
  }
  @media screen and (min-width: 992px) {
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Navbar2;
