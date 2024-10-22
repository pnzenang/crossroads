import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import {
  FormInput,
  SubmitBtn,
  FormPhone,
  Logo,
  FormInputs,
} from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Successful, please login now.');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const [userPassword, setUserPassword] = useState('');
  const [type, setType] = useState('password');
  const [Icon, setIcon] = useState(EyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(Eye);
      setType('text');
    } else {
      setIcon(EyeOff);
      setType('password');
    }
  };
  return (
    <section className='h-screen grid  place-items-center '>
      <Form
        method='POST'
        className=' w-96 lg:w-2/5 p-8 bg-base-200 shadow-2xl flex flex-col gap-y-4 border-t-8 border-primary'
      >
        <Logo />
        <h4 className='text-center text-3xl font-bold mt-4'>Register</h4>
        <div className='grid lg:grid-cols-2 gap-4 '>
          <FormInput type='text' label=' first names' name='userFirstName' />
          <FormInput
            type='text'
            label='middle and last names'
            name='userMiddleAndLastName'
          />
        </div>
        <div className='grid lg:grid-cols-2 gap-4 '>
          <FormInputs type='email' label='email' name='userEmail' />
          <FormPhone type='text' label='phone number' name='userPhoneNumber' />
        </div>

        <FormInput
          type='text'
          label='street address'
          name='userStreetAddress'
        />
        <div className='grid lg:grid-cols-3 gap-4 '>
          <FormInput type='text' label='city' name='userCity' />
          <FormInput type='text' label='state' name='userState' />
          <FormInput type='text' label='zip code' name='userZipCode' />
        </div>

        <div className=' grid lg:grid-cols-2 gap-4'>
          <div className='w-full '>
            <div>
              <div className='label'>
                <span className='label-text'>Password</span>
              </div>
              <div className='flex '>
                <input
                  className='input
                input-bordered
                w-full bg-base-200 md:text-lg max-w'
                  type={type}
                  name='userPassword'
                  // placeholder='Password'
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  autoComplete='current-password'
                />
                <span
                  className='flex justify-around items-center'
                  onClick={handleToggle}
                >
                  <Icon className='absolute mr-10 text-primary' size={25} />
                </span>
              </div>
            </div>
          </div>
          {/* <FormInput type='password' label='password' name='userPassword' /> */}
          <div className='mt-9'>
            <SubmitBtn text='register' />
          </div>
        </div>
        <p className='text-center '>
          Already a member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-primary capitalize'
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
