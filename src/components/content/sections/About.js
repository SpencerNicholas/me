import React from "react";

import '../../../App.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectHover, setHover } from '../../navigation/navigation';

const About = () => {
  const dispatch = useDispatch();
  const hovering = useSelector(selectHover);

  const section = {
    padding: '0%  5%',
    borderBottom: '2px solid rgb(200, 200, 200)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const copyToClipboard = (toCopy) => {
    navigator.clipboard.writeText(toCopy)
    alert('Copied to Clipboard')
  };





  return (
    <div style={section}>
      <div>
        <text style={{ fontSize: '60px', fontWeight: 'bold', userSelect: 'none', color: 'rgb(60,60,60)', fontFamily: 'Poppins' }}>SPENCER </text>
        <text style={{ fontSize: '60px', fontWeight: 'bold', userSelect: 'none', color: 'rgb(65,141,146)', fontFamily: 'Poppins' }}>NICHOLAS </text>
      </div>
      <text style={{ fontSize: '18px', fontWeight: 'bold', userSelect: 'none', color: 'rgb(65,141,146)', fontFamily: 'Poppins' }}>spencer.nicholas@hotmail.co.uk</text>
      <text style={{ fontSize: '16px', fontWeight: 'bold', userSelect: 'none', color: 'rgb(80,80,80)', fontFamily: 'Poppins' }}>VIEW CV</text>
      <br />
      <text style={{ fontSize: '16px', fontWeight: 'bold', userSelect: 'none', color: 'rgb(80,80,80)', fontFamily: 'Poppins' }}>
        Currently working as a full stack mobile (React Native, Android & IOS) and web developer (React) @StarfishLabs.
      </text>
      <br />
      <text style={{ fontSize: '16px', fontWeight: 'bold', userSelect: 'none', color: 'rgb(80,80,80)', fontFamily: 'Poppins' }}>
        First Class Graduate from Aberystwyth University - Computer Science (with Integrated Industrial Placement Year) 2020
      </text>
      <br />
      <text style={{ fontSize: '16px', fontWeight: 'bold', userSelect: 'none', color: 'rgb(80,80,80)', fontFamily: 'Poppins' }}>
        Experience in website development (React, Wordpress) and mobile app development for both IOS and Android (React Native) on comercial products available on App Store and Google Play Store.
      </text>
      <br />
      <text style={{ fontSize: '16px', fontWeight: 'bold', userSelect: 'none', color: 'rgb(80,80,80)', fontFamily: 'Poppins' }}>
      </text>
    </div>
  );
};

export default About;