import {
  useOutletContext,
  Form,
  useNavigation,
  redirect,
} from 'react-router-dom';
import {
  FormInput,
  FormInputs,
  FormSelect,
  FormSelects,
  FormPhone,
  FormDate,
  SubmitBtn,
} from '../components';
import {
  PACKAGE_STATES,
  DESTINATION_COUNTRIES,
  PACKAGE_STATUS,
  SENDER_COMMITMENT,
  DESIRED_SHIPPING_MODE,
  NUMBER_OF_ITEMS,
} from '../../../7-utils/constants.js';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { User } from 'lucide-react';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/packages', data);
    toast.success('package added successfully');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddPackage = () => {
  const { user } = useOutletContext();
  return (
    <section className='  place-items-center mt-20  '>
      <Form
        method='POST'
        className=' w-full lg:w-full px-8 pb-20 pt-10 bg-base-100 shadow-lg flex flex-col gap-y-4  border-t-4 border-primary text-xl '
      >
        <h4 className='text-start sm:text-3xl font-bold my-8 capitalize '>
          add package
        </h4>

        <div className='  grid lg:grid-cols-2 2xl:grid-cols-3 gap-4  '>
          {/* <FormDate name='dateOfBirth' label='member date of birth' /> */}
          <FormSelect
            label='desired shipping mode'
            name='desiredShippingMode'
            defaultValue={DESIRED_SHIPPING_MODE.SELECT}
            list={Object.values(DESIRED_SHIPPING_MODE)}
          />

          <FormSelect
            label='package state'
            name='packageState'
            defaultValue={PACKAGE_STATES.SELECT}
            list={Object.values(PACKAGE_STATES)}
          />
          <FormInput
            type='text'
            label='Sender phone number'
            name='senderPhoneNumber'
          />
          <FormInput
            type='text'
            label='package street address'
            name='packageStreetAddress'
          />

          <FormInput type='text' label='package city' name='packageCity' />
          <FormInput
            type='text'
            label='package zip code'
            name='packageZipCode'
          />

          <FormInput
            text='text'
            label='package brief description'
            name='packageDescription'
          />
          {/* <FormInput text='text' label='number of items' name='numberOfItems' /> */}
          <FormSelect
            label='number of items'
            name='numberOfItems'
            defaultValue={NUMBER_OF_ITEMS.SELECT}
            list={Object.values(NUMBER_OF_ITEMS)}
          />
          <FormSelect
            label='destination country'
            name='destinationCountry'
            defaultValue={DESTINATION_COUNTRIES.SELECT}
            list={Object.values(DESTINATION_COUNTRIES)}
          />
          <FormInput
            type='text'
            label='receiver full name'
            name='receiverFullName'
          />

          {/* <FormInput type="Date" label="date of Birth" name="dateOfBirth" /> */}

          <FormInput
            type='text'
            label='receiver phone number'
            name='receiverPhoneNumber'
          />
          <FormInput type='text' label='receiver city' name='receiverCity' />

          <FormDate type='text' label='pickup date' name='pickupDate' />

          <div className='mt-9'>
            <SubmitBtn text='submit' />
          </div>
        </div>
      </Form>
    </section>
  );
};
export default AddPackage;
