import React from "react";

const EducationContent = ({ styles }) => {
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
    flexDirection: 'column',
    padding: '2%',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'left',
  };





  return (
    <div style={contentStyle}>
       <div style={educationItem}>
       <text style={{ fontSize: '32px', fontWeight: 'bold', }}> Aberystwyth University </text>
       <text style={{ fontSize: '20px', fontWeight: 'bold', }}> September 2016 - August 2020</text><br></br>
       <text style={{ fontSize: '16px' }}>Computer Science (Inc. Integrated Industrial and Professional Training) BSc - Second Class Honours, Division 1 (68.9%)</text>
    </div> 
    <div style={educationItem}>
       <text style={{ fontSize: '32px', fontWeight: 'bold', }}> Hereford Sixth Form College </text>
       <text style={{ fontSize: '20px', fontWeight: 'bold', }}> September 2014 - July 2016</text><br></br>
       <text style={{ fontSize: '16px' }}>A Level Geography – B</text>
       <text style={{ fontSize: '16px' }}>A Level Computing – C</text>
       <text style={{ fontSize: '16px' }}>A level Mathematics – D</text>
       <text style={{ fontSize: '16px' }}>A-S level Physics - D</text>

    </div>
    <div style={educationItem}>
       <text style={{ fontSize: '32px', fontWeight: 'bold', }}> Aylestone Business and Enterprise College</text>
       <text style={{ fontSize: '20px', fontWeight: 'bold', }}> September 2009 - July 2014)</text><br></br>
       <text style={{ fontSize: '16px' }}>GCSE’s: 7 A’s, 2 B’s, 2 C’s, 1 Merit, 1 Distinction</text>
    </div>
    </div>
  );
};

export default EducationContent;