import vessel from '../assets/cargo2.jpg';

const tableData = [
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Twin Mattress',
    price: '$100',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Queen Mattress',
    price: '$150',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'King Mattress',
    price: '$200',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Cars: Sedan (Empty) ',
    price: '$1,600',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Cars small SUV(Empty)',
    price: '$1,900',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Cars:regular suv(Empty)',
    price: '$2,500',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Cars: Truck(Empty)',
    price: '$2,000',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Boxes(8"x8"x8")',
    price: '$30',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Boxes(12"x12"x12")',
    price: '$60',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Boxes(15"x15"x15")',
    price: '$100',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Boxes(20"x20"x20")',
    price: '$160',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Boxes(25"x20"x20")',
    price: '$200',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'SuitCase(Large)',
    price: '$200',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'SuitCase(Medium)',
    price: '$180',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'SuitCase(Small)',
    price: '$150',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Furniture(non folding Chair)',
    price: '$30',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Furniture(Folding Chair)',
    price: '$10',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Furniture(5 pieces living Room)',
    price: '$2400',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Furniture(Love seat)',
    price: '$800',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Furniture(3 seat Sofa)',
    price: '$1200',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Furniture(one Chair)',
    price: '$269',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Barrel(55 gallons',
    price: '$300',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Barrel( more than 55 gallons)',
    price: '$340',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Storage Tote(less than 35 gallons)',
    price: '$170',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Storage Tote(55 gallons)',
    price: '$220',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Cooking Stove ',
    price: '$600',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Refrigerators(1-door)',
    price: '$500',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Refrigerators(2-door)',
    price: '$600',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Refrigerators(3-door)',
    price: '$750',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Flat Screen TV(less than 32")',
    price: '$180',
  },
  {
    image: vessel,
    imageAlt: 'product',
    name: 'Flat Screen TV(between 36" to 55)',
    price: '$260',
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/table-12/image-01.jpg',
    imageAlt: 'product',
    name: 'Flat Screen TV(more than 60)',
    price: '$700',
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/table-12/image-02.jpg',
    imageAlt: 'product',
    name: 'Computer',
    price: '$40',
  },
];

const headers = [
  {
    name: 'Item Image and Name',
    styles: 'w-11/12',
  },

  {
    name: ' Price',
    styles: 'w-1/12 ',
  },
];

const SeaContainerPrice = () => {
  return (
    <section className='mt-20 bg-base-300 py-3 lg:py-5'>
      <h1 className='text-center text-5xl font-bold p-5 text-orange-500'>
        CONTAINER PRICING{' '}
      </h1>
      <div className='mx-auto px-4 lg:container'>
        <div className='mx-auto w-full  rounded-lg border border-stroke bg-base-200 '>
          <div className='max-w-full overflow-x-auto'>
            <table className='w-full table-auto'>
              <TableHead headers={headers} />
              <TableBody data={tableData} />
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeaContainerPrice;

const TableHead = ({ headers }) => {
  return (
    <thead className=''>
      <tr className='border-b border-stroke dark:border-dark-3 '>
        {headers.map((header, index) => (
          <th
            className={`py-5 px-4 first:pl-8 last:pr-8 ${header.styles} `}
            key={index}
          >
            <p className='lg:text-2xl font-medium text-left  text-orange-500'>
              {header.name}
            </p>
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr
          className='border-b border-stroke dark:border-dark-3 last-of-type:border-none'
          key={index}
        >
          <td className='py-[18px] pl-6 pr-3'>
            <div className='flex items-center'>
              <div className='flex place-items-center'>
                <img
                  src={row.image}
                  alt={row.imageAlt}
                  className='mr-4 h-10 w-10 lg:h-36 lg:w-36 rounded object-cover object-center'
                />
                <p className='lg:text-xl text-base-content'>{row.name}</p>
              </div>
            </div>
          </td>

          <td className='py-[18px] px-4'>
            <p className='lg:text-xl text-base-content'>{row.price}</p>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
