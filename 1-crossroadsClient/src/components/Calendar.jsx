import React from 'react';
import { colors } from '../utils/colors';
import { regions } from '../utils/regions';
import { times } from '../utils/times';
const Calendar = () => {
  return (
    <>
      <section className='relative z-1 bg-base-300 py-10  my-20'>
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
                <Week name='Wednes' />
                <Week name='Thurs' />
                <Week name='Fri' />
                <Week name='Satur' />
              </WeekRow>
              <tbody>
                <DayRow>
                  <Day
                    number=''
                    // active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[0].bgColor}
                  />
                  <Day
                    number=''
                    // active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[0].bgColor}
                  />
                  <Day
                    // number='01'
                    // active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[0].bgColor}
                  />
                  <Day
                    // number='02'
                    // active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[0].bgColor}
                  />
                  <Day
                    // number='03'
                    // active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[0].bgColor}
                  />
                  <Day
                    number='01'
                    active
                    eventTitle1={regions[2].region}
                    eventDate={times[1].time}
                    bgColor={colors[3].bgColor}
                  />
                  <Day
                    number='02'
                    active
                    eventTitle1={regions[2].region}
                    eventDate={times[0].time}
                    bgColor={colors[3].bgColor}
                  />
                </DayRow>
                <DayRow>
                  <Day
                    number='03'
                    active
                    eventTitle1={regions[2].region}
                    eventDate={times[0].time}
                    bgColor={colors[3].bgColor}
                  />
                  <Day
                    number='04'
                    // active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[0].bgColor}
                  />
                  <Day
                    number='05'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[1].bgColor}
                  />
                  <Day
                    number='06'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[1].bgColor}
                  />
                  <Day
                    number='07'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[1].bgColor}
                  />
                  <Day
                    number='08'
                    active
                    eventTitle1={regions[3].region}
                    eventDate={times[1].time}
                    bgColor={colors[2].bgColor}
                  />
                  <Day
                    number='09'
                    active
                    eventTitle1={regions[3].region}
                    eventDate={times[1].time}
                    bgColor={colors[2].bgColor}
                  />
                </DayRow>
                <DayRow>
                  <Day
                    number='10'
                    active
                    eventTitle1={regions[3].region}
                    eventDate={times[1].time}
                    bgColor={colors[2].bgColor}
                  />
                  <Day
                    number='11'
                    // active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[0].bgColor}
                  />
                  <Day
                    number='12'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[1].bgColor}
                  />
                  <Day
                    number='13'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[1].bgColor}
                  />
                  <Day
                    number='14'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[1].bgColor}
                  />
                  <Day
                    number='15'
                    active
                    eventTitle1={regions[2].region}
                    eventDate={times[1].time}
                    bgColor={colors[3].bgColor}
                  />
                  <Day
                    number='16'
                    active
                    eventTitle1={regions[2].region}
                    eventDate={times[1].time}
                    bgColor={colors[3].bgColor}
                  />
                </DayRow>
                <DayRow>
                  <Day
                    number='17'
                    active
                    eventTitle1={regions[2].region}
                    eventDate={times[1].time}
                    bgColor={colors[3].bgColor}
                  />
                  <Day
                    number='18'
                    // active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[0].bgColor}
                  />
                  <Day
                    number='19'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[1].bgColor}
                  />
                  <Day
                    number='20'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[1].bgColor}
                  />
                  <Day
                    number='21'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[1].bgColor}
                  />
                  <Day
                    number='22'
                    active
                    eventTitle1={regions[3].region}
                    eventDate={times[1].time}
                    bgColor={colors[2].bgColor}
                  />
                  <Day
                    number='23'
                    active
                    eventTitle1={regions[3].region}
                    eventDate={times[1].time}
                    bgColor={colors[2].bgColor}
                  />
                </DayRow>
                <DayRow>
                  <Day
                    number='24'
                    active
                    eventTitle1={regions[3].region}
                    eventDate={times[1].time}
                    bgColor={colors[2].bgColor}
                  />
                  <Day
                    number='25'
                    // active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[0].bgColor}
                  />
                  <Day
                    number='26'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[1].bgColor}
                  />
                  <Day
                    number='27'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[1].bgColor}
                  />
                  <Day
                    number='28'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[1].bgColor}
                  />
                  <Day
                    number='29'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[3].bgColor}
                  />
                  <Day
                    number='30'
                    active
                    eventTitle1={regions[1].region}
                    eventDate={times[1].time}
                    bgColor={colors[3].bgColor}
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

const Day = ({ active, number, eventTitle1, eventDate, bgColor }) => {
  return (
    <td
      className={`ease relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 hover:bg-gray-2 border-base-content dark:hover:bg-dark md:h-[125px] lg:w-28 2xl:w-40 ${bgColor}`}
    >
      <div className='mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40 '>
        <div className='top h-5 w-full'>
          <span className='text-secondary font-extrabold  sm:text-2xl'>
            {number}
          </span>
        </div>
        {active && (
          <div className='bottom md:h-30 group h-16 w-full flex-grow cursor-pointer sm:py-5'>
            <span className='text-base-content group-hover:text-primary  lg:hidden'>
              More
            </span>
            <div
              className={`event invisible absolute left-2 z-1 mb-1 w-[200%] rounded border-l-[3px] border-primary bg-gray-2 px-2 py-[6px] text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark md:visible md:w-[190%] lg:opacity-100 text-[8px] lg:text-sm `}
            >
              <div className='items-center'>
                <span className='event-name block  font-medium text-primary'>
                  {eventTitle1}
                </span>
                <span className='time text-sm text-secondary'>{eventDate}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </td>
  );
};
