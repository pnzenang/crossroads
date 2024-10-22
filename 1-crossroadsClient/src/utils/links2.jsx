import { LuPackagePlus } from 'react-icons/lu';
import { TbPackages } from 'react-icons/tb';
import { ImProfile } from 'react-icons/im';
import { MdOutlineQueryStats, MdDataArray } from 'react-icons/md';
import { BsDatabaseGear } from 'react-icons/bs';

const links2 = [
  {
    text: 'all package',
    path: '.',
    icon: <TbPackages />,
  },

  {
    text: 'add package',
    path: 'add-package',
    icon: <LuPackagePlus />,
  },

  {
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
  // {
  //   text: 'stats',
  //   path: 'stats',
  //   icon: <MdOutlineQueryStats />,
  // },
  {
    text: 'all packages-admin',
    path: 'all-packages-admin',
    icon: <MdDataArray />,
  },
  {
    text: 'admin',
    path: 'admin',
    icon: <BsDatabaseGear />,
  },
];
export default links2;
