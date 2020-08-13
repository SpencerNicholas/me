import React from "react";
import mePic from "../../../assets/square_me.jpg"
import Contact from '@material-ui/icons/Email';
import Copy from '@material-ui/icons/FileCopy';
import Web from '@material-ui/icons/Web';
import Mobile from '@material-ui/icons/PhoneAndroid';
import Uni from '@material-ui/icons/School';
import Travel from '@material-ui/icons/Flight';



import { useDispatch, useSelector } from 'react-redux';
import { setPage, selectHover, setHover } from '../../navigation/navigation'

const AboutMobile = ({ styles }) => {
  const dispatch = useDispatch();
  const hovering = useSelector(selectHover);

  const contentStyle = {
    background: 'linear-gradient(to bottom, lightgray, white)',
    color: '#00363a',
    paddingTop: '11vh'
  };

  const mobColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    justifyContent: 'space-evenly',
  };

  const copyToClipboard = (toCopy) => {
    navigator.clipboard.writeText(toCopy)
    alert('Email Copied to Clipboard')
  };





  return (
    <div style={contentStyle}>
      <div style={mobColumnStyle}>
        <div>
          <text style={{ fontSize: '10vw', fontWeight: 'bold', }}>Spencer Nicholas</text><br></br>
          <text style={{ fontSize: '5vw', fontWeight: 'bold', }}>Web Developer</text><br></br>
        
          <img src={mePic} style={{paddingBottom: '5%', paddingTop: '10%'}}></img><br></br>
          <text style={{ fontSize: '5vw', fontWeight: 'bold', }}> Who am I?</text><br></br><br></br>
          <div style={{ paddingLeft: '5%', paddingRight: '5%', paddingBottom: '2vh' }}>
            <text  style={{ fontSize: '4vw' }}>
              A highly driven individual seeking graduate employment following completion of my Computer Science degree from Aberystwyth University. Looking to improve on Front-End Web Development skills gained as part of my degree and on industrial placement. Also looking to discover new skills from the professional environment as I start my career.
          </text>
          </div>

          <div style={{display: 'flex',  alignItems: 'center', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '1vh'}}>
          <Web style={{ fontSize: '10vw', backgroundColor: '#00363a', color: 'white', padding: '2%'  }}></Web>
          <text style={{ fontSize: '4vw', fontWeight: 'bold', paddingLeft: '3%'}}> Intuative & Responsive Web Design</text>
          </div>

          <div style={{display: 'flex',  alignItems: 'center', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '1vh'}}>
          <Mobile style={{ fontSize: '10vw', backgroundColor: '#00363a', color: 'white', padding: '2%' }}></Mobile>
          <text style={{ fontSize: '4vw', fontWeight: 'bold', paddingLeft: '3%'}}> React Native App Development</text>
          </div>

          <div style={{display: 'flex',  alignItems: 'center', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '1vh'}}>
          <Uni style={{ fontSize: '10vw', backgroundColor: '#00363a', color: 'white', padding: '2%' }}></Uni>
          <text style={{ fontSize: '4vw', fontWeight: 'bold', paddingLeft: '3%'}}> Computer Science Graduate</text>
          </div>

          <div style={{display: 'flex',  alignItems: 'center', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '1vh'}} onClick={() => { copyToClipboard('spencer.nicholas@hotmail.co.uk') }}>
          <Contact style={{ fontSize: '10vw', backgroundColor: '#00363a', color: 'white', padding: '2%' }}></Contact>
          <text style={{ fontSize: '4vw', fontWeight: 'bold', paddingLeft: '3%'}}> Contact Me</text>
          </div>

        </div>
        </div>
    </div>
  );
};

export default AboutMobile;