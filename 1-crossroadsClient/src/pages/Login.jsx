import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import { FormInput, SubmitBtn, Logo, FormInputs } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
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
    <section className='h-screen grid place-items-center p-2'>
      <Form
        method='post'
        className=' w-96 p-5 bg-base-200 shadow-2xl flex flex-col gap-y-4  border-t-8  border-primary'
      >
        <Logo />
        <h4 className='text-center text-3xl font-bold mt-4 '>Login</h4>
        <FormInputs type='email' label='email' name='userEmail' />
        <div>
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
        <div className='mt-8'>
          <SubmitBtn text='login' />
          <p className='text-center mt-4 capitalize'>
            don't have an account yet?
            <Link
              to='/register'
              className='ml-2 link link-hover link-primary capitalize'
            >
              register
            </Link>
          </p>
          <p className='text-center mt-4'>
            Forgot password?
            <Link
              to='/forgot'
              className='ml-2 link link-hover link-success capitalize'
            >
              reset
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};
export default Login;
