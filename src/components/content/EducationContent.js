import React from "react";

import aylestoneLogo from "../../assets/aylestone.png"
import hsfcLogo from "../../assets/hsfc.png"
import aberLogo from "../../assets/aber-small.png"

const EducationContent = () => {
  const contentStyle = {
    paddingTop: '7vh',
    paddingBottom: '5vh',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    background: 'linear-gradient(to right, white, white)',
    height: '88vh',
    color: '#00363a',
    paddingLeft: '10%',
    paddingRight: '10%'
  };

  const educationItem = {
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    width: '100%',
    textAlign: 'left',
  };





  return (
    <div style={contentStyle}>
       <div style={educationItem}>
       <img src={aberLogo} alt="" style={{width: '10%', paddingRight: '3%'}}></img><br></br>
      <div>
       <text style={{ fontSize: '32px', fontWeight: 'bold', }}> Aberystwyth University </text><br></br>
       <text style={{ fontSize: '20px', fontWeight: 'bold', }}> September 2016 - August 2020</text><br></br><br></br>
       <text style={{ fontSize: '16px' }}>Computer Science (Inc. Integrated Industrial and Professional Training) BSc - Second Class Honours, Division 1 (68.9%)</text>
    </div> 
    </div>
    <div style={educationItem}>
    <img src={hsfcLogo} alt="" style={{width: '10%', paddingRight: '3%'}}></img><br></br>
      <div>
       <text style={{ fontSize: '32px', fontWeight: 'bold', }}> Hereford Sixth Form College </text><br></br>
       <text style={{ fontSize: '20px', fontWeight: 'bold', }}> September 2014 - July 2016</text><br></br><br></br>
       <text style={{ fontSize: '16px' }}>A Level Geography – B</text><br></br>
       <text style={{ fontSize: '16px' }}>A Level Computing – C</text><br></br>
       <text style={{ fontSize: '16px' }}>A level Mathematics – D</text><br></br>
       <text style={{ fontSize: '16px' }}>A-S level Physics - D</text><br></br>
       </div>
    </div>
    <div style={educationItem}>
    <img src={aylestoneLogo} alt="" style={{width: '10%', paddingRight: '3%'}}></img><br></br>
      <div>
       <text style={{ fontSize: '32px', fontWeight: 'bold', }}> Aylestone Business and Enterprise College</text><br></br>
       <text style={{ fontSize: '20px', fontWeight: 'bold', }}> September 2009 - July 2014)</text><br></br><br></br>
       <text style={{ fontSize: '16px' }}>GCSE’s: 7 A’s, 2 B’s, 2 C’s, 1 Merit, 1 Distinction</text>
    </div>
    </div>
    </div>
  );
};

export default EducationContent;