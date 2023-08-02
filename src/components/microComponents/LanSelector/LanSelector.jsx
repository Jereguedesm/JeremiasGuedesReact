import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next'

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
        </Select>
      </FormControl>
    </Box>
  );
}

export default LanSelector;



/*
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next'

const LanSelector = () => {

  const [t, i18n] = useTranslation("global")

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
  }



  const [Language, setLan] = React.useState('');

  const handleChange = (event) => {
    setLan(event.target.value);
  };

  return (
    <>
  <button onClick={() => handleLanguageChange("en")}>English</button>
  <button onClick={() => handleLanguageChange("es")}>Spanish</button>



    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Idioma</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Language}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={0}>Español</MenuItem>
          <MenuItem value={1}>English</MenuItem>
        </Select>
      </FormControl>
    </Box>

    </>
  );
}

export default LanSelector
*/