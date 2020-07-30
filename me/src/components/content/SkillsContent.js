import React from "react";
import mePic from "../../assets/square_me.jpg"
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Call';
import DownArrow from '@material-ui/icons/KeyboardArrowDown';
import UpArrow from '@material-ui/icons/KeyboardArrowUp';

import { useDispatch, useSelector } from 'react-redux';
import { setPage, selectHover, setHover } from '../navigation/navigation'

const SkillsContent = ({ styles }) => {
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

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    width: '85%'
  };

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
      <div style={rowStyle}>
        Skills
        
      </div>


      <div style={navButtonsStyle}>
        <div onClick={() => { dispatch(setPage('EDUCATION')) }} onMouseOver={() => { dispatch(setHover('UpArrow')) }} onMouseLeave={() => { dispatch(setHover()) }}>
          {(hovering) === 11 ? (
            <UpArrow style={navButtonHover}></UpArrow>
          ) : (
              <UpArrow style={{ fontSize: '116px' }}></UpArrow>
            )}
        </div>
        
        <div onClick={() => { dispatch(setPage('PORTFOLIO')) }} onMouseOver={() => { dispatch(setHover('DownArrow')) }} onMouseLeave={() => { dispatch(setHover()) }}>
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

export default SkillsContent;