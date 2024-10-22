import { FormInput, SubmitBtn } from '../components';
import {
  Form,
  Link,
  redirect,
  useLocation,
  useNavigate,
} from 'react-router-dom';

const ResetPassword = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96 p-8 bg-base-200 shadow-2xl flex flex-col gap-y-4 border-t-8  border-primary'
      >
        <h4 className='text-center text-3xl font-bold mt-4 capitalize'>
          reset password
        </h4>

        <FormInput type='password' label=' new password' name='password' />
        <div className='my-4'>
          <SubmitBtn text='reset password' />
        </div>
      </Form>
    </section>
  );
};
export default ResetPassword;
