import { Helmet } from 'react-helmet-async';
import DetailCourseView from 'src/sections/detail-course';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> UTP+app | UTP </title>
      </Helmet>

      <DetailCourseView 
        nombre="Conoce UTP+app" 
        logo="https://utp-prd-upload-file-storage.s3.amazonaws.com/pao/content/ec28d5df-f86c-4654-82de-b6b48ffe499a/UTP%20%2B%20class_DIORJI.png"
        video="https://www.youtube.com/embed/bTTZeoTknvQ?si=qNtca86TisCU-gnE"
        ruta="utp+app"
      />
    </>
  );
}
