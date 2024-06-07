import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Inicio | UTP+onBoarding </title>
      </Helmet>

      <AppView />
    </>
  );
}
