import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { redirect } from 'react-router-dom';

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/packages/${params.id}`);
    toast.success('package deleted successfully');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect('/dashboard');
};

const DeletePackage = () => {
  return <div>DeletePackage</div>;
};
export default DeletePackage;
