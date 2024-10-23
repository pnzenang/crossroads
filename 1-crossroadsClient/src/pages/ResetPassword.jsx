import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FormInputs, SubmitBtn, Logo } from '../components';
import {
  Form,
  Link,
  redirect,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { toast } from 'react-toastify';
const searchParams = new URLSearchParams(window.location.search);

export const action = async ({ request }) => {
  const userEmail = searchParams.get('email');
  const token = searchParams.get('token');

  const formData = await request.formData();
  const { userPassword } = Object.fromEntries(formData);
  const data = { token, userEmail, userPassword };
  console.log(data);

  // console.log(userPassword);
  // console.log(token);
  // console.log(userEmail);

  try {
    await customFetch.post('/auth/resetPassword', data);
    toast.success('Password reset successfully, login');
    console.log(data);

    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const ResetPassword = () => {
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
        <h4 className='text-center text-3xl font-bold mt-4 '>Reset Password</h4>

        <div>
          <div>
            <div className='label'>
              <span className='label-text'>New Password</span>
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
        <div className='mt-8 mb-5'>
          <SubmitBtn text='login' />
        </div>
      </Form>
    </section>
  );
};
export default ResetPassword;
