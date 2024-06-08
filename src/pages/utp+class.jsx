import { Helmet } from 'react-helmet-async';

import { DetailCourseView } from 'src/sections/detail-course';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> UTP+class | UTP </title>
      </Helmet>

      <DetailCourseView />
    </>
  );
}
