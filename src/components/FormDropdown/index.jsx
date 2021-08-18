import PropTypes from 'prop-types';

const FormDropdown = ({ options, defaultValue, className, onChange }) => {
  const handleOnChange = (e) => {
    onChange(e.currentTarget.value);
  };

  return (
    <select
      className={className}
      value={defaultValue}
      onChange={handleOnChange}
    >
      {options.map(({ label, value }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

FormDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  defaultValue: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

FormDropdown.defaultProps = {
  className: '',
  onChange: () => {},
};

export default FormDropdown;
