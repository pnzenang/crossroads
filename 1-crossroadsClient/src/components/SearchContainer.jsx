import {
  useOutletContext,
  Form,
  useNavigation,
  useSubmit,
  redirect,
  Link,
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
  PACKAGE_STATES_STRICT,
  DESTINATION_COUNTRIES_STRICT,
  PACKAGE_STATUS,
  SENDER_COMMITMENT,
  DESIRED_SHIPPING_MODE_STRICT,
  PACKAGE_SORT_BY,
} from '../../../7-utils/constants.js';
import { useAllPackagesContext } from '../pages/AllPackages.jsx';

const SearchContainer = () => {
  const { searchValues } = useAllPackagesContext();
  const {
    search,
    packageState,
    destinationCountry,
    desiredShippingMode,
    senderCommitment,
    packageStatus,
    sort,
  } = searchValues;
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };
  return (
    <section className='  place-items-center mt-20  '>
      <Form
        // method='POST'
        className=' w-full lg:w-full px-8 pb-20 pt-10 bg-base-100 shadow-lg flex flex-col gap-y-4  border-t-4 border-primary text-xl '
      >
        <h4 className='text-start sm:text-3xl font-bold my-8 capitalize '>
          package Search form
        </h4>

        <div className='  grid lg:grid-cols-2 2xl:grid-cols-3 gap-4  '>
          {/* <FormDate name='dateOfBirth' label='member date of birth' /> */}
          <FormInputs
            label='search receiver name'
            name='search'
            type='search'
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />

          <FormSelect
            label='package state'
            name='packageState'
            defaultValue={packageState}
            list={['all', ...Object.values(PACKAGE_STATES_STRICT)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormSelect
            label='destination country'
            name='destinationCountry'
            defaultValue={destinationCountry}
            list={['all', ...Object.values(DESTINATION_COUNTRIES_STRICT)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormSelect
            label='sender desired shipping mode'
            name='desiredShippingMode'
            defaultValue={desiredShippingMode}
            list={['all', ...Object.values(DESIRED_SHIPPING_MODE_STRICT)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormSelect
            label='sender commitment'
            name='senderCommitment'
            defaultValue={senderCommitment}
            list={['all', ...Object.values(SENDER_COMMITMENT)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormSelect
            label='package status'
            name='packageStatus'
            defaultValue={packageStatus}
            list={['all', ...Object.values(PACKAGE_STATUS)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormSelect
            label='sort'
            name='sort'
            defaultValue={sort}
            list={['all', ...Object.values(PACKAGE_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to='/dashboard' className='btn btn-secondary btn-block mt-9'>
            Reset Search Values
          </Link>
          {/* <div className='mt-9'>
            <SubmitBtn text='Submit' />
          </div> */}
        </div>
      </Form>
    </section>
  );
};
export default SearchContainer;
