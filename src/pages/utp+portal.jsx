import { Helmet } from 'react-helmet-async';

import DetailCourseView from 'src/sections/detail-course';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> UTP+class | UTP </title>
      </Helmet>

      <DetailCourseView 
        nombre="Conoce UTP+portal" 
        logo="data:image/png;base64,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"
        video="https://www.youtube.com/embed/P3rUUUmuSJg?si=HsA8-MOu7dw5Txj_"
        ruta="utp+portal"
      />

    </>
  );
}
