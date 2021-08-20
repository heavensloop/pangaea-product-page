import PropTypes from 'prop-types';

const FormDropdown = ({ options, defaultValue, className, onChange }) => {
  const handleOnChange = (e) => {
    onChange(e.currentTarget.value);
  };

  const computedOptions = options.map((option) => ({
    label: typeof option === 'string' ? option : option.label,
    value: typeof option === 'string' ? option : option.value,
  }));

  return (
    <select
      className={className}
      value={defaultValue}
      onChange={handleOnChange}
    >
      {computedOptions.map(({ label, value }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

FormDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
      PropTypes.string.isRequired,
    ])
  ),
  defaultValue: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

FormDropdown.defaultProps = {
  options: [],
  className: '',
  onChange: () => {},
};

export default FormDropdown;
