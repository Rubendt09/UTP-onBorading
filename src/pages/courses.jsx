import { Helmet } from 'react-helmet-async';

import { CoursesView } from 'src/sections/courses/view';

// ----------------------------------------------------------------------

export default function CoursesPage() {
  return (
    <>
      <Helmet>
        <title> Courseos | Minimal UI </title>
      </Helmet>

      <CoursesView />
    </>
  );
}
