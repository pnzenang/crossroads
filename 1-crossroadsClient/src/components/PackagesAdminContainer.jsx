import { useAllPackagesAdminContext } from '../pages/AllPackagesAdmin';
import ComplexPaginationContainerAdmin from './ComplexPaginationContainerAdmin';
import { MdUnfoldMore, MdUnfoldLess } from 'react-icons/md';
import Pack from './Package';
// import PageBtnContainer from './PageBtnContainer';
import { useState } from 'react';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
// import { styled } from 'styled-components';

import { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';
day.extend(advancedFormat);

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 pl-3 text-[15px] font-bold text-white lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b  border-primary bg-base-100  py-5 pl-12 text-left text-[15px]  font-medium uppercase`,
  TdStyle2: `text-dark border-b border-primary bg-base-100  py-5 pl-12 text-left text-[15px] font-medium uppercase`,
};

const PackagesAdminContainer = () => {
  const [layout, setLayout] = useState('list');
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : ' text-primary border-primary'
    }`;
  };

  const { data } = useAllPackagesAdminContext();

  const { packages, numberOfPackages, numOfPages } = data;

  if (packages.length === 0) {
    return (
      <div>
        <h2>No Package to display, please add packages</h2>
      </div>
    );
  }
  return (
    <section className='pb-10 pt-10 '>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          <h5 className='pb-1 text-2xl'>
            {numberOfPackages} package{packages.length > 1 && 's'} found
          </h5>
          <div className='flex gap-x-2'>
            <button
              type='button'
              onClick={() => setLayout('list')}
              className={setActiveStyles('list')}
            >
              <MdUnfoldLess />
            </button>
            <button
              type='button'
              onClick={() => setLayout('grid')}
              className={setActiveStyles('grid')}
            >
              <MdUnfoldMore />
            </button>
          </div>
        </div>
        <div className=' border-b mt-1 border-primary mx-auto mb-3'></div>
        {/* <div>
          <div className='grid grid-cols-1 gap-6 xl:grid-cols-2  pb-4'>
            {packages.map((pack) => {
              return <Package key={pack._id} {...pack} />;
            })}
          </div>
        </div> */}
      </div>
      <menu>
        {layout === 'grid' ? (
          <section>
            <div className='container mx-auto'>
              <div>
                <div className='grid grid-cols-1 gap-6 xl:grid-cols-2  pb-4'>
                  {packages.map((pack) => {
                    return <Pack key={pack._id} {...pack} />;
                  })}
                </div>
              </div>
              {numOfPages > 1 && <ComplexPaginationContainerAdmin />}
            </div>
          </section>
        ) : (
          <section>
            <div className=''>
              <div className='flex flex-wrap '>
                <div className='w-full '>
                  <div className='max-w-full overflow-x-auto'>
                    <table className='w-full  table table-zebra'>
                      <thead className='text-center bg-primary'>
                        <tr>
                          <th className={TdStyle.ThStyle}> Reference Code</th>
                          <th className={TdStyle.ThStyle}> State of Origin </th>
                          <th className={TdStyle.ThStyle}>Destination</th>
                          <th className={TdStyle.ThStyle}>
                            Pickup Fee(or shipping price){' '}
                          </th>
                          <th className={TdStyle.ThStyle}>Sender Commitment</th>
                          <th className={TdStyle.ThStyle}> Pickup Date </th>
                          <th className={TdStyle.ThStyle}> Package Status </th>
                        </tr>
                      </thead>
                      <tbody>
                        {packages.map((pack) => {
                          const {
                            _id,
                            packageSerialNumber,
                            receiverFullName,
                            packageState,
                            pickupDate,
                            destinationCountry,
                            shippingPrice,
                            senderCommitment,
                            packageStatus,
                            createdAt,
                          } = pack;
                          const time = day(Date.now());
                          const date = day(createdAt).format('MMM Do, YYYY');
                          // const m = time.diff(tod, 'days');

                          // const date = day(createdAt).format('MMM Do, YYYY');
                          const date2 = day(pickupDate)
                            .add(22, 'hour')
                            .format('MMM Do, YYYY');
                          const numberFormat = (value) =>
                            new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: 'USD',
                            }).format(value);

                          return (
                            <tr key={_id}>
                              <td className={TdStyle.TdStyle}>
                                {packageSerialNumber}
                              </td>
                              <td className={TdStyle.TdStyle2}>
                                {packageState}
                              </td>
                              <td className={TdStyle.TdStyle2}>
                                {destinationCountry}
                              </td>
                              <td className={TdStyle.TdStyle}>
                                {shippingPrice === 25 ? (
                                  <span className='sm:  flex '>
                                    Pickup fee:
                                  </span>
                                ) : (
                                  <span className='sm:w-1/2   '>
                                    Total Shipping Price:
                                  </span>
                                )}
                                <span className='px-2 sm:w-1/2  rounded-sm font-bold '>
                                  {numberFormat(shippingPrice)}
                                </span>
                              </td>
                              {/* <td className={TdStyle.TdStyle2}>{date}</td> */}

                              <td className={TdStyle.TdStyle}>
                                {senderCommitment}
                              </td>

                              <td className={TdStyle.TdStyle2}>{date2}</td>
                              <td className={TdStyle.TdStyle2}>
                                {packageStatus}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {numOfPages > 1 && <ComplexPaginationContainerAdmin />}
          </section>
        )}
      </menu>
    </section>
  );
};
export default PackagesAdminContainer;
