import React, { Component, useEffect, useState  } from 'react';
import Sidebar from "./components/navigation/Sidebar";
import MobileTopbar from "./components/navigation/MobileTopbar";

import HomeContent  from "./components/content/HomeContent";
import ExperienceContent from "./components/content/ExperienceContent";
import EducationContent from "./components/content/EducationContent";
import SkillsContent from "./components/content/SkillsContent";
import PortfolioContent from "./components/content/PortfolioContent";
import ContactContent from "./components/content/ContactContent";

import { useSelector, useDispatch } from 'react-redux';
import { selectPage } from './components/navigation/navigation'
import { selectWidth, selectHeight, setWidth, setHeight } from './components/responsive/responsiveSlice'
import './App.css';

const App = ({ }) => {
  const width = useSelector(selectWidth);
  const height = useSelector(selectHeight);
  const dispatch = useDispatch();

  const styles = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `#00363A`,
    topBarHeight: 40,
    footerMenuHeight: 50,
  };

  /**
   * This function runs when the component is loaded. I am using it to get the width a height of the display
   * for resizing the display between mobile and desktop
   */
  React.useEffect(() => {
    dispatch(setWidth());
    dispatch(setHeight());
    window.addEventListener('resize', handleResize, false)
    function handleResize() {
      dispatch(setWidth())
    }
  });

  

  return (
    <div
      style={{
        backgroundColor: styles.black(0.05),
        minHeight: "100vh",
        position: "relative"
      }}>
        {width > 1000 ? (
          <Sidebar /> 
        ) : (
          <MobileTopbar/>
        )}
      {/* {page === 1 ? (
        <HomeContent styles={styles} />
      ) : page === 2 ? (
        <ExperienceContent styles={styles} />
      ) : page === 3 ? (
        <EducationContent styles={styles} />
      ) : page === 4 ? (
        <SkillsContent styles={styles} />
      ) : page === 5 ? (
        <PortfolioContent styles={styles} />
      ) : page === 6 ? (
        <ContactContent styles={styles} />
      ) : (
                    <HomeContent styles={styles} />
                  )} */}
    </div>
  );
}

export default App;
