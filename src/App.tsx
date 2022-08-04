import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import MainTitle from './components/main-title';
import Authorization from './pages/authorization';
import Profile from './pages/profile';

const isUserAuth = localStorage.getItem('login');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainTitle />}>
          <Route index element={isUserAuth ? <Profile /> : <Authorization />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Authorization />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
