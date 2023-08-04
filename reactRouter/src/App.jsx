
import './App.css'

import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <div id="container">
        <h1>Navigate through the colors!</h1>
        <Navbar />
        <MainContainer />
      </div>
      <Footer /> 
    </>
  );
}

export default App;
