import React from "react";
import mePic from "../../assets/square_me.jpg"
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Call';
import DownArrow from '@material-ui/icons/KeyboardArrowDown';
import UpArrow from '@material-ui/icons/KeyboardArrowUp';

import { useDispatch, useSelector } from 'react-redux';
import { setPage, selectHover, setHover } from '../navigation/navigation'

const AboutContent = ({ styles }) => {
  const dispatch = useDispatch();
  const hovering = useSelector(selectHover);

  const contentStyle = {
    paddingTop: '5vh',
    paddingBottom: '5vh',
    paddingLeft: '15%',
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    background: 'linear-gradient(to right, lightgray, white)',
    height: '90vh'
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '2%',
    width: '40%',
    height: '90%',
    textAlign: 'center',
  };

  const rowStyle = {
  }

  const navButtonsStyle = {
    width: '10%',
    height: '100%',
    justifyContent: 'space-evenly',
    display: 'flex',
    flexDirection: 'column',
  }

  const navButtonHover = {
    fontSize: '116px',
    color: '#b71c1c',
    cursor: 'pointer',
    transition: 'color 0.5s',
  }

  const footerStyle = {
    padding: '2%',
    position: 'relative',
    bottom: '1px'
  }




  return (
    <div style={contentStyle}>
      <div style={columnStyle}>
      <div style={{position: 'absolute', top: '10vh', width: '35%'}}>
            <text style={{ fontSize: '58px', fontWeight: 'bold', }}>Spencer Nicholas</text><br></br>
            <text style={{ fontSize: '24px', fontWeight: 'bold', }}>Computer Science Graduate</text><br></br><br></br>

            <Email style={{ fontSize: '16px' }}></Email><text style={{ fontSize: '18px', paddingLeft: '1%', }}>spencer.nicholas@hotmail.co.uk</text><br></br>
            <Phone style={{ fontSize: '16px' }}></Phone><text style={{ fontSize: '18px', paddingLeft: '1%', }}>07969 113968</text><br></br><br></br><br></br>
          </div>
          <div style={{position: 'absolute', bottom: '15vh', width: '35%'}}>
            <img src={mePic} style={{ borderBottomLeftRadius: 45, borderBottomRightRadius: 45, }}></img><br></br><br></br>
            <text style={{ fontSize: '32px', fontWeight: 'bold',}}> Who am I?</text><br></br><br></br>
            <div style={{ paddingLeft: '15%', paddingRight: '15%', }}>
              <text>
                A highly driven individual seeking graduate employment following completion of my Computer Science degree from Aberystwyth University. Looking to improve on Front-End Web Development skills gained as part of my degree and on industrial placement. Also looking to discover new skills from the professional environment as I start my career.
          </text>
            </div>
          </div>
    

      </div>
      <div style={columnStyle}>
      <div style={{position: 'absolute', top: '10vh', width: '35%'}}>
        </div>
        <div style={{position: 'absolute', bottom: '15vh', width: '35%'}}></div>
      </div>

      <div style={navButtonsStyle}>
        <UpArrow style={{ fontSize: '116px', color: 'lightgray' }}></UpArrow>
        <div onClick={() => { dispatch(setPage('EXPERIENCE')) }} onMouseOver={() => { dispatch(setHover('DownArrow')) }} onMouseLeave={() => { dispatch(setHover()) }}>
          {(hovering) === 10 ? (
            <DownArrow style={navButtonHover}></DownArrow>
          ) : (
              <DownArrow style={{ fontSize: '116px' }}></DownArrow>
            )}
        </div>

      </div>
    </div>
  );
};

export default AboutContent;