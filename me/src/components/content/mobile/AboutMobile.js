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
    paddingTop: '5vh',
    paddingBottom: '5vh',
    paddingLeft: '15%',
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    background: 'linear-gradient(to bottom, lightgray, white)',
    height: '90vh',
    color: '#00363a',
  };



  const copyToClipboard = (toCopy) => {
    navigator.clipboard.writeText(toCopy)
    alert('Copied to Clipboard')
  };





  return (
    <div style={contentStyle}>
    </div>
  );
};

export default AboutMobile;