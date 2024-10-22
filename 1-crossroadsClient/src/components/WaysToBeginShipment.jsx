import React, { useState } from 'react';

const Accordion2 = () => {
  return (
    <section className=' pb-10 pt-20 bg-base-300 lg:pb-20 lg:pt-10 mt-20'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20'>
              <h2 className='text-3xl font-bold text-base-content sm:text-[40px]/[48px]'>
                WAYS TO BEGIN SHIPPING YOUR PACKAGE WITH US
              </h2>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap justify-center'>
          <div className='w-full px-4 xl:w-10/12'>
            <AccordionItem
              header='CREATE YOUR ACCOUNT ON THIS WEB APPLICATION.(BEST WAY)'
              text1='1-Create your account by clicking on login above and select the option register.'
              text2='2-Add your package on your dashboard. You will see a package reference number that will alow you to receive all the updates on your package without needing to call anyone.'
              text3='3-You can alert us through your dashboard that you  send us your pickup fee or your shipping fee (zelle is our preferred method as it is free for both of us).'
              text4='4-You will also receive all the status updates on your package right there on your dashboard.'
            />
            <AccordionItem
              header='CALL CROSSROADS LOGISTICS TO DISCUSS THE SHIPMENT OF YOUR PACKAGE.'
              text1='1-Our phone number is 443-531-5852, when us, you call we will register your package and discuss pick-up and shipping.'
              text2='2-You will receive a shipping reference number that you will use every time we discuss your package.'
              text3='3-You can alert us by call or by message that you  send us your pickup fee or your shipping fee (zelle is our preferred method as it is free for both of us).'
              text4='4-You will also receive all the status updates on your package by call or message.'
            />
            <AccordionItem
              header='SEND US A MESSAGE TO DISCUSS THE SHIPMENT OF YOUR PACKAGE.'
              text1='1-Our phone number is 443-531-5852, when us, you call we will register your package and discuss pick-up and shipping.'
              text2='2-You will receive a shipping reference number that you will use every time we discuss your package.'
              text3='3-You can alert us by call or by message that you  send us your pickup fee or your shipping fee (zelle is our preferred method as it is free for both of us).'
              text4='4-You will also receive all the status updates on your package by call or message.'
            />
            <AccordionItem
              header='SEND US AN EMAIL  TO BEGIN YOUR SHIPMENT PROCESS.'
              text1='1-take a picture of your package and send it through our email and we can start discussing the pickup.'
              text2='2-You will receive a shipping reference number that you will use every time we discuss your package.'
              text3='3-You can alert us by call or by message that you  send us your pickup fee or your shipping fee (zelle is our preferred method as it is free for both of us).'
              text4='4-You will also receive all the status updates on your package by call or message or email.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion2;

const AccordionItem = ({ header, text1, text2, text3, text4 }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className='mb-10 rounded-lg bg-base-100 px-7 py-6 shadow-[0px_4px_18px_0px_rgba(0,0,0,0.07)] dark:bg-dark-2 md:px-10 md:py-8'>
      <button
        className={`faq-btn flex w-full items-center justify-between text-left`}
        onClick={() => handleToggle()}
      >
        <h4 className='mr-2 text-base font-semibold text-primary sm:text-lg md:text-xl lg:text-2xl'>
          {header}
        </h4>
        <span className='icon inline-flex h-8 w-full max-w-[32px] items-center justify-center rounded-full border-2 border-primary text-lg font-semibold text-primary'>
          {active ? '-' : '+'}
        </span>
      </button>

      <div
        className={`${
          active ? 'block' : 'hidden'
        } text-base-content lg:text-xl`}
      >
        <p className='text-relaxed pt-6  text-body-color dark:text-dark-6'>
          {text1}
        </p>
        <p className='text-relaxed pt-6  text-body-color dark:text-dark-6'>
          {text2}
        </p>
        <p className='text-relaxed pt-6  text-body-color dark:text-dark-6'>
          {text3}
        </p>
        <p className='text-relaxed pt-6  text-body-color dark:text-dark-6'>
          {text4}
        </p>
      </div>
    </div>
  );
};
