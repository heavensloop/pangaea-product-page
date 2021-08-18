import FormDropdown from 'components/FormDropdown';
import './language-chooser.scss';

const LanguageChooser = () => {
  const options = [
    { label: 'AR', value: 'ar' },
    { label: 'FR', value: 'fr' },
    { label: 'EN', value: 'en' },
    { label: 'ES', value: 'es' },
    { label: 'DE', value: 'de' },
    { label: 'HE', value: 'he' },
    { label: 'ID', value: 'id' },
    { label: 'TW', value: 'tw' },
    { label: 'PT', value: 'pt' },
    { label: 'TH', value: 'th' },
    { label: 'DA', value: 'da' },
    { label: 'JA', value: 'ja' },
    { label: 'KO', value: 'ko' },
  ];

  return (
    <FormDropdown options={options} defaultValue="en" className="lang select" />
  );
};

export default LanguageChooser;
