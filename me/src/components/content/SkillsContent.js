import React from "react";

const SkillsContent = ({ styles }) => {
  const contentStyle = {
    paddingTop: '10vh',
    paddingBottom: '5vh',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    background: 'linear-gradient(to right, white, white)',
    height: '85vh',
    color: '#00363a',
    paddingLeft: '10%',
    paddingRight: '10%',
  };

  const skillBar = {
    display: 'flex',
    width: '80%',
    height: '4vh',
    textAlign: 'center',
    background: 'lightgray',
    alignItems: 'center',
    alignText: 'right',
  };

  const skillText = {
    width: '8%',
    display: 'flex',
    alignItems: 'center',
    height: '4vh',
    fontWeight: 'bold',
    background: '#428e92',
    paddingLeft: '2vh',
    color: 'white'
  }

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
    height: '6vh',
  }






  return (
    <div style={contentStyle}>
      <div style={rowStyle}>
        Intro to skills section
      </div>
      <div>
      <div style={rowStyle}>
        <div style={skillText}>
          <text> React</text>
        </div>
        <div style={skillBar}>
        <div style={{background: '#006064', width: '80%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end'}}> 
          <text style={{paddingRight: '1%', color: 'white'}}> 80%</text>
        </div>
      </div>
      </div>

      <div style={rowStyle}>
        <div style={skillText}>
          <text> React Native</text>
        </div>
        <div style={skillBar}>
        <div style={{background: '#006064', width: '70%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end'}}> 
          <text style={{paddingRight: '1%', color: 'white'}}> 70%</text>
        </div>
      </div>
    </div> 
    
    <div style={rowStyle}>
        <div style={skillText}>
          <text> HTML</text>
        </div>
        <div style={skillBar}>
        <div style={{background: '#006064', width: '90%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end'}}> 
          <text style={{paddingRight: '1%', color: 'white'}}> 90%</text>
        </div>
      </div>
    </div> 

    <div style={rowStyle}>
        <div style={skillText}>
          <text> CSS </text>
        </div>
        <div style={skillBar}>
        <div style={{background: '#006064', width: '90%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end'}}> 
          <text style={{paddingRight: '1%', color: 'white'}}> 90%</text>
        </div>
      </div>
    </div> 

    <div style={rowStyle}>
        <div style={skillText}>
          <text> JavaScript</text>
        </div>
        <div style={skillBar}>
        <div style={{background: '#006064', width: '80%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end'}}> 
          <text style={{paddingRight: '1%', color: 'white'}}> 80%</text>
        </div>
      </div>
    </div> 

    <div style={rowStyle}>
        <div style={skillText}>
          <text> PHP</text>
        </div>
        <div style={skillBar}>
        <div style={{background: '#006064', width: '50%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end'}}> 
          <text style={{paddingRight: '1%', color: 'white'}}> 50%</text>
        </div>
      </div>
    </div> 


    </div>

    
    </div>
  );
};

export default SkillsContent;