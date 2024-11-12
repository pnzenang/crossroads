import React from 'react';
import contact from '../assets/Contact.jpg';
const Contact = () => {
  return (
    <section className='relative z-1 bg-primary py-20 lg:py-[120px] '>
      <div className='container  mx-auto max-w-7xl '>
        <div className='text-base-content bg-base-300'>
          <div className='flex flex-wrap items-stretch'>
            <div className='w-full lg:w-7/12'>
              <div className='relative flex h-full w-full overflow-hidden'>
                <div className='flex h-full items-end '>
                  <img
                    src={contact}
                    // src='https://cdn.tailgrids.com/2.0/image/application/images/contact/contact-image-9.jpg'
                    alt='image'
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <div className='absolute grid justify-items-center my-10 md:my-36 mx-auto w-full  px-5 '>
                  <div className='sm:w-3/6 flex-col  rounded text-base-content bg-base-300 px-4 py-9 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] dark:bg-dark-2 md:inline-flex md:px-4 lg:px-0 xl:px-4'>
                    <div className='mb-4 border-stroke px-3 border-primary md:mb-12 '>
                      <h5 className='text-lg font-semibold text-base-content bg-base-300'>
                        Email
                      </h5>
                      <p className='text-base-content bg-base-300'>
                        contact@crossshipping.org
                      </p>
                    </div>
                    <div className='mb-4 border-stroke px-3 border-primary md:mb-12 '>
                      <h5 className='text-lg font-semibold text-dark text-base-content bg-base-300'>
                        Phone
                      </h5>
                      <p className='text-base text-body-color dark:text-dark-6'>
                        +1(913)-999-5401
                      </p>
                    </div>
                    <div className='px-2 pt-6'>
                      <h5 className='text-lg font-semibold text-base-content bg-base-300'>
                        Address
                      </h5>
                      <p className='text-base text-body-color dark:text-dark-6'>
                        9157 Whiskey Bottom Rd
                        <br />
                        Laurel MD 20723
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full lg:w-5/12'>
              <div className='2xl:px-70 w-full px-8 py-14 sm:p-[70px] lg:px-14'>
                <span className='mb-10 block text-3xl font-medium text-base-content bg-base-300'>
                  CONTACT US
                </span>

                <form>
                  <InputBox
                    labelTitle='Your Name'
                    type='text'
                    name='name'
                    placeholder='Enter your name'
                  />
                  <InputBox
                    labelTitle='Your Email'
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                  />
                  <TextArea
                    labelTitle='Your Message'
                    row='5'
                    placeholder='Enter your message'
                    name='message'
                    defaultValue=''
                  />
                  <div>
                    <button
                      type='submit'
                      className='cursor-pointer text-white rounded-md border border-primary bg-primary px-7 py-3  transition hover:bg-opacity-90'
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const InputBox = ({ type, placeholder, name, labelTitle }) => {
  return (
    <div className='mb-5'>
      <label className='mb-2.5 block text-base font-medium text-base-content bg-base-300'>
        {labelTitle}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className='w-full rounded-md border border-stroke bg-base-100 px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-dark-6'
      />
    </div>
  );
};

const TextArea = ({ row, placeholder, name, defaultValue, labelTitle }) => {
  return (
    <>
      <div className='mb-6'>
        <label className='mb-2.5 block text-base font-medium text-base-content bg-base-300'>
          {labelTitle}
        </label>
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className='w-full resize-none rounded-md border border-stroke bg-base-100 px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-dark-6'
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};
