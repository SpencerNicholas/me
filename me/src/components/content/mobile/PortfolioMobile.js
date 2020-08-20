import React from "react";
import tmfLogoHv from "../../../assets/portfolio/trackmyfriends/trackmyfriendsLogoHov.png"

import { useSelector, useDispatch } from 'react-redux';
import { selectPortfolio, setPortfolio } from '../../redux/portfolioSlice';

import TrackMyFriends from '../portfolioProjects/trackmyfriendsMob';

import Back from '@material-ui/icons/ArrowBack';

const PortfolioMobile = ({ styles }) => {
  const displayProject = useSelector(selectPortfolio);
  const dispatch = useDispatch();

  const contentStyle = {
    paddingTop: '10vh',
    paddingBottom: '5vh',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(to right, white, white)',
    minHeight: '90vh',
    color: '#00363a',
  };

  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '5% 15%',
    width: '70%',
    textAlign: 'center',
  };

  const porfolioItem = {
    width: '100%',
    height: '100%',
    paddingTop: '5%'
  }


  const ghostTopBar = {
    height: "10vh",
    width: "100%",
    position: "fixed",
    top: '0px',
    backgroundColor: "#428e92",
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: '11',
    userSelect: 'none',
  }








  return (
    <div style={contentStyle}>
       {displayProject === 'trackmyfriends' ? (
        <div>
          <div style={ghostTopBar}>
           
                <Back style={{ fontSize: '2em', color: 'white', position: 'absolute', left: '2%' }} onClick={() => { dispatch(setPortfolio('none')) }} ></Back>
          </div>
          <TrackMyFriends />
        </div>
      ) : (
          <div style={colStyle}>
            <div style={porfolioItem} onClick={() => { dispatch(setPortfolio('trackmyfriends')) }}>
  
                  <img src={tmfLogoHv}  alt="Track my Friends" style={{ width: '100%', height: '100%' }}></img>

            </div>
          </div>
        )}



    </div>
  );
};

export default PortfolioMobile;