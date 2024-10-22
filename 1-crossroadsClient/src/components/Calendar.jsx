import React from 'react';

const Calendar = () => {
  return (
    <>
      <section className='relative z-10 bg-base-300 py-5  my-28'>
        <div className='mx-auto px-4 lg:container'>
          <div className='mb-[30px] flex items-center justify-between rounded-lg border border-stroke bg-gray-2 py-3 pl-[30px] pr-4 border-base-content bg-base-300'>
            <h1 className='text-base font-semibold text-primary sm:text-3xl'>
              December 2024 Pick-up schedule.
            </h1>
          </div>
          <div className='w-full max-w-full overflow-x-auto bg-base-300'>
            <table className='w-full'>
              <WeekRow>
                <Week name='Sun' />
                <Week name='Mon' />
                <Week name='Tue' />
                <Week name='Wed' />
                <Week name='Thu' />
                <Week name='Fri' />
                <Week name='Sat' />
              </WeekRow>
              <tbody>
                <DayRow>
                  <Day
                    number=''
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number=''
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number='01'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania'
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='02'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania'
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='03'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania'
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='04'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='05'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                </DayRow>
                <DayRow>
                  <Day
                    number='06'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number='07'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number='08'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania'
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='09'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania '
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='10'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania '
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='11'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number='12'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                </DayRow>
                <DayRow>
                  <Day
                    number='13'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number='14'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number='15'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania '
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='16'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania '
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='17'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania '
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='18'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='19'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                </DayRow>
                <DayRow>
                  <Day
                    number='20'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number='21'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number='22'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania '
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='23'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania '
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='24'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania'
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='25'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number='26'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                </DayRow>
                <DayRow>
                  <Day
                    number='27'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number='28'
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number='29'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania'
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='30'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania'
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number='31'
                    active
                    eventTitle1='NORTHEAST'
                    eventTitle2='District of Columbia'
                    eventTitle3='Virginia, Maryland'
                    eventTitle4='Delaware West Virginia,'
                    eventTitle5='Pennsylvania '
                    eventDate='4PM - 8PM'
                  />
                  <Day
                    number=''
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                  <Day
                    number=''
                    active
                    eventTitle1='MIDWEST'
                    eventTitle2='Missouri, Illinois'
                    eventTitle3='Nebraska, Minnesota'
                    eventTitle4='Indiana, Ohio'
                    eventTitle5='Wisconsin, Kentucky'
                    eventDate='8AM - 6PM'
                  />
                </DayRow>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calendar;

const WeekRow = ({ children }) => {
  return (
    <thead>
      <tr className='rounded-t-lg bg-primary text-white'>{children}</tr>
    </thead>
  );
};
const Week = ({ name }) => {
  return (
    <th className='h-10 w-10 p-2 text-xs first:rounded-tl last:rounded-tr lg:w-28 xl:text-sm 2xl:w-40'>
      <span className='flex justify-center'>
        <span>{name}</span>
        <span className='hidden lg:block'>day</span>
      </span>
    </th>
  );
};

const DayRow = ({ children }) => {
  return <tr className='h-20 text-center'>{children}</tr>;
};

const Day = ({
  active,
  number,
  eventTitle1,
  eventTitle2,
  eventTitle3,
  eventTitle4,
  eventTitle5,
  eventDate,
}) => {
  return (
    <td className='ease relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 hover:bg-gray-2 border-base-content dark:hover:bg-dark md:h-[125px] lg:w-28 2xl:w-40'>
      <div className='mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40 '>
        <div className='top h-5 w-full'>
          <span className='text-primary font-extrabold '>{number}</span>
        </div>
        {active && (
          <div className='bottom md:h-30 group h-16 w-full flex-grow cursor-pointer py-1'>
            <span className='text-base-content group-hover:text-primary  lg:hidden'>
              More
            </span>
            <div className='event invisible absolute left-2 z-10 mb-1 w-[200%] rounded border-l-[3px] border-primary bg-gray-2 px-2 py-[6px] text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark md:visible md:w-[190%] lg:opacity-100 text-[8px] lg:text-sm'>
              <span className='event-name block  font-medium text-primary'>
                {eventTitle1}
              </span>
              <span className='event-name block  font-medium text-base-content'>
                {eventTitle2}
              </span>
              <span className='event-name block  font-medium text-base-content'>
                {eventTitle3}
              </span>
              <span className='event-name block  font-medium text-base-content'>
                {eventTitle4}
              </span>
              <span className='event-name block  font-medium text-base-content'>
                {eventTitle5}
              </span>
              <span className='time text-sm text-red-600'>{eventDate}</span>
            </div>
          </div>
        )}
      </div>
    </td>
  );
};
