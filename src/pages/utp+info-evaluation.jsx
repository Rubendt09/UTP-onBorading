import { Helmet } from 'react-helmet-async';

import { QuestionUtpInfo } from 'src/sections/questions';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Evaluación | UTP+info </title>
      </Helmet>

      <QuestionUtpInfo />
    </>
  );
}
