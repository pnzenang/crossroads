import React from 'react';
import freight from '../assets/freight3.png';

const About4 = () => {
  return (
    <>
      <section className=' py-20 '>
        <div className='container flex flex-col justify-center rounded-lg mx-auto sm:py-12 lg:py-24 p-10 lg:flex-row lg:justify-between bg-base-300'>
          <div className='flex flex-col justify-center   rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
            <h1 className='text-2xl text-primary font-bold leading-none sm:text-6xl'>
              CROSSROADS LOGISTICS
            </h1>
            <h2 className='mt-6 mb-8  text-xl md:text-3xl sm:mb-12 leading-10 tracking-widest text-center md:text-left'>
              The best way to ship packages from the US to Cameroon, Gabon,
              Equatorial Guinea, Congo and many of their neighboring countries.
            </h2>
          </div>
          <div className=' items-center justify-center  hidden md:block place-content-center '>
            <img src={freight} alt='' className='  object-fill' />
          </div>
        </div>
      </section>
    </>
  );
};

export default About4;
