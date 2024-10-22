import { useOutletContext, Form } from 'react-router-dom';
import {
  FormInput,
  FormInputs,
  FormSelect,
  FormSelects,
  SubmitBtn,
} from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/users/update-user`, data);
    toast.success('user updated successfully');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Profile = () => {
  const { user } = useOutletContext();
  // console.log(user);

  return (
    <section className='mt-20'>
      <Form
        method='POST'
        className=' w-full lg:w-full px-8 pb-20 pt-10 bg-base-100 shadow-lg flex flex-col gap-y-4  border-t-4 border-primary text-xl '
      >
        <h4 className='text-start sm:text-3xl font-bold my-8 capitalize '>
          User Profile
        </h4>
        <div className='  grid lg:grid-cols-2 2xl:grid-cols-3 gap-4  '>
          <FormInput
            type='text'
            label='User First Name'
            name='userFirstName'
            defaultValue={user.userFirstName}
          />
          <FormInput
            type='text'
            label='user Last and middle name'
            name='userMiddleAndLastName'
            defaultValue={user.userMiddleAndLastName}
          />

          <FormInputs
            type='email'
            label='user email'
            name='userEmail'
            defaultValue={user.userEmail}
          />

          <FormInput
            type='text'
            label='user street address'
            name='userStreetAddress'
            defaultValue={user.userStreetAddress}
          />

          <FormInput
            text='text'
            label='user city'
            name='userCity'
            defaultValue={user.userCity}
          />
          <FormInput
            text='text'
            label='user state'
            name='userState'
            defaultValue={user.userState}
          />
          <FormInput
            text='text'
            label='user phone number '
            name='userPhoneNumber'
            defaultValue={user.userPhoneNumber}
          />
          <FormInput
            text='text'
            label='user zipCode'
            name='userZipCode'
            defaultValue={user.userZipCode}
          />

          <div className='mt-9'>
            <SubmitBtn text='submit' />
          </div>
        </div>
      </Form>
    </section>
  );
};
export default Profile;
