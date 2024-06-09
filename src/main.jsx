import { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import ThemeProvider from './theme/index'; // Asegúrate de que la ruta sea correcta
import App from './app';

// ----------------------------------------------------------------------

// Registro del Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch((error) => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

// Componente para la instalación de la PWA
const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const showInstallPromotion = () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          setDeferredPrompt(null);
        });
      }
    };

    if (isMobile && deferredPrompt) {
      showInstallPromotion();
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [deferredPrompt]);

  return (
    <div>
      {deferredPrompt && (
        <button type="button" onClick={() => {
          if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
              } else {
                console.log('User dismissed the install prompt');
              }
              setDeferredPrompt(null);
            });
          }
        }}>
          Install UTP+onBoarding
        </button>
      )}
    </div>
  );
};

// Renderización de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
          <InstallPWA />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </HelmetProvider>
);
