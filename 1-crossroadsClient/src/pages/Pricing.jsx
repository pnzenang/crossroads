import {
  AirExpressPrices,
  AirRegularPrices,
  SeaContainerPrices,
} from '../components';

import ScrollToTop from 'react-scroll-to-top';

import pricing from '../assets/pricing.jpg';
const Pricing = () => {
  return (
    <section className='py-20'>
      <ScrollToTop smooth color='#0891b2' width='40' />
      <h1 className='pt-10 lg:text-5xl font-extrabold'>OUR PRICING</h1>
      <div className='my-10 bg-base-300 rounded-lg '>
        <div className='h-80 rounded-lg '>
          <img
            src={pricing}
            className=' object-center h-full w-full dark:bg-gray-500 aspect-video object-cover rounded-t-lg'
          />
        </div>
        <div className='py-7 p-6'>
          <h1 className='text-2xl'>
            Below are our{' '}
            <span className='font-extrabold'>
              {' '}
              very competitive shipping prices
            </span>
            , each price include a $25 pickup price that will deducted from the
            final shipping price. that $25 should be received before we mobilize
            our driver. Our prefer method of payment is by zelle as our driver
            do not carry cash.
            <br />
            The list is not exhaustive, your package may not appear in our list
            but we stand ready to give you an estimate of you shipping price if
            you send us a picture and description of your package.
            <br />
            <br />
            The prices listed below are for shipping to Cameroon, to ship to
            another country, please call for arrangement.
          </h1>
        </div>
      </div>
      <SeaContainerPrices />
      <AirRegularPrices />
      <AirExpressPrices />
    </section>
  );
};
export default Pricing;
