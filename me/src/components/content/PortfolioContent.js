import React from "react";
import tmfLogo from "../../assets/portfolio/trackmyfriends/trackmyfriendsLogo.png"
import tmfLogoHv from "../../assets/portfolio/trackmyfriends/trackmyfriendsLogoHov.png"

import { useSelector, useDispatch } from 'react-redux';
import { selectHover, setHover, selectPortfolio, setPortfolio } from '../redux/portfolioSlice';

import TrackMyFriends from './portfolioProjects/trackmyfriends';

import Back from '@material-ui/icons/ArrowBack';

const PortfolioContent = ({ styles }) => {
  const hovering = useSelector(selectHover);
  const displayProject = useSelector(selectPortfolio);
  const dispatch = useDispatch();

  const contentStyle = {
    paddingTop: '5vh',
    paddingBottom: '5vh',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(to right, white, white)',
    minHeight: '90vh',
    color: '#00363a',
    paddingLeft: '10%',
    paddingRight: '10%'
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    paddingTop: '5%',
    width: '100%',
    height: '47vh',
    textAlign: 'center',
    justifyContent: 'space-evenly',
  };

  const porfolioItem = {
    width: '30%',
    height: '100%'
  }

  const itemHovered = {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  }

  const projectDetails = {
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    paddingTop: '5%',
    width: '100%',
    minHeight: '10vh',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    background: 'green'
  }

  const ghostTopBar = {
    height: "5vh",
    width: "100%",
    position: "fixed",
    top: '0px',
    backgroundColor: "#428e92",
    borderBottom: "0.5vh solid #006064",
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: '11',
    userSelect: 'none',
  }






  return (
    <div style={contentStyle}>
      {displayProject == 'trackmyfriends' ? (
        <div>
          <div style={ghostTopBar}>
            {hovering == 'back' ? (
              <Back style={{
                fontSize: '2em', color: 'white', position: 'absolute', left: '2%', cursor: 'pointer', color: '#b71c1c', transition: 'color 0.5s',
              }} onClick={() => { dispatch(setPortfolio('none')) }} onMouseOver={() => { dispatch(setHover('back')) }} onMouseLeave={() => { dispatch(setHover()) }}></Back>
            ) : (
                <Back style={{ fontSize: '2em', color: 'white', position: 'absolute', left: '2%' }} onClick={() => { dispatch(setPortfolio('none')) }} onMouseOver={() => { dispatch(setHover('back')) }} onMouseLeave={() => { dispatch(setHover()) }}></Back>
              )}
          </div>
          <TrackMyFriends />
        </div>
      ) : (
          <div style={rowStyle}>
            <div style={porfolioItem} onMouseOver={() => { dispatch(setHover('trackmyfriends')) }} onMouseLeave={() => { dispatch(setHover()) }} onClick={() => { dispatch(setPortfolio('trackmyfriends')) }}>
              {hovering == 'trackmyfriends' ? (
                <img src={tmfLogoHv} style={itemHovered}></img>
              ) : (
                  <img src={tmfLogo} style={{ width: '100%', height: '100%' }}></img>
                )
              }
            </div>
          </div>
        )}



    </div>
  );
};

export default PortfolioContent;