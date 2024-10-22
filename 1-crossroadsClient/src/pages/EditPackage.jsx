import {
  Form,
  useLoaderData,
  redirect,
  useNavigation,
  useOutletContext,
} from 'react-router-dom';
import {
  FormInput,
  FormSelect,
  FormSelects,
  FormInputs,
  SubmitBtn,
  FormDate,
} from '../components';
import {
  DESTINATION_COUNTRIES,
  PACKAGE_STATES,
  NUMBER_OF_ITEMS,
  SENDER_COMMITMENT,
  PACKAGE_STATUS,
  DESIRED_SHIPPING_MODE,
} from '../../../7-utils/constants';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/packages/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard');
  }
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/packages/${params.id}`, data);
    toast.success('Package edited successfully');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditPackage = () => {
  const { user } = useOutletContext();
  const { pack } = useLoaderData();
  console.log(pack);

  return (
    <div>
      <section className='  place-items-center mt-20  '>
        <Form
          method='POST'
          className=' w-full lg:w-full px-8 pb-20 pt-10 bg-base-100 shadow-lg flex flex-col gap-y-4  border-t-4 border-primary text-xl '
        >
          <h4 className='text-start sm:text-3xl font-bold my-8 capitalize '>
            Edit Package
          </h4>

          <div className='  grid lg:grid-cols-2 2xl:grid-cols-3 gap-4  '>
            {/* <FormDate name='dateOfBirth' label='member date of birth' /> */}

            <FormSelect
              label='desired shipping mode'
              name='desiredShippingMode'
              value={pack.desiredShippingMode}
              list={Object.values(DESIRED_SHIPPING_MODE)}
              onChange={() => null}
            />

            <FormSelect
              label='package state'
              name='packageState'
              value={pack.packageState}
              list={Object.values(PACKAGE_STATES)}
              onChange={() => null}
            />
            <FormInput
              type='text'
              label='Sender phone number'
              name='senderPhoneNumber'
              defaultValue={pack.senderPhoneNumber}
              onChange={() => null}
            />
            <FormInput
              type='text'
              label='package street address'
              name='packageStreetAddress'
              value={pack.packageStreetAddress}
              onChange={() => null}
            />

            <FormInput
              type='text'
              label='package city'
              name='packageCity'
              value={pack.packageCity}
              onChange={() => null}
            />
            <FormInput
              type='text'
              label='package zip code'
              name='packageZipCode'
              value={pack.packageZipCode}
              onChange={() => null}
            />

            <FormInput
              text='text'
              label='package brief description'
              name='packageDescription'
              defaultValue={pack.packageDescription}
            />
            {/* <FormInput text='text' label='number of items' name='numberOfItems' /> */}
            <FormSelect
              label='number of items'
              name='numberOfItems'
              defaultValue={pack.numberOfItems}
              list={Object.values(NUMBER_OF_ITEMS)}
            />
            <FormSelect
              label='destination country'
              name='destinationCountry'
              defaultValue={pack.destinationCountry}
              list={Object.values(DESTINATION_COUNTRIES)}
              onChange={() => null}
            />
            <FormInput
              type='text'
              label='receiver full name'
              name='receiverFullName'
              defaultValue={pack.receiverFullName}
            />

            {/* <FormInput type="Date" label="date of Birth" name="dateOfBirth" /> */}

            <FormInput
              type='text'
              label='receiver phone number'
              name='receiverPhoneNumber'
              defaultValue={pack.receiverPhoneNumber}
            />
            <FormInput
              type='text'
              label='receiver city'
              name='receiverCity'
              defaultValue={pack.receiverCity}
            />

            <FormInput
              type='text'
              label='pickup date'
              name='pickupDate'
              value={pack.pickupDate}
              onChange={() => null}
            />
            {user.userRole === 'user' ? (
              <FormSelect
                label='Sender Commitment'
                name='senderCommitment'
                defaultValue={pack.senderCommitment}
                list={Object.values(SENDER_COMMITMENT)}
              />
            ) : (
              <>
                <FormSelect
                  label='Sender Commitment'
                  name='senderCommitment'
                  defaultValue={pack.senderCommitment}
                  list={Object.values(SENDER_COMMITMENT)}
                />
                <FormSelect
                  label='package status'
                  name='packageStatus'
                  defaultValue={pack.packageStatus}
                  list={Object.values(PACKAGE_STATUS)}
                />
                <FormInput
                  label='shipping price'
                  name='shippingPrice'
                  defaultValue={pack.shippingPrice}
                />
              </>
            )}
            <div className='mt-9'>
              <SubmitBtn text='Submit' />
            </div>
          </div>
        </Form>
      </section>
    </div>
  );
};
export default EditPackage;
