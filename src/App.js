import './App.css';
import Jumbotron from './components/Jumbotron';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollDownChevron from './components/ScrollDownChevron';
import InformationCode from './components/InformationCode';
import { useState, useEffect } from 'react';
import HomeBrewing from './components/HomeBrewing';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  return (
    <div className="App relative bg-primary">      
      <Header></Header>
      <main className="pt-16 z-0 pb-10">
        <div className={`flex flex-col space-y-5 pt-32 ${scrollPosition < 50 ? 'sm:pb-10 pb-12' : 'pb-2'} mb-2 justify-between h-[calc(100vh-64px)] min-h-[450px]`}>
            <Jumbotron></Jumbotron>
            <ScrollDownChevron chevronExpanded={scrollPosition < 50}></ScrollDownChevron>
        </div>
        <div className="space-y-16">
          <InformationCode></InformationCode>    
          <HomeBrewing></HomeBrewing>   
        </div>       
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
