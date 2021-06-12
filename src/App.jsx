import {Footer} from './components/Footer';
import {Formulario} from './components/Formulario';
import {Galeria} from './components/Galeria';
import {Header} from './components/Header';
import {Mas_visitados} from './components/Mas_visitados';
import {Menu} from './components/Menu';
import {MenuMovil} from './components/MenuMovil';

import './sass/App.scss';

function App() {
  return (
    <>
    <Footer/>
    <Formulario/>
    <Galeria/>
    <Header/>
    <Mas_visitados/>
    <Menu/>
    <MenuMovil/>
    </>
  );
}

export default App;
