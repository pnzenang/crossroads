const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
  value,
  onChange,
}) => {
  return (
    <div className='form-control '>
      <label className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        className={`bg-base-200  capitalize input input-bordered ${size}`}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
export default FormInput;
