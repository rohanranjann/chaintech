import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './Components/Header/Header';

import About from './Components/About/index';
import AppFooter from './Components/Footer/AppFooter';


function App() {
  return (
    <div className='App'>
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <About />
      </main>
      <footer id='footer'>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
