import React from 'react';
import Logo from './Logo';
import { FaLocationDot } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';
import { FaPhoneVolume } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Footer2 = () => {
  return (
    <footer
      className='relative z-1 bg-primary align-element
     pt-10 dark:bg-dark lg:pt-10  '
    >
      <div className='container mx-auto text-white '>
        <div className='-mx-4 flex flex-wrap items-center justify-center'>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-12 w-full'>
              <div className='flex justify-center'>
                <FaPhoneVolume className='w-7 h-7 mx-2' />
                <div className=''>
                  <h5 className='mb-4 text-lg font-semibold text-dark dark:text-white'>
                    Our Phone Number
                  </h5>
                  <p className='text-base text-body-color dark:text-dark-6'>
                    (913)-999-5401
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-12 w-full'>
              <div className='flex justify-center'>
                <FaEnvelope className='w-7 h-7 mx-2' />
                <div>
                  <h5 className='mb-4 text-lg font-semibold text-dark dark:text-white'>
                    How Can We Help?
                  </h5>
                  <p className='mb-2 text-base text-body-color dark:text-dark-6'>
                    contact@crosslog.org
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-12 w-full'>
              <div className='flex justify-center'>
                <FaLocationDot className='w-7 h-7 mx-2' />
                <div>
                  <h5 className='mb-4 text-lg font-semibold text-dark dark:text-white'>
                    Our Warehouse
                  </h5>
                  <p className='text-base text-body-color dark:text-dark-6'>
                    9157 Whiskey Bottom Rd <br /> Laurel MD 20723
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-stroke py-2 sm:px-40 dark:border-dark-3 align-element '>
        <div className='container mx-auto'>
          <div className='-mx-4 flex flex-wrap justify-between items-center'>
            <div className=' '>
              <div className='w-full p-3 text-center lg:text-left'>
                <Logo />
              </div>
            </div>
            <div className=' '>
              <div className='px-5 text-center'>
                <p className='text-base text-body-color text-white'>
                  © {new Date().getFullYear()} Crossroads Logistics LLC. | All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
