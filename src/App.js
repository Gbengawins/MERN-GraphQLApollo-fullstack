import React from 'react';
import './App.css';
import TopNavbar from './components/TopNavbar';
import Footer from "./components/Footer";
import Movies from './containers/Movies';
import AddMovie from './components/AddMovie';





function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div className="container">

      <Movies />
      <AddMovie /> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
