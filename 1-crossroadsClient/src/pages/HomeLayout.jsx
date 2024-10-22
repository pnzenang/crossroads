import { Outlet } from 'react-router-dom';
import { Banner, Footer, Navbar } from '../components';
import styled from 'styled-components';
import Slider from 'react-slick';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

const HomeLayout = () => {
  return (
    <>
      <ScrollToTop smooth color='#0891b2' width='40' />
      <div className=''>
        <Banner />
      </div>

      <Navbar />

      <section className='align-element '>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
const Wrapper = styled.section`
  .debut {
    background: red;
  }
`;
export default HomeLayout;
