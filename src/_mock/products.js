import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'EVENTO 1',
  'EVENTO 2',
  'EVENTO 3',
  'EVENTO 4',
  'EVENTO 5',
  'EVENTO 6',
  'EVENTO 7',
  'EVENTO 8',
];
const PRODUCT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

const EVENTO_LUGAR = [
  'Av. Arequipa 265, Lima 15046',
  'Jr. Hernán Velarde 260',
  'Av. Petit Thouars 383 - 385',
  'Tacna y Arica 160, Arequipa 04001',
  'Panamericana Norte, Av. Alfredo Mendiola 6377, Los Olivos 15306',
  'Ctra. Panamericana S km 16, Villa EL Salvador 15842',
  'Av. Nicolás Ayllón con, Ate 15487',
  'Av. El Sol 235, San Juan de Lurigancho 15096',
];

const EVENTO_FECHA = [
  '07/06/2024'
]

// ----------------------------------------------------------------------

export const products = [...Array(8)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: faker.number.int({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.number.int({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    lugar: EVENTO_LUGAR[index],
    fecha: EVENTO_FECHA[0],
    status: sample(['sale', 'new', '', '']),
  };
});
