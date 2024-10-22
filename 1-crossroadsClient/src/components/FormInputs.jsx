const FormInputs = ({
  label,
  name,
  type,
  defaultValue,
  size,
  value,
  onChange,
}) => {
  return (
    <div className='form-control  w-full'>
      <label className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        className={`bg-base-200 md:text-lg input lowercase input-bordered ${size}  `}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
export default FormInputs;
