import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Inicio',
    path: '/app',
    icon: icon('house'), 
  },
  {
    title: 'Ranking',
    path: '/user',
    icon: icon('ranking'), 
  },
  {
    title: 'evento',
    path: '/eventos',
    icon: icon('events'), 
  },
  {
    title: 'Cursos',
    path: '/courses',
    icon: icon('courses'),
  },
  {
    title: 'Ayuda',
    path: '/help',
    icon: icon('help'),
  },

  {
    title: 'Cerrar Sesion',
    path: '/login',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
