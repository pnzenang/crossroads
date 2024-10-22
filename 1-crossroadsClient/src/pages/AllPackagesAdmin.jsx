import { toast } from 'react-toastify';
import { SearchContainerAdmin, PackagesAdminContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useContext, createContext } from 'react';
import { useLoaderData, redirect } from 'react-router-dom';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get('users/admin/all-packages-admin', {
      params,
    });
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard');
  }
};

const AllPackagesAdminContext = createContext();

const AllPackagesAdmin = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <AllPackagesAdminContext.Provider value={{ data, searchValues }}>
      <SearchContainerAdmin />
      <PackagesAdminContainer />
    </AllPackagesAdminContext.Provider>
  );
};
export const useAllPackagesAdminContext = () =>
  useContext(AllPackagesAdminContext);
export default AllPackagesAdmin;

// const AllPackagesAdmin = () => {
//   return <div>AllPackagesAdmin</div>;
// };
// export default AllPackagesAdmin;
