import style from './App.module.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav"
import axios from "axios";
import { useEffect, useState} from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Details/Detail";
import Error404 from "./components/PageError/Error404"
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() { 
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const URL = 'http://localhost:3001/rickandmorty/';

  async function login(userData) {
    const { email, password } = userData;

    try {
      const { data } = await axios(
        `${URL}login?email=${email}&password=${password}`
      );

      const { access } = data;

      setAccess(access);

      access && navigate('/home');
    } catch (error) {
      window.alert(error.message);
    }
  }

  function logout() {
    setAccess(false);
    navigate('/');
  }

  async function onSearch(id) {
    const character = characters.find((item) => item.id === Number(id))
    if (character) return alert('¡Este personaje ya fue agregado!')
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      window.alert(error.message);
    }
  }

  function onClose(id) {
    const newCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(newCharacters);
  }

   return (
    
      <div className={style.App}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<Error404/>} />
        
      </Routes>
    </div>
  );
}

export default App;