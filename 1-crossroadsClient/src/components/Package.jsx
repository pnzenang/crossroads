import { LuBuilding2 } from 'react-icons/lu';
import { PiMapPinBold } from 'react-icons/pi';
import { LuPhoneCall } from 'react-icons/lu';
import PackageInfo from './PackageInfo';
import { TbUserDown, TbMapDown, TbMapUp } from 'react-icons/tb';
import { Link, Form, useOutletContext } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

day.extend(advancedFormat);

const Package = ({
  _id,
  senderFullName,
  senderPhoneNumber,
  packageSerialNumber,
  packageStreetAddress,
  packageCity,
  packageState,
  packageZipCode,
  desiredShippingMode,
  senderCommitment,
  destinationCountry,
  receiverCity,
  packageDescription,
  numberOfItems,
  shippingPrice,
  receiverFullName,
  receiverPhoneNumber,
  packageStatus,
  pickupDate,
  createdAt,
  borderColor,
  commitmentColor,
  statusColor,
  modeColor,
}) => {
  const { user } = useOutletContext();
  const date1 = day(createdAt).format('MMM Do, YYYY');
  const date2 = day(pickupDate).format('MMM Do, YYYY');

  const numberFormat = (value) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);

  desiredShippingMode === 'Air Express (4-8 days)'
    ? (borderColor = 'border-blue-300') && (modeColor = 'bg-blue-300')
    : desiredShippingMode === 'Air Regular(6-12 days)'
    ? (borderColor = 'border-fuchsia-300') && (modeColor = 'bg-fuchsia-300')
    : (borderColor = 'border-orange-400') && (modeColor = 'bg-orange-400');

  senderCommitment === 'package created'
    ? (commitmentColor = 'bg-amber-100')
    : senderCommitment === 'pickup fee sent'
    ? (commitmentColor = 'bg-green-100')
    : (commitmentColor = 'bg-green-500');

  packageStatus === 'awaiting pick-up.'
    ? (statusColor = 'bg-red-100')
    : packageStatus === 'delivered'
    ? (statusColor = 'bg-cyan-500')
    : (statusColor = 'bg-cyan-100');

  return (
    <header
      className={`w-full shadow-md border-t-8 ${borderColor} rounded-md bg-base-200 border  `}
    >
      <div className='mb-2'>
        <div className={`border-b ${borderColor}`}>
          <div className='md:flex  items-baseline py-3 px-4 justify-between'>
            <h2 className='text-xm lg:text-xl'>Package reference code:</h2>
            <h2 className='inline-flex items-center rounded-md bg-base-100 px-2 py-1 text-xl md:text-2xl font-medium text-primary ring-1 ring-inset uppercase '>
              {packageSerialNumber}
            </h2>
          </div>
        </div>
      </div>
      <div className='px-4 text-sm lg:text-xl capitalize grid md:grid-cols-2 gap-6'>
        <section className=''>
          <div>
            <h1 className='w-full border-b-2 text-bold  font-bold'>Origin</h1>
            <div className='flex'>
              <PackageInfo
                icon={<TbMapUp className='w-4' />}
                text={packageState}
              />
            </div>
            <div className='flex '>
              <PackageInfo
                icon={<PiMapPinBold className='w-4' />}
                text={packageStreetAddress}
              />
            </div>
            <div className='flex'>
              <PackageInfo
                icon={<LuBuilding2 className='w-4' />}
                text={packageCity + ' ' + packageZipCode}
              />
            </div>
            <div className='flex'>
              <PackageInfo
                icon={<LuPhoneCall className='w-4' />}
                text={senderPhoneNumber}
              />
            </div>
          </div>
        </section>
        <section className=''>
          <h1 className={`w-full border-b-2 font-bold `}>Destination</h1>
          <div className='flex'>
            <PackageInfo
              icon={<TbMapDown className='w-4' />}
              text={destinationCountry}
            />
          </div>
          <div className='flex'>
            <PackageInfo
              icon={<TbUserDown className='w-4' />}
              text={receiverFullName}
            />
          </div>
          <div className='flex'>
            <PackageInfo
              icon={<LuBuilding2 className='w-4' />}
              text={receiverCity}
            />
          </div>
          <div className='flex'>
            <PackageInfo
              icon={<LuPhoneCall className='w-4' />}
              text={receiverPhoneNumber}
            />
          </div>
        </section>

        <div className='md:col-span-2 '>
          <h1 className='w-full border-b-2 flex font-bold'>Package Details</h1>
          <div className='sm:px-auto pb-3'>
            <section className='sm:grid grid-cols-2 text-sm w-full gap-x-12'>
              <div className=' '>
                <div className='sm:flex text- pt-1 grid grid-cols-2'>
                  <h2 className='sm:w-1/2 flex'>Date created:</h2>
                  <h2 className='px-2 sm:w-1/2'>{date1}</h2>
                </div>
                <div className='sm:flex text- pt-1 grid grid-cols-2 '>
                  <h2 className='sm:w-1/2 flex  '>Pickup date:</h2>
                  <h2 className='px-2 sm:w-1/2'>{date2}</h2>
                </div>
                <div className='sm:flex text- pt-1 grid grid-cols-2'>
                  <h2 className='sm:w-1/2 flex'>Number of items:</h2>
                  <h2 className='px-2 sm:w-1/2'>{numberOfItems}</h2>
                </div>
                <div className='sm:flex text- pt-1 grid grid-cols-2'>
                  <h2 className='sm:w-1/2 flex  '>Package Description:</h2>
                  <h2 className='px-2 sm:w-1/2  rounded-sm  truncate '>
                    {packageDescription}
                  </h2>
                </div>
              </div>
              <div>
                <div className='sm:flex text- pt-1 grid grid-cols-2'>
                  <h2 className='sm:w-1/2 flex'>Shipping Mode:</h2>
                  <h2
                    className={`${modeColor} sm:w-1/2 px-2 truncate rounded-sm text-neutral`}
                  >
                    {desiredShippingMode}
                  </h2>
                </div>
                <div className='sm:flex text- pt-1 grid grid-cols-2'>
                  <h2 className='sm:w-1/2 flex'>Sender Commitment:</h2>
                  <h2
                    className={`${commitmentColor} sm:w-1/2  px-2 truncate rounded-sm text-neutral`}
                  >
                    {senderCommitment}
                  </h2>
                </div>
                <div className='sm:flex text- pt-1 grid grid-cols-2 '>
                  <h2 className='sm:w-1/2 flex  '>Package Status:</h2>
                  <h2
                    className={`${statusColor} sm:w-1/2  px-2 truncate rounded-sm text-neutral`}
                  >
                    {packageStatus}
                  </h2>
                </div>
                <div className='sm:flex  pt-1 grid grid-cols-2'>
                  {shippingPrice === 25 ? (
                    <h2 className='sm:w-1/2 flex  '>Pickup fee:</h2>
                  ) : (
                    <h2 className='sm:w-1/2 flex  '>
                      Total Shipping Price including pickup price:
                    </h2>
                  )}
                  <h2 className='px-2 sm:w-1/3  rounded-sm font-bold '>
                    {numberFormat(shippingPrice)}
                  </h2>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className=' flex justify-center gap-2 py-3 px-4'>
        {/* {user.role === 'user' ? (
          <Link
            to={`/dashboard/edit-package/${_id}`}
            className='btn-xm bg-primary rounded capitalize px-2 py-1 truncate text-white'
          >
            edit recommendation
          </Link>
        ) : ( */}
        <>
          <Link
            to={`/dashboard/edit-package/${_id}`}
            className='btn-xm bg-secondary rounded capitalize px-2 py-1 truncate text-white'
          >
            edit package details
          </Link>
          <Form method='post' action={`/dashboard/delete-package/${_id}`}>
            <button
              type='submit'
              className='btn-xm bg-red-600 rounded capitalize px-2 py-1 truncate text-white'
            >
              delete package
            </button>
          </Form>
        </>
        {/* )} */}
      </div>
    </header>
  );
};
export default Package;
