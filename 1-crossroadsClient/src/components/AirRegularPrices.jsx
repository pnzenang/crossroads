import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
const Accordion = () => {
  return (
    <section className='relative z-1 overflow-hidden bg-base-300 pb-6 pt-10 mb-10 py-5 rounded-lg'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20'>
              <h2 className='mb-4 text-2xl font-extrabold t md:text-5xl text-fuchsia-400'>
                AIR REGULAR PRICES
              </h2>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex p-5 flex-wrap '>
          <div className='w-full px-5 lg:w-1/2'>
            <AccordionItem
              header='SUITCASES'
              text1='Small up to 32 kg'
              price1={`$350`}
              text2='Medium up to 32 kg'
              price2={`$360`}
              text3='Large up to 32 kg'
              price3={`$400`}
              // text4='King Mattress'
              // price4={`$200`}
            />
            <AccordionItem
              header='LETTERS & DOCUMENTS'
              text1='Envelop of up 9 in x 12 in'
              price1={`$25`}
              text2='Envelop of more than 9 in x 12 in'
              price2={`Call for pricing`}
            />
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <AccordionItem
              header='ITEMS BY WEIGHT'
              text1='1kg'
              price1={`$25`}
            />
            <AccordionItem
              header='ELECTRONICS'
              text1='Computer Laptop'
              price1={`$100`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({
  header,
  text1,
  text2,
  text3,
  text4,
  text5,
  price1,
  price2,
  price3,
  price4,
  price5,
}) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className='mb-8 w-full rounded-lg bg-base-100 p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8'>
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5'>
          <FaAngleDown
            className={`fill-primary stroke-primary duration-200 ease-in-out h-5 w-5 sm:h-8 sm:w-8 ${
              active ? 'rotate-180' : ''
            }`}
          />
        </div>

        <div className='w-full '>
          <h4 className='mt-1 sm:text-3xl text-base-content font-bold'>
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out py-5 ${
          active ? 'block' : 'hidden'
        } flex justify-between`}
      >
        <div>{text1}</div>
        <div className='font-bold'>{price1}</div>
      </div>
      <div
        className={`pl-[62px] duration-200 ease-in-out pb-5 ${
          active ? 'block' : 'hidden'
        } flex justify-between`}
      >
        <div>{text2}</div>
        <div className='font-bold'>{price2}</div>
      </div>
      <div
        className={`pl-[62px] duration-200 ease-in-out pb-5 ${
          active ? 'block' : 'hidden'
        } flex justify-between`}
      >
        <div>{text3}</div>
        <div className='font-bold'>{price3}</div>
      </div>
      <div
        className={`pl-[62px] duration-200 ease-in-out pb-5 ${
          active ? 'block' : 'hidden'
        } flex justify-between`}
      >
        <div>{text4}</div>
        <div className='font-bold'>{price4}</div>
      </div>
      <div
        className={`pl-[62px] duration-200 ease-in-out pb-5 ${
          active ? 'block' : 'hidden'
        } flex justify-between`}
      >
        <div>{text5}</div>
        <div className='font-bold'>{price5}</div>
      </div>
    </div>
  );
};
