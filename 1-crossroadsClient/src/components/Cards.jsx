import React from 'react';
import { PiHandshake } from 'react-icons/pi';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { HiOutlineHandThumbUp } from 'react-icons/hi2';
const Service3 = () => {
  return (
    <section className='pb-12 pt-10 dark:bg-dark lg:pb-[90px] lg:pt-10'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 pt-20'>
            <div className='mx-auto mb-[60px] max-w-[800px] text-center'>
              <span className='mb-1 block lg:text-5xl font-semibold text-primary'>
                Our Promise to Our customers:
              </span>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap justify-center'>
          <ServiceCard
            title='Dedication'
            details='We know how important is your commitment to your plans and programs, we will always honor our engagement.'
            icon={<PiHandshake className='w-20 h-20 text-primary' />}
          />
          <ServiceCard
            title='Business Oriented'
            details='A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.’ – Jeff Bezos .'
            icon={
              <MdOutlineBusinessCenter className='w-20 h-20 text-primary' />
            }
          />
          <ServiceCard
            title='Readiness.'
            details='Our teams are on the speed dial and ready  to move an serve as soon as you solicit us our services.'
            icon={<HiOutlineHandThumbUp className='w-20 h-20 text-primary' />}
          />
        </div>
      </div>
    </section>
  );
};

export default Service3;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <div className='w-full  px-4 sm:w-4/5 md:w-1/2 lg:w-1/3'>
      <div className='group relative mb-8 rounded-xl border border-gray-800 bg-base-200 p-10 text-center dark:border-dark-3 dark:bg-dark-2 md:px-8 lg:px-6 lg:py-9 xl:px-[43px] xl:py-[45px]'>
        <div className='relative z-1 mx-auto mb-10 inline-flex h-11 items-center text-red-500'>
          {icon}
        </div>
        <h4 className='mb-[14px] text-2xl font-bold text-gray'>{title}</h4>
        <p className='text-body-color dark:text-dark-6'>{details}</p>
        <span className='absolute -bottom-2 left-0 right-0 z-[-1] mx-auto h-12 w-3/4 bg-primary opacity-0 blur-[12px] transition  shadow-lg'></span>
      </div>
    </div>
  );
};
