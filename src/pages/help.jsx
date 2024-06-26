import { Helmet } from 'react-helmet-async';

import { HelpView } from 'src/sections/help/view';

// ----------------------------------------------------------------------

export default function HelpPage() {
  return (
    <>
      <Helmet>
        <title> Ayuda | UTP+onBoarding </title>
      </Helmet>

      <HelpView />
    </>
  );
}
