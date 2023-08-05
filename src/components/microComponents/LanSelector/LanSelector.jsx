/*import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

const LanSelector = () => {
  const [t, i18n] = useTranslation('global');

  // Obtener el idioma almacenado en el localStorage o usar el idioma por defecto
  const storedLanguage = localStorage.getItem('preferredLanguage') || i18n.language;

  const [selectedLanguage, setSelectedLanguage] = React.useState(storedLanguage);

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setSelectedLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);
    // Almacenar el idioma seleccionado en el localStorage
    localStorage.setItem('preferredLanguage', selectedLang);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{t('header.nav.lanSel.lan')}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLanguage}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="es">{t('header.nav.lanSel.es')}</MenuItem>
          <MenuItem value="en">{t('header.nav.lanSel.en')}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanSelector;*/
















import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next'
import "./LanSelector.css"

const LanSelector = () => {

  const [t, i18n] = useTranslation("global")

  const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.language);

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{t("header.nav.lanSel.lan")}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLanguage}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="es">Español</MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="de">Deustch</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default LanSelector;



