import { FormInput, FormInputs, Logo, SubmitBtn } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/forgotPassword', data);
    toast.success('Please check your email for reset password link');
    return redirect('/');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const ForgotPassword = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className=' w-96 p-8 bg-base-200 shadow-2xl flex flex-col gap-y-4 border-t-8  border-primary'
      >
        <Logo />
        <h4 className='text-center text-3xl font-bold mt-4 capitalize'>
          forgot password
        </h4>
        <FormInputs type='email' label='email' name='userEmail' />

        <div className='mt-4'>
          <SubmitBtn text='send reset email' />
          <p className='text-center mt-4'>
            Not a member yet?
            <Link
              to='/register'
              className='ml-2 link link-hover link-primary capitalize'
            >
              register
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};
export default ForgotPassword;
