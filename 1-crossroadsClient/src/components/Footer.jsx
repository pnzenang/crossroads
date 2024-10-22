import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  
} from 'react-icons/fa6';

const Footer5 = () => {
  return (
    <footer className='relative z-1 bg-[#090E34] px-5'>
      <div className='container mx-auto pt-14 lg:pt-20 align-element'>
        <div className='-mx-4 flex flex-wrap '>
          <div className='w-full px-4 sm:w-2/3 lg:w-4/12 xl:w-3/12'>
            <div className='mb-10 w-full'>
              <Logo />
              <p className='mb-7 text-base text-gray-7'>
                We forward your package the right way.
              </p>
              <div className='-mx-3 flex items-center gap-x-5'>
                <Link to={'#'}>
                  <FaFacebookF className='w-8 f-8 text-base-content' />
                </Link>
                <Link to='#'>
                  <FaXTwitter className='w-8 f-8 text-base-content' />
                </Link>
                <Link to='#'>
                  <FaInstagram className='w-8 f-8 text-base-content' />
                </Link>
                <Link to='#'>
                  <FaLinkedinIn className='w-8 f-8 text-base-content' />
                </Link>
              </div>
            </div>
          </div>

          <div className='w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12'>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-white'>
                Latest blog
              </h4>
              <a
                href='/#'
                className='mb-8 flex items-center text-gray-7 hover:text-white'
              >
                <p className='text-base'>
                  I think really important to design...
                </p>
              </a>
              <a
                href='/#'
                className='mb-8 flex items-center text-gray-7 hover:text-white'
              >
                <p className='text-base'>
                  Recognizing the need is the primary...
                </p>
              </a>
            </div>
          </div>

          <LinkGroup header='Company'>
            <NavLink link='/#' label='About company' />
            <NavLink link='/#' label='Company services' />
            <NavLink link='/#' label='Job opportunities' />
            <NavLink link='/#' label='Creative people' />
          </LinkGroup>
          <LinkGroup header='Customer'>
            <NavLink link='/#' label='Client support' />
            <NavLink link='/#' label='Latest news' />
            <NavLink link='/#' label='Company story' />
            <NavLink link='/#' label='Pricing packages' />
          </LinkGroup>

          <div className='w-full px-4 sm:w-1/2 lg:w-4/12 2xl:w-2/12'>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-white'>
                Contact Info
              </h4>
              <ul>
                <li>
                  <p className='mb-3 inline-flex items-start text-base leading-loose text-gray-7'>
                    <span className='mr-3 mt-[10px]'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M17.5 3H2.5C1.4375 3 0.53125 3.875 0.53125 4.96875V15.0937C0.53125 16.1562 1.40625 17.0625 2.5 17.0625H17.5C18.5625 17.0625 19.4687 16.1875 19.4687 15.0937V4.9375C19.4687 3.875 18.5625 3 17.5 3ZM17.5 4.40625C17.5312 4.40625 17.5625 4.40625 17.5937 4.40625L10 9.28125L2.40625 4.40625C2.4375 4.40625 2.46875 4.40625 2.5 4.40625H17.5ZM17.5 15.5938H2.5C2.1875 15.5938 1.9375 15.3438 1.9375 15.0312V5.78125L9.25 10.4688C9.46875 10.625 9.71875 10.6875 9.96875 10.6875C10.2187 10.6875 10.4687 10.625 10.6875 10.4688L18 5.78125V15.0625C18.0625 15.375 17.8125 15.5938 17.5 15.5938Z'
                          fill='white'
                        />
                      </svg>
                    </span>
                    info@yourmail.com
                  </p>
                </li>

                <li>
                  <p className='mb-3 inline-flex items-start text-base leading-loose text-gray-7'>
                    <span className='mr-3 mt-[10px]'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clipPath='url(#clip0_941_16074)'>
                          <path
                            d='M15.1875 19.4688C14.3437 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84374 16.375 5.74999 14.2813C3.65624 12.1875 2.03124 9.84377 1.18749 7.68752C0.249989 5.37502 0.343739 3.46877 1.43749 2.40627C1.46874 2.37502 1.53124 2.34377 1.56249 2.31252L4.18749 0.750025C4.84374 0.375025 5.68749 0.562525 6.12499 1.18752L7.96874 3.93753C8.40624 4.59378 8.21874 5.46877 7.59374 5.90627L6.46874 6.68752C7.28124 8.00002 9.59374 11.2188 13.2812 13.5313L13.9687 12.5313C14.5 11.7813 15.3437 11.5625 16.0312 12.0313L18.7812 13.875C19.4062 14.3125 19.5937 15.1563 19.2187 15.8125L17.6562 18.4375C17.625 18.5 17.5937 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37499 3.46878C1.78124 4.12503 1.81249 5.46877 2.49999 7.18752C3.28124 9.15627 4.78124 11.3125 6.74999 13.2813C8.68749 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8437 18.2188 16.5312 17.625L18.0312 15.0625C18.0312 15.0313 18.0312 15.0313 18.0312 15L15.2812 13.1563C15.2812 13.1563 15.2187 13.1875 15.1562 13.2813L14.4687 14.2813C14.0312 14.9063 13.1875 15.0938 12.5625 14.6875C8.62499 12.25 6.18749 8.84377 5.31249 7.46877C4.90624 6.81252 5.06249 5.96878 5.68749 5.53128L6.81249 4.75002V4.71878L4.96874 1.96877C4.96874 1.93752 4.93749 1.93752 4.90624 1.96877L2.37499 3.46878Z'
                            fill='white'
                          />
                          <path
                            d='M18.3125 8.90627C17.9375 8.90627 17.6562 8.62502 17.625 8.25002C17.375 5.09377 14.7812 2.56252 11.5937 2.34377C11.2187 2.31252 10.9062 2.00002 10.9375 1.59377C10.9687 1.21877 11.2812 0.906272 11.6875 0.937522C15.5625 1.18752 18.7187 4.25002 19.0312 8.12502C19.0625 8.50002 18.7812 8.84377 18.375 8.87502C18.375 8.90627 18.3437 8.90627 18.3125 8.90627Z'
                            fill='white'
                          />
                          <path
                            d='M15.2187 9.18749C14.875 9.18749 14.5625 8.93749 14.5312 8.56249C14.3437 6.87499 13.0312 5.56249 11.3437 5.34374C10.9687 5.31249 10.6875 4.93749 10.7187 4.56249C10.75 4.18749 11.125 3.90624 11.5 3.93749C13.8437 4.21874 15.6562 6.03124 15.9375 8.37499C15.9687 8.74999 15.7187 9.09374 15.3125 9.15624C15.25 9.18749 15.2187 9.18749 15.2187 9.18749Z'
                            fill='white'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_941_16074'>
                            <rect width='20' height='20' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    +885 543 4565
                  </p>
                </li>

                <li>
                  <p className='mb-3 inline-flex items-start text-base leading-loose text-gray-7'>
                    <span className='mr-3 mt-[10px]'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10 0.5625C5.6875 0.5625 2.1875 3.9375 2.1875 8.09375C2.1875 11.25 6.375 16.25 8.84375 18.9375C9.15625 19.2813 9.5625 19.4375 10 19.4375C10.4375 19.4375 10.8438 19.25 11.1562 18.9375C13.625 16.25 17.8125 11.25 17.8125 8.09375C17.8125 3.9375 14.3125 0.5625 10 0.5625ZM10.125 18C10.0625 18.0625 9.96875 18.0625 9.875 18C6.84375 14.6875 3.59375 10.375 3.59375 8.09375C3.59375 4.71875 6.46875 1.96875 10 1.96875C13.5312 1.96875 16.4062 4.71875 16.4062 8.09375C16.4062 10.375 13.1562 14.6875 10.125 18Z'
                          fill='white'
                        />
                        <path
                          d='M10 4.90625C8.125 4.90625 6.59375 6.4375 6.59375 8.3125C6.59375 10.1875 8.125 11.75 10 11.75C11.875 11.75 13.4062 10.2188 13.4062 8.34375C13.4062 6.46875 11.875 4.90625 10 4.90625ZM10 10.3438C8.875 10.3438 8 9.4375 8 8.34375C8 7.25 8.90625 6.34375 10 6.34375C11.0937 6.34375 12 7.25 12 8.34375C12 9.4375 11.125 10.3438 10 10.3438Z'
                          fill='white'
                        />
                      </svg>
                    </span>
                    401 Broadway, 24th Floor, London
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-12 bg-[#101541] py-8 lg:mt-[60px]'>
        <div className='container mx-auto align-element'>
          <div className='-mx-4 flex flex-wrap  '>
            <div className='w-full px-4 md:w-1/3 lg:w-1/2'>
              <div className='my-1 flex justify-center md:justify-start'>
                <p className='text-base text-gray-7'>
                  &copy; {new Date().getFullYear()} Crossroads Logistics L.L.C.
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/3 lg:w-1/2'>
              <div className='my-1'>
                <div className='-mx-3 flex flex-wrap items-center justify-center md:justify-end'>
                  <BottomNavLink link='/#' label='Privacy policy' />
                  <BottomNavLink link='/#' label='Legal notice' />
                  <BottomNavLink link='/#' label='Terms of service' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;

const LinkGroup = ({ children, header }) => {
  return (
    <div className='w-full px-4 sm:w-1/2 lg:w-3/12 2xl:w-2/12'>
      <div className='mb-10 w-full'>
        <h4 className='mb-9 text-lg font-semibold text-white'> {header} </h4>
        <ul className='space-y-3'>{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ label, link }) => {
  return (
    <li>
      <a
        href={link}
        className='inline-block text-base leading-loose text-gray-7 underline-offset-2 hover:text-white hover:underline'
      >
        {label}
      </a>
    </li>
  );
};

const BottomNavLink = ({ label, link }) => {
  return (
    <a href={link} className='px-3 text-base text-gray-7 hover:text-white'>
      {label}
    </a>
  );
};
