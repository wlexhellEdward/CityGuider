import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { HomePage } from '@/pages/HomePage';
import { ROUTES_NOT_AUTH } from '@/consts/consts';

function App() {
  return (
    <>
      <Routes>
        {ROUTES_NOT_AUTH.map((route) => {
          return (
            <Route path={route.url} element={route.component} />
          )
        })}
        <Route path='/' Component={HomePage} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;