import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
const Accordion = () => {
  return (
    <section className='relative z-1 overflow-hidden bg-base-300 pb-6 pt-10 rounded-lg mb-10 lg:py-5'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20'>
              <h2 className='mb-4 text-2xl font-extrabold t md:text-5xl text-orange-500'>
                CONTAINER PRICES
              </h2>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex p-5 flex-wrap '>
          <div className='w-full px-5 lg:w-1/2'>
            <AccordionItem
              header='MATTRESS'
              text1='Single Mattress'
              price1={`$100`}
              text2='Full Mattress'
              price2={`$100`}
              text3='Queen Mattress'
              price3={`$150`}
              text4='King Mattress'
              price4={`$200`}
            />
            <AccordionItem
              header='LIVING ROOM'
              text1='Folding Chair'
              price1={`$10`}
              text2='Non Folding Chair'
              price2={`$30`}
              text3=' Love Seat'
              price3={`$500`}
              text4='3-seat Sofa'
              price4={`$800`}
              text5='5-piece Living Room'
              price5={`$2,400`}
            />
            <AccordionItem
              header='CARS(EMPTY)'
              text1='Sedan'
              price1={`$1,700`}
              text2='Small SUV'
              price2={`$1,900`}
              text3=' Regular SUV'
              price3={`$2,100`}
              text4='Large SUV'
              price4={`$2,500`}
              text5='Truck'
              price5={`$1,900`}
            />
            <AccordionItem
              header='KITCHEN'
              text1='Cooking Stove'
              price1={`$600`}
              text2='Refrigerator(1-door)'
              price2={`$400`}
              text3=' Refrigerator(2-door)'
              price3={`$600`}
              text4='Refrigerator(3-door)'
              price4={`$800`}
            />
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <AccordionItem
              header='MOVING BOXES'
              text1='Box(12inX12inx16in)'
              price1={`$60`}
              text2='Box(18inX18inx16in)'
              price2={`$100`}
              text3='Box(18inX18inx24in)'
              price3={`$140`}
              text4='Box(24inX18inx24in)'
              price4={`$180`}
              text5='Box(34inX34inx42in)'
              price5={`$200`}
            />
            <AccordionItem
              header='SUITCASES'
              text1='Small Suitcase'
              price1={`$60`}
              text2='Medium SuitCase'
              price2={`$100`}
              text3=' Large SuitCase'
              price3={`$180`}
              // text4='Large SUV'
              // price4={`$2,500`}
              // text5='Truck'
              // price5={`$1,900`}
            />
            <AccordionItem
              header='STORAGE CONTAINERS'
              text1='Storage Tote (27 Gallons)'
              price1={`$150`}
              text2='Storage Tote (35 Gallons)'
              price2={`$200`}
              text3=' Barrel(55 Gallons'
              price3={`$300`}
              text4='Barrel (75 Gallons)'
              price4={`$350`}
              // text5='Truck'
              // price5={`$1,900`}
            />
            <AccordionItem
              header='ELECTRONICS'
              text1='Computer Laptop'
              price1={`$40`}
              text2='Computer Desktop'
              price2={`100`}
              text3=' Flat Screen up to 32 inches'
              price3={`$150`}
              text4='Flat Screen 34 to 55 inches'
              price4={`$260`}
              text5='Flat Screen 65 to 85 inches'
              price5={`$350`}
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
