import React from "react";

const ExperienceContent = ({ styles }) => {
  const contentStyle = {
    paddingTop: '5vh',
    paddingBottom: '5vh',
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    background: 'linear-gradient(to right, white, white)',
    height: '90vh',
    color: '#00363a',
    paddingLeft: '10%',
    paddingRight: '10%'
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '2%',
    width: '40%',
    height: '90%',
    textAlign: 'center',
    justifyContent: 'space-evenly',
  };






  return (
    <div style={contentStyle}>
      <div style={columnStyle}>
        Experience
        </div>


      <div style={columnStyle}>
       Experience
    </div>
    </div>
  );
};

export default ExperienceContent;