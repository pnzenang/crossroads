import { Calendar1, Calendar2, Calendar3 } from '../components';
import map from '../assets/pickup.png';
const PickUp = () => {
  return (
    <>
      <div className='pt-20 text-center'>
        <h1 className='text-xl sm:text-5xl text-primary font-extrabold text-center'>
          PICK UP MAP AND SCHEDULE
        </h1>
        <p className='sm:text-xl mt-6 '>
          Pickup areas colored either in red, yellow or green, followed by the
          pickup schedules.
        </p>
      </div>
      <div className='mt-5'>
        <img src={map} alt='map' className='object-cover object-center' />
      </div>
      <Calendar1 />
      <Calendar2 />
      <Calendar3 />
    </>
  );
};
export default PickUp;
