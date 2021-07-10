import React, { useRef } from "react";
import Contact from '@material-ui/icons/Email';
import Copy from '@material-ui/icons/FileCopy';
import Web from '@material-ui/icons/Web';
import Mobile from '@material-ui/icons/PhoneAndroid';
import Uni from '@material-ui/icons/School';
import WebDev from '@material-ui/icons/WebAsset';

import { useDispatch, useSelector } from 'react-redux';
import { selectHover, setHover, getPage, setPage } from '../navigation/navigation';
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";

const Page = () => {
  const dispatch = useDispatch();
  const hovering = useSelector(selectHover);

  const page = {
    backgroundColor: 'rgb(248,248,248)',
    minHeight: '100vh',
    zIndex: '100',
    display: 'flex',
    flexDirection: 'column',
    scrollBehavior: 'smooth'
  };

  const about = useRef(null)
  const experience = useRef(null)
  const education = useRef(null)
  const skills = useRef(null)
  const portfolio = useRef(null)


  const activePage = useSelector(getPage);
  if (activePage) {
    switch (activePage) {
      case 'ABOUT':
        about.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
        dispatch(setPage(null))
        break;
      case 'EXPERIENCE':
        experience.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
        dispatch(setPage(null))
        break;
      case 'EDUCATION':
        education.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
        dispatch(setPage(null))
        break;
      case 'SKILLS':
        skills.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
        dispatch(setPage(null))
        break;
      case 'PORTFOLIO':
        portfolio.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
        dispatch(setPage(null))
        break;
    }
  }





  return (
    <div style={page}>
      <div ref={about}>
        <About />
      </div>
      <div ref={experience}>
        <Experience />
      </div>
      <div ref={education}>
        <Education />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={portfolio}>
        <Portfolio />
      </div>

    </div>
  );
};

export default Page;