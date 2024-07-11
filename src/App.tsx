import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user-info' element={<UserDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
