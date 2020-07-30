import React from "react";
import mePic from "../../assets/square_me.jpg"
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Call';
import LinkedIn from '@material-ui/icons/LinkedIn';

const AboutContent = ({ styles }) => {

  const contentStyle = {
    borderTop: "5vh solid #00363a",
    borderBottom: "5vh solid #00363a",
    borderRight: "5vh solid #00363a",
    borderLeft: "2vh solid #00363a",
    marginLeft: '20%',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: '90vh'
  };

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    flex: '0.98'
  };

  const footerStyle = {
    padding: '2%',
    position: 'relative',
    bottom: '1px'
  }




  return (
    <div style={contentStyle}>
      <div style={rowStyle}>
        <div style={{ width: '50%', textAlign: 'left' }}>
          <text style={{ fontSize: '58px', fontWeight: 'bold' }}>Spencer Nicholas</text><br></br>
          <text style={{ fontSize: '24px', fontWeight: 'bold' }}>Computer Science Graduate</text><br></br><br></br>

          <text>A highly driven individual seeking graduate employment following completion of my Computer Science degree from Aberystwyth University. Looking to improve on Front-End Web Development skills gained as part of my degree and on industrial placement. Also looking to discover new skills from the professional environment as I start my career.
      <br></br><br></br>
        This site has been created using React and Redux
      </text><br></br><br></br>
          
        </div>
        <div style={{ width: '50%', textAlign: 'left' }}>
          <img src={mePic}></img>
        </div>
      </div>
      <div style={footerStyle}>
          <Email style={{ fontSize: '16px' }}></Email><text style={{ fontSize: '18px', paddingLeft: '1%' }}>spencer.nicholas@hotmail.co.uk</text><br></br>
          <Phone style={{ fontSize: '16px' }}></Phone><text style={{ fontSize: '18px', paddingLeft: '1%' }}>07969 113968</text><br></br>
          <LinkedIn style={{ fontSize: '16px' }}></LinkedIn><text style={{ fontSize: '18px', paddingLeft: '1%' }}>linkedin.com/in/spencer-nicholas</text><br></br>
          </div>
    </div>
  );
};

export default AboutContent;