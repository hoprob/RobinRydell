import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className="App relative bg-primary">      
      <Header></Header>
      <main className="pt-16 z-0 pb-10">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NoMatch/>}/>
          </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
