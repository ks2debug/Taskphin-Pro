/* eslint-disable react/jsx-filename-extension */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';
import { Constants } from './utils';
import { useOnlineStatus } from './customHooks';

const Dashboard = lazy(() => import('./components/pages/Dashboard'));

function App() {
  const isOnline = useOnlineStatus();

  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<p>ErrorPage</p>}>
        <Suspense fallback={<p>Loader</p>}>
          {isOnline ? (
            <Routes>
              <Route path={Constants.ENUM_PATH.DASHBOARD} element={<Dashboard />} />
            </Routes>
          ) : (
            <p>OfflinePage</p>
          )}
        </Suspense>
      </ErrorBoundary>
      <ToastContainer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
