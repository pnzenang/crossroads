import React from 'react';
import airExpress from '../assets/airExpress.png';
import airRegular from '../assets/airRegular.png';
import seaTrans from '../assets/seaTrans.png';
import delivery from '../assets/delivery.png';
import List from '../components/List';
const Card2 = () => {
  return (
    <section className='pb-10  pt-20 dark:bg-dark lg:pb-10 lg:pt-[120px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap '>
          <SingleCard
            image={seaTrans}
            CardTitle='SEA CONTAINER'
            titleHref='#type1'
            btnHref='#type1'
            CardDescription='Your Package travels in a shipping container forwarded in a sea vessel(6-8 weeks).'
            Button='View Details'
          />
          <SingleCard
            image={airRegular}
            CardTitle='AIR REGULAR'
            titleHref='#type2'
            btnHref='#type2'
            CardDescription='Here, your package travels in plane, eventually a cargo plane(6-12 days).'
            Button='View Details'
          />
          <SingleCard
            image={airExpress}
            CardTitle='AIR EXPRESS'
            titleHref='#type3'
            btnHref='#type3'
            CardDescription='Here, your package travels faster, eventually a cargo plane(4-8 days).'
            Button='View Details'
          />
          <SingleCard
            image={delivery}
            CardTitle={`CENTRALE D'ACHAT`}
            titleHref='#type4'
            btnHref='#type4'
            CardDescription='In all modes of shipment, we pick-up and deliver your packages .'
            Button='View Details'
          />
        </div>
      </div>
    </section>
  );
};

export default Card2;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <div className='w-full px-4 lg:w-1/2 xl:w-1/2'>
      <div className='relative  mb-10 block items-center overflow-hidden rounded-lg bg-base-300 p-3 dark:bg-dark-2 sm:flex sm:items-stretch md:items-center lg:block xl:flex xl:items-stretch'>
        <div className='w-full sm:max-w-[200px] md:max-w-[250px] lg:max-w-full xl:max-w-[200px] 2xl:max-w-[240px]'>
          <div className='h-[250px] sm:h-full lg:h-[250px] xl:h-full'>
            <img
              src={image}
              alt='image'
              className='max-h-full max-w-full object-cover object-center p-5  '
            />
          </div>
        </div>
        <div className='w-full p-8 sm:p-6 md:p-8'>
          <h3>
            <a
              href={titleHref}
              className='mb-3 block md:text-3xl font-semibold text-dark hover:text-primary text-base-content'
            >
              {CardTitle}
            </a>
          </h3>
          <p className='mb-5 text-base leading-relaxed text-body-color dark:text-dark-6'>
            {CardDescription}
          </p>
          {Button && (
            <a
              href={btnHref}
              className='inline-block rounded-full border border-primary px-6 py-2 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white'
            >
              {Button}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// import React from 'react';

// const Card2 = () => {
//   return (
//     <section className='bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]'>
//       <div className='container mx-auto'>
//         <div className='-mx-4 flex flex-wrap'>
//           <SingleCard
//             image={seaTrans}
//             // image='https://i.ibb.co/MVv7h59/image-01.jpg'
//             CardTitle='Creative Website Themes & Templates in 2021'
//             titleHref='#'
//             btnHref='#'
//             CardDescription='Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.'
//             Button='View Details'
//           />
//           <SingleCard
//             image='https://i.ibb.co/R7M31z0/image-02.jpg'
//             CardTitle='Creative Website Themes & Templates in 2021'
//             titleHref='#'
//             btnHref='#'
//             CardDescription='Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.'
//             Button='View Details'
//           />
//           <SingleCard
//             image='https://i.ibb.co/R7SrWtJ/image-03.jpg'
//             CardTitle='Creative Website Themes & Templates in 2021'
//             titleHref='#'
//             btnHref='#'
//             CardDescription='Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.'
//             Button='View Details'
//           />
//           <SingleCard
//             image='https://i.ibb.co/dkdXLc3/image-04.jpg'
//             CardTitle='Creative Website Themes & Templates in 2021'
//             titleHref='#'
//             btnHref='#'
//             CardDescription='Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.'
//             Button='View Details'
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Card2;

// const SingleCard = ({
//   image,
//   Button,
//   CardDescription,
//   CardTitle,
//   titleHref,
//   btnHref,
// }) => {
//   return (
//     <div className='w-full px-4 lg:w-1/2 xl:w-1/2'>
//       <div className='relative z-1 mb-10 block items-center overflow-hidden rounded-lg bg-[#F2F5FC] dark:bg-dark-2 sm:flex sm:items-stretch md:items-center lg:block xl:flex xl:items-stretch'>
//         <div className='w-full sm:max-w-[200px] md:max-w-[250px] lg:max-w-full xl:max-w-[200px] 2xl:max-w-[240px]'>
//           <div className='h-[250px] sm:h-full lg:h-[250px] xl:h-full'>
//             <img
//               src={image}
//               alt='image'
//               className='h-full w-full object-cover object-center '
//             />
//           </div>
//         </div>
//         <div className='w-full p-8 sm:p-6 md:p-8'>
//           <h3>
//             <a
//               href={titleHref}
//               className='mb-3 block text-xl font-semibold text-dark hover:text-primary dark:text-white'
//             >
//               {CardTitle}
//             </a>
//           </h3>
//           <p className='mb-5 text-base leading-relaxed text-body-color dark:text-dark-6'>
//             {CardDescription}
//           </p>
//           {Button && (
//             <a
//               href={btnHref}
//               className='inline-block rounded-full border border-primary px-6 py-2 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white'
//             >
//               {Button}
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
