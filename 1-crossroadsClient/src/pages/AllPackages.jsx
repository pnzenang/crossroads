import { toast } from 'react-toastify';
import { SearchContainer, PackagesContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useContext, createContext } from 'react';
import { useLoaderData } from 'react-router-dom';

export const loader = async ({ request }) => {
  console.log(request.url);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch.get('/packages', { params });
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllPackagesContext = createContext();

const AllPackages = () => {
  const { data, searchValues } = useLoaderData();
  console.log(data);
  return (
    <AllPackagesContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <PackagesContainer />
    </AllPackagesContext.Provider>
  );
};

export const useAllPackagesContext = () => useContext(AllPackagesContext);
export default AllPackages;
