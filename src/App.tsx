import React from 'react';
import Movie from './Components/Movie/Movie';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <Movie />
      <Footer />
    </div>
  );
}

export default App;
