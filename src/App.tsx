import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import DateTime from './components/Date-Time';
import ContactCard from './components/Contact-Card';
import './App.css';
import Joke from './components/Joke';

function App() {
  return (
    <div className="App">
      <Joke />
      {/* <ContactCard name='' imgUrl='' phone='' email='' /> */}
      {/* <Header />
      <MainContent />
      <DateTime />
      <nav>
        <h1>Hello there</h1>
        <ul>
          <li>Thing 1</li>
          <li>Thing 2</li>
          <li>Thing 3</li>
        </ul>
      </nav>
      <main>
        <p>This is my content</p>
      </main>
      <Footer /> */}
    </div>
  );
}

export default App;
