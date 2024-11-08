import cargo from '../assets/cargo.jpg';
import cargo2 from '../assets/cargo2.jpg';
import container from '../assets/container.jpg';
import central from '../assets/centrale.jpg';
const Services = () => {
  return (
    <section className='  pt-20'>
      <div className='container mx-auto space-y-12' id='type1'>
        <div className='text-5xl font-bold content-center text-orange-500 '>
          SEA CONTAINER
        </div>
        <div className='lg:flex  overflow-hidden rounded-md shadow-sm lg:flex-row '>
          <div className='lg:w-1/2'>
            <img
              src={container}
              // src='https://source.unsplash.com/640x480/?1'
              alt=''
              className='sm:h-full dark:bg-gray-500 aspect-video object-cover object-center '
            />
          </div>
          <div className='flex  justify-center flex-1 p-6 bg-base-300 lg:w-1/2'>
            <h2 className=' text-base-content lg:text-xl'>
              Packages travel in one of the see containers for a period of 6 to
              8 weeks. At destination port we take care of the customs and get
              your packages ready for pick up or delivery if you so choose.
              <br />
              <br />
              <span className='text-primary underline font-bold'>
                PROHIBITED ITEMS:
              </span>{' '}
              <span className='text-red-600'>
                Spaghetti, Military Equipments, Diapers, Water, Cooking Oil,
                Alcoholic Drinks, Non Alcoholic Beverages{' '}
              </span>
              <br />
              <br />
              <span className='font-extrabold'>
                {' '}
                Our pick-up and price schedules are posted on this website,
                choose your pickup date and time from your state's posted
                schedule.
              </span>
              <br />
              <br />
              <span className='font-extrabold'>
                {' '}
                The shipping fee includes a $25 pickup fee which is
                non-refundable once your package is picked-up.
                <br />
                <br />
                We only send our drivers for pick-up when we receive at least
                the pick-up fee.
                <br />
                <br />
              </span>
              If you decline to continue with the shipment of your package, it
              will be returned, but you will have to pay for the return shipping
              fee.
            </h2>
          </div>
        </div>

        <div
          className='text-5xl font-bold content-center pt-20 text-fuchsia-300'
          id='type2'
        >
          AIR REGULAR
        </div>
        <div className='lg:flex overflow-hidden rounded-md shadow-sm lg:flex-row-reverse '>
          <div className='lg:w-1/2'>
            <img
              src={cargo2}
              // src='https://source.unsplash.com/640x480/?1'
              alt=''
              className='sm:h-full dark:bg-gray-500 aspect-video object-cover object-center '
            />
          </div>
          <div className='flex  justify-center flex-1 p-6 bg-base-300 lg:w-1/2'>
            <h2 className=' text-base-content lg:text-xl '>
              Here, Your package will be forwarded via a cargo plane and will
              get to the destination within 6 to 12 days.
              <br />
              <br />
              <span className='text-primary underline font-bold'>
                PROHIBITED ITEMS:
              </span>{' '}
              <span className='text-red-600'>
                Military Equipments or any other items prohibited on planes.{' '}
              </span>
              <br />
              <br />
              <span className='font-extrabold'>
                {' '}
                Our pick-up and price schedules are posted on this website,
                choose your pickup date and time from your state's posted
                schedule.
              </span>
              <br />
              <br />
              <span className='font-extrabold'>
                {' '}
                The shipping fee includes a $25 pickup fee which is
                non-refundable once your package is picked-up.
                <br />
                <br />
                We only send our drivers for pick-up when we receive at least
                the pick-up fee.
                <br />
                <br />
              </span>
              If you decline to continue with the shipment of your package, it
              will be returned, but you will have to pay for the return shipping
              fee.
            </h2>
          </div>
        </div>
        <div className='text-5xl font-bold  pt-20 text-blue-300' id='type3'>
          AIR EXPRESS
        </div>
        <div className='lg:flex overflow-hidden rounded-md shadow-sm lg:flex-row '>
          <div className='lg:w-1/2'>
            <img
              src={cargo}
              // src='https://source.unsplash.com/640x480/?1'
              alt=''
              className='sm:h-full dark:bg-gray-500 aspect-video object-cover object-center '
            />
          </div>
          <div className='flex  justify-center flex-1 p-6 bg-base-300 lg:w-1/2'>
            <h2 className=' text-base-content lg:text-xl '>
              Your package will be forwarded via a cargo plane and will get to
              the destination within 4 to 8 days. At destination.
              <br />
              <br />
              <span className='text-primary underline font-bold'>
                PROHIBITED ITEMS:
              </span>{' '}
              <span className='text-red-600'>
                Military Equipments or any other items prohibited on planes.{' '}
              </span>
              <br />
              <br />
              <span className='font-extrabold'>
                {' '}
                Our pick-up and price schedules are posted on this website,
                choose your pickup date and time from your state's posted
                schedule.
              </span>
              <br />
              <br />
              <span className='font-extrabold'>
                {' '}
                The shipping fee includes a $25 pickup fee which is
                non-refundable once your package is picked-up.
                <br />
                <br />
                We only send our drivers for pick-up when we receive at least
                the pick-up fee.
                <br />
                <br />
              </span>
              If you decline to continue with the shipment of your package, it
              will be returned, but you will have to pay for the return shipping
              fee.
            </h2>
          </div>
        </div>
        <div className='text-5xl font-bold  pt-20 text-rose-700' id='type4'>
          PURCHASING CENTER
        </div>
        <div className='lg:flex overflow-hidden rounded-md shadow-sm lg:flex-row-reverse '>
          <div className='lg:w-1/2'>
            <img
              src={central}
              // src='https://source.unsplash.com/640x480/?1'
              alt=''
              className='sm:h-full dark:bg-gray-500 aspect-video object-cover object-center '
            />
          </div>
          <div className='flex  justify-center flex-1 p-6 bg-base-300 lg:w-1/2'>
            <h2 className=' text-base-content lg:text-xl '>
              Our customers purchase any allowed items from anywhere through us
              .
              <br />
              <br />
              <span className='text-primary underline font-bold'>
                PROHIBITED ITEMS:
              </span>{' '}
              <span className='text-red-600'>
                Military Equipments and any other prohibited items.{' '}
              </span>
              <br />
              <br />
              <span className='font-extrabold'>
                {' '}
                1-The customer calls us for arrangement.
              </span>
              <br />
              <br />
              <span className='font-extrabold'>
                {' '}
                2-The customer makes a deposit for his purchase.
                <br />
                <br />
                3-The Customer finishes the entire payment when we confirm that
                the purchase was made.
                <br />
                <br />
              </span>
              If the customer want to cancel a purchase, (s)he needs to do so
              before the purchase is made by us, otherwise, (s)he will be liable
              for the whole purchase.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
