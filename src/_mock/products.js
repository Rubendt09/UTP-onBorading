import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Conoce UTP+class',
  'Conoce UTP+portal',
  'Conoce UTP+app',
  'Conoce UTP+info',
  'Conoce UTP+biblio',
];
const PRODUCT_COLOR = [
  '#00AB55'
];

// ----------------------------------------------------------------------

export const products = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/assets/images/products/product_${setIndex}.png`,
    name: PRODUCT_NAME[index],
    price: "18/20",
    colors: PRODUCT_COLOR,
    status: sample(['En progreso', 'Completado']),
  };
});
