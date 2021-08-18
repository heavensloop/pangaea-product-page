import './language-chooser.scss';

const LanguageChooser = () => {
  const languages = ['AR', 'FR', 'EN  ', 'ES', 'DE', 'HE', 'ID', 'TW', 'PT', 'TH', 'DA', 'JA', 'KO'];

  return (
    <select className="lang select">
      {languages.map((label) => (
        <option value={label.toLowerCase()}>{label}</option>
      ))}
    </select>
  )
};

export default LanguageChooser;