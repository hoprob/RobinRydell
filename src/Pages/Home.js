import Jumbotron from "../components/Jumbotron";
import ScrollDownChevron from "../components/ScrollDownChevron";
import InformationCode from "../components/InformationCode";
import HomeBrewing from "../components/HomeBrewing";
import { useState, useEffect } from "react";
import AboutMe from "../components/AboutMe";
function Home() {

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
    <>
      <div
        className={`flex flex-col space-y-5 pt-32 ${
          scrollPosition < 50 ? "sm:pb-10 pb-14" : "pb-2"
        } mb-2 justify-between h-[calc(100vh-64px)] min-h-[450px]`}
      >
        <Jumbotron></Jumbotron>
        <ScrollDownChevron
          chevronExpanded={scrollPosition < 50}
        ></ScrollDownChevron>
      </div>
      <div className="space-y-16">
        <AboutMe></AboutMe>
        <InformationCode></InformationCode>
        <HomeBrewing></HomeBrewing>
      </div>
    </>
  );
}

export default Home;
