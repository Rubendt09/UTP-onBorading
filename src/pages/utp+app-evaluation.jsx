import { Helmet } from 'react-helmet-async';

import { QuestionUtpApp } from 'src/sections/questions';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Evaluación | UTP+app </title>
      </Helmet>

      <QuestionUtpApp />
    </>
  );
}
