import { HomePage } from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { ROUTES_NOT_AUTH } from 'utils/consts';

function App() {
  return (
    <Routes>
      {ROUTES_NOT_AUTH.map((route) => {
        return (
          <Route path={route.url} element={route.component} />
        )
      })}
      <Route path='/' Component={HomePage} />
    </Routes>
  );
}

export default App;
