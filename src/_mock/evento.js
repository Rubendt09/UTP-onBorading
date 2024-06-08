import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const EVENTO_NAME = [
  'EVENTO 1',
  'EVENTO 2',
  'EVENTO 3',
  'EVENTO 4',
  'EVENTO 5',
  'EVENTO 6',
  'EVENTO 7',
  'EVENTO 8',
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

export const eventos = [...Array(8)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/assets/images/eventos/evento${setIndex}.jpeg`,
    name: EVENTO_NAME[index],
    lugar: EVENTO_LUGAR[index],
    fecha: EVENTO_FECHA[0],
    status: sample(['sale', 'new', '', '']),
  };
});
