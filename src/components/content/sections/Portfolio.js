import React from "react";
import tmfLogo from "../../../assets/portfolio/trackmyfriends/trackmyfriendsLogo.png"
import tmfLogoHv from "../../../assets/portfolio/trackmyfriends/trackmyfriendsLogoHov.png"

import { useSelector, useDispatch } from 'react-redux';
import { selectHover, setHover, selectPortfolio, setPortfolio } from '../../redux/portfolioSlice';

import TrackMyFriends from '../portfolioProjects/trackmyfriends';

import Back from '@material-ui/icons/ArrowBack';

const Portfolio = () => {
  const hovering = useSelector(selectHover);
  const displayProject = useSelector(selectPortfolio);
  const dispatch = useDispatch();

  const section = {
    padding: '10%  5%',
    borderBottom: '2px solid rgb(200, 200, 200)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };


  return (
    <div style={section}>
      <TrackMyFriends />
    </div>
  );
};

export default Portfolio;