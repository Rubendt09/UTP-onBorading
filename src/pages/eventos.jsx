import { Helmet } from 'react-helmet-async';

import { EventosView } from 'src/sections/eventos/view';

// ----------------------------------------------------------------------

export default function EventosPage() {
  return (
    <>
      <Helmet>
        <title> Eventos | UTP+onBoarding </title>
      </Helmet>

      <EventosView />
    </>
  );
}
