import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const COURSE_NAME = [
  'Conoce UTP+class',
  'Conoce UTP+portal',
  'Conoce UTP+app',
  // 'Conoce UTP+info',
  'Conoce UTP+biblio',
];

const COURSE_NAME_LINKS = [
  'utp+class',
  'utp+portal',
  'utp+app',
  // 'utp+info',
  'utp+biblio',
];

const COURSE_COLOR = [
  '#000000'
];

// ----------------------------------------------------------------------

export const courses = [...Array(4)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/assets/images/courses/course_${setIndex}.png`,
    name: COURSE_NAME[index],
    links: COURSE_NAME_LINKS[index],
    price: "18/20",
    colors: COURSE_COLOR,
    status: sample(['Por completar', 'Completado']),
    testScore: null,
  };
});
