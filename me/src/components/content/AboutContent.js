import React from "react";
import mePic from "../../assets/square_me.jpg"
import Contact from '@material-ui/icons/Email';
import Copy from '@material-ui/icons/FileCopy';
import Web from '@material-ui/icons/Web';
import Mobile from '@material-ui/icons/PhoneAndroid';
import Uni from '@material-ui/icons/School';
import WebDev from '@material-ui/icons/WebAsset';



import { useDispatch, useSelector } from 'react-redux';
import { setPage, selectHover, setHover } from '../navigation/navigation'

const AboutContent = ({ styles }) => {
  const dispatch = useDispatch();
  const hovering = useSelector(selectHover);

  const contentStyle = {
    paddingTop: '5vh',
    paddingBottom: '5vh',
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    background: 'linear-gradient(to right, white, white)',
    height: '90vh',
    color: '#00363a',
    paddingLeft: '10%',
    paddingRight: '10%'
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '2%',
    width: '40%',
    height: '90%',
    textAlign: 'center',
    justifyContent: 'space-evenly',
  };

  const summaryPointsStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '10vh',
    width: '40%',
    textAlign: 'left',
    marginLeft: '5%',
    height: '80vh',
    justifyContent: 'space-evenly',
  }

  const copyToClipboard = (toCopy) => {
    navigator.clipboard.writeText(toCopy)
    alert('Copied to Clipboard')
  };





  return (
    <div style={contentStyle}>
      <div style={columnStyle}>
        <div style={{ position: 'absolute', top: '15vh', width: '40%' }}>
          <text style={{ fontSize: '58px', fontWeight: 'bold', }}>Spencer Nicholas</text><br></br>
          <text style={{ fontSize: '32px', fontWeight: 'bold', }}>Web Developer</text><br></br>
        
          <img src={mePic} style={{paddingBottom: '5%', paddingTop: '10%'}}></img><br></br>
          <text style={{ fontSize: '32px', fontWeight: 'bold', }}> Who am I?</text><br></br><br></br>
          <div style={{ paddingLeft: '15%', paddingRight: '15%', }}>
            <text>
              A highly driven individual seeking graduate employment following completion of my Computer Science degree from Aberystwyth University. Looking to improve on Front-End Web Development skills gained as part of my degree and on industrial placement. Also looking to discover new skills from the professional environment as I start my career.
          </text>
          </div>
        </div>


      </div>
      <div style={columnStyle}>
        <div style={summaryPointsStyle}>
          <div style={{display: 'flex',  alignItems: 'center',}}>
          <Web style={{ fontSize: '64px', backgroundColor: '#00363a', color: 'white', padding: '2%'  }}></Web>
          <text style={{ fontSize: '32px', fontWeight: 'bold', paddingLeft: '3%'}}> Intuative & Responsive Web Design</text>
          </div>
          <div style={{display: 'flex',  alignItems: 'center',}}>
          <WebDev style={{ fontSize: '64px', backgroundColor: '#00363a', color: 'white', padding: '2%' }}></WebDev>
          <text style={{ fontSize: '32px', fontWeight: 'bold', paddingLeft: '3%'}}> React Web Development</text>
          </div>
          <div style={{display: 'flex',  alignItems: 'center',}}>
          <Mobile style={{ fontSize: '64px', backgroundColor: '#00363a', color: 'white', padding: '2%' }}></Mobile>
          <text style={{ fontSize: '32px', fontWeight: 'bold', paddingLeft: '3%'}}> React Native App Development</text>
          </div>
          <div style={{display: 'flex',  alignItems: 'center',}}>
          <Uni style={{ fontSize: '64px', backgroundColor: '#00363a', color: 'white', padding: '2%' }}></Uni>
          <text style={{ fontSize: '32px', fontWeight: 'bold', paddingLeft: '3%'}}> Computer Science Graduate</text>
          </div>
        

          <div style={{display: 'flex',  alignItems: 'center',}} onMouseOver={() => { dispatch(setHover("contactDetails"))}} onMouseLeave={() => { dispatch(setHover())}}>
          {(hovering) === 10 ? (
                     <div style={{width: '100%', display: 'flex',  alignItems: 'center',}}>
                     <Copy style={{ fontSize: '64px', backgroundColor: '00363a', color: '#b71c1c', padding: '2%',cursor: 'pointer'}} onClick={() => { copyToClipboard('spencer.nicholas@hotmail.co.uk') }}></Copy>
                     <text style={{ fontSize: '32px', fontWeight: 'bold', paddingLeft: '3%'}}> spencer.nicholas@hotmail.co.uk</text>
                     </div>
                  ) : (
                    <div style={{width: '100%', display: 'flex',  alignItems: 'center',}}>
                    <Contact style={{ fontSize: '64px', backgroundColor: '#00363a', color: 'white', padding: '2%' }}></Contact>
                    <text style={{ fontSize: '32px', fontWeight: 'bold', paddingLeft: '3%'}}> Contact Me</text>
                    </div>
                  )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;