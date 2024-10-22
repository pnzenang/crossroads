const PackageInfo = ({ icon, text }) => {
  return (
    <>
      <span className='text-xl text-cyan-600 pr-2 pt-1'>{icon}</span>
      <span className='text-sm pt-1'>{text}</span>
    </>
  );
};
export default PackageInfo;
