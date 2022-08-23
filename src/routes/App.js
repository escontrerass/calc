import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContextProvider } from '../context/appContext';
import { Error404 } from '../pages/Error404';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
