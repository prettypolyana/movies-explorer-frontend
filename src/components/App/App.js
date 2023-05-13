import {Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

import {CurrentUserContext} from '../../contexts/CurrentUserContext';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = () => {
    setCurrentUser({
      name: 'Виталий',
      email: 'pochta@yandex.ru',
    });
    navigate('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/');
  }

  const handleRegister= () => {
    navigate('/signin');
  };

  return (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile onLogout={handleLogout} />} />
            <Route path="/signin" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Register onRegister={handleRegister} />}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
  );
}

export default App;


