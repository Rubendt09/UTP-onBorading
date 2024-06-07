import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const COURSE_NAME = [
  'Conoce UTP+class',
  'Conoce UTP+portal',
  'Conoce UTP+app',
  'Conoce UTP+info',
  'Conoce UTP+biblio',
];
const COURSE_COLOR = [
  '#00AB55'
];

// ----------------------------------------------------------------------

export const courses = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/assets/images/courses/course_${setIndex}.png`,
    name: COURSE_NAME[index],
    price: "18/20",
    colors: COURSE_COLOR,
    status: sample(['En progreso', 'Completado']),
  };
});
