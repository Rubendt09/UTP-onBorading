import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
// GREY IS THE PRINCIPAL THEME

// 100 fondo de la pagina
// 200 cabecera de la tabl user

// 500 color de fondo de user y letras en general
// 600 color de los iconos
// 800 color de texto global

export const grey = {
  0: '#FFFFFF',
  100: '#ECF4F9', 
  200: '#ECF4F9',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#000F37',
  600: '#000F37',
  700: '#454F5B',
  800: '#000F37',
  900: '#161C24',
};

// main color de seleccion de opciones
// contrastText color de boton de error 404

export const primary = {
  lighter: '#F8B6D4',
  light: '#F482A2',
  main: '#5B36F2',
  dark: '#745ef6',
  darker: '#6C1225',
  contrastText: '#FFFFFF',
};

export const secondary = {
  lighter: '#EFD6FF',
  light: '#C684FF',
  main: '#8E33FF',
  dark: '#5119B7',
  darker: '#27097A',
  contrastText: '#FFFFFF',
};

// contrastText color de texto en PROGRESO
// main color del contenedor de EN PROGRESO

export const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#FDDC70  ',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#69493A',
};

export const success = {
  lighter: '#C8FAD6',
  light: '#5BE49B',
  main: '#A8F1BB',
  dark: '#007867',
  darker: '#004B50',
  contrastText: '#005C27',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFD666',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette() {
  return {
    ...base,
    mode: 'light',
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: grey[100],
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };
}
