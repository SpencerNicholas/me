import React from "react";

import aylestoneLogo from "../../../assets/aylestone.png"
import hsfcLogo from "../../../assets/hsfc.png"
import aberLogo from "../../../assets/aber-small.png"

import { useDispatch, useSelector } from 'react-redux';
import { selectEducation, setEducation} from '../../redux/educationSlice'

import Aylestone from './educationComponents/aylestone'
import HSFC from './educationComponents/hsfc'
import Aber from './educationComponents/aber'

const EducationMobile = () => {
  const dispatch = useDispatch();
  const education = useSelector(selectEducation);

  const contentStyle = {
    background: 'linear-gradient(to bottom, lightgray, white)',
    color: '#00363a',
    paddingTop: '12vh'
  };

  const mobColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    justifyContent: 'space-evenly',
  };
  
  const row = { 
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }

  const educationItem = {
    width: '30%',
  }







  return (
    <div style={contentStyle}>
      <div style={mobColumnStyle}>
        <div style={row}>
          <div style={educationItem} onClick={ () => dispatch(setEducation('aylestone'))}>
            { education === 'aylestone' ? (
               <img src={aylestoneLogo} alt="" style={{width: '100%', backgroundColor:'#006064'}}></img>
            ): (
              <img src={aylestoneLogo} alt="" style={{width: '100%', backgroundColor:'#428e92'}}></img>
            )}
          </div>
          <div style={educationItem} onClick={ () => dispatch(setEducation('hsfc'))}>
          { education === 'hsfc' ? (
               <img src={hsfcLogo} alt="" style={{width: '100%', backgroundColor:'#006064'}}></img>
            ): (
              <img src={hsfcLogo} alt="" style={{width: '100%', backgroundColor:'#428e92'}}></img>
            )}
          </div>
          <div style={educationItem} onClick={ () => dispatch(setEducation('aber'))}>
          { education === 'aber' ? (
               <img src={aberLogo} alt="" style={{width: '100%', backgroundColor:'#006064'}}></img>
            ): (
              <img src={aberLogo} alt="" style={{width: '100%', backgroundColor:'#428e92'}}></img>
            )}
          </div>
          </div>
          { education === 'aylestone' ? (
            <Aylestone></Aylestone>
          ) : education === 'hsfc' ? (
            <HSFC></HSFC>
          ) : education === 'aber' ? (
            <Aber></Aber>
          ) : (
            <div></div>
          )}
        </div>
    </div>
  );
};

export default EducationMobile;