import React from 'react';
import MobileTopbar from "./components/navigation/MobileTopbar";

import AboutContent from "./components/content/AboutContent";
import ExperienceContent from "./components/content/ExperienceContent";
import EducationContent from "./components/content/EducationContent";
import SkillsContent from "./components/content/SkillsContent";
import PortfolioContent from "./components/content/PortfolioContent";

import AboutContentMobile from "./components/content/mobile/AboutMobile";
import ExperienceContentMobile from "./components/content/mobile/ExperienceMobile";
import EducationContentMobile from "./components/content/mobile/EducationMobile";
import SkillsContentMobile from "./components/content/mobile/SkillsMobile";
import PortfolioContentMobile from "./components/content/mobile/PortfolioMobile";

import { useSelector, useDispatch } from 'react-redux';
import { selectPage } from './components/navigation/navigation'
import { selectWidth, setWidth, setHeight } from './components/redux/responsiveSlice'
import './App.css';
import Topbar from './components/navigation/Topbar';

const App = () => {
  const page = useSelector(selectPage);
  const width = useSelector(selectWidth);
  const dispatch = useDispatch();

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
    <div>
      {width > 1000 ? (
        <Topbar />
      ) : (
          <MobileTopbar />
        )}
      {(page === 1 && width > 1000) ? (
        <AboutContent  />
      ) : (page === 1 && width < 1000) ? (
        <AboutContentMobile  />
      ) : (page === 2 && width > 1000) ? (
        <ExperienceContent   />
      ) : (page === 2 && width < 1000) ? (
        <ExperienceContentMobile   />
      ) : (page === 3 && width > 1000) ? (
        <EducationContent   />
      ) : (page === 3 && width < 1000) ? (
        <EducationContentMobile   />
      ) : (page === 4 && width > 1000) ? (
        <SkillsContent   />
      ) : (page === 4 && width < 1000) ? (
        <SkillsContentMobile   />
      ) : (page === 5 && width > 1000) ? (
        <PortfolioContent   />
      ) : (page === 5 && width < 1000) ? (
        <PortfolioContentMobile   />
      ) : (
                            <AboutContentMobile   />
                          )}
    </div>
  );
}

export default App;
