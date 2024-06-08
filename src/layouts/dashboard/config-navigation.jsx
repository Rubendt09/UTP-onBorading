import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Inicio',
    path: '/',
    icon: icon('house'), // ic_analytics
  },
  {
    title: 'Ranking',
    path: '/user',
    icon: icon('ranking'), // c_user
  },
  {
    title: 'evento',
    path: '/eventos',
    icon: icon('events'), // ic_cart
  },
  {
    title: 'Cursos',
    path: '/courses',
    icon: icon('courses'),
  },
  {
    title: 'Help',
    path: '/products',
    icon: icon('help'),
  },

  {/*
    title: 'Products',
    path: '/products',
    icon: icon('help'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_blog'),
  */},

  {
    title: 'Cerrar Sesion',
    path: '/login',
    icon: icon('ic_lock'),
  },
  
  {/*
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
*/},
];

export default navConfig;
