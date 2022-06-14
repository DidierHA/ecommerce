import './Input.scss';

const Input = ({
  label,
  type,
  onChange,
  value,
  name,
  required,
  placeholder,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
