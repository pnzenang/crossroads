const FormSelect = ({
  label,
  name,
  list,
  defaultValue,
  onChange,
  value,
  size,
}) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <select
        name={name}
        className={`bg-base-200 uppercase  text-lg input select select-bordered ${size}`}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
