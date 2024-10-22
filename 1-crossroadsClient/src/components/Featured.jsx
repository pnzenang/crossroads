import React from 'react';

import services from '../assets/services.jpg';
import { Link } from 'react-router-dom';

const ProductCategories5 = () => {
  return (
    <section className='bg-red-400 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark '>
      <div className='container mx-auto align-element'>
        <div className='-mx-4 flex flex-wrap'>
          <CategoriesItem
            link='/services'
            img={vessels}
            // img='https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-05/image-01.jpg'
            subtitle='sea transit through'
            title='SHIPPING CONTAINERS.'
            details='Your package transits through sea containers and vessels.'
            button='Read more'
          />
          <CategoriesItem
            link='/services'
            img={air}
            // img='https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-05/image-02.jpg'
            subtitle='Air transit through'
            title='CARGO PLANES AND ALTERNATIVES. '
            details='The fastest way of sending your packages.'
            button='Reed more'
          />
          <CategoriesItem
            link='/about'
            img={services}
            // img='https://cdn-tailgrids.b-cdn.net/1.0/assets/images/ecommerce/categories/category-05/image-03.jpg'
            subtitle='No need for you or your family to move'
            title='WE PICK-UP AND DELIVER ALL YOUR PACKAGES'
            details='We pick-up and deliver all of your packages in the USA and in Africa.'
            button='Read more'
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCategories5;

const CategoriesItem = ({ link, img, title, subtitle, details, button }) => {
  return (
    <div className='w-full px-4 md:w-1/2 lg:w-1/3 '>
      <div className='group relative  mb-10'>
        <img src={img} alt='category' className='w-full' />
        <div className='invisible absolute top-0 left-0 flex h-full w-full items-center justify-center p-5  opacity-0 transition-all group-hover:visible group-hover:opacity-100'>
          <div className='bg-primary flex h-full w-full flex-col items-center justify-center text-center p-5'>
            <span className='mb-1 block text-base font-medium uppercase text-white p-3'>
              {subtitle}
            </span>
            <Link
              to={link}
              className='mb-3 block text-xl font-semibold text-white hover:text-opacity-80 md:text-2xl xl:leading-10 xl:text-[28px]'
            >
              {title}
            </Link>
            <p className='mx-auto mb-8 max-w-[250px] text-base text-white/70 xl:mb-10'>
              {details}
            </p>
            <Link
              to={link}
              className='inline-flex items-center justify-center border border-white rounded-md py-[11px] px-7 text-center text-base font-medium text-white hover:bg-white hover:text-primary'
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
