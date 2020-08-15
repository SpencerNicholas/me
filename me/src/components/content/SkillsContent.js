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
    minHeight: '85vh',
    color: '#00363a',
    paddingLeft: '10%',
    paddingRight: '10%',
    userSelect: 'none',
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

  const otherSkill ={

  }






  return (
    <div style={contentStyle}>
      <div>
        <div style={rowStyle}>
          <text style={{ fontWeight: 'bold', fontSize: '18px' }}>Technical Skills</text>
        </div>
        <div style={rowStyle}>
          <div style={skillText}>
            <text> HTML</text>
          </div>
          <div style={skillBar}>
            <div style={{ background: '#006064', width: '90%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>
              <text style={{ paddingRight: '1%', color: 'white' }}> 90%</text>
            </div>
          </div>
        </div>

        <div style={rowStyle}>
          <div style={skillText}>
            <text> CSS </text>
          </div>
          <div style={skillBar}>
            <div style={{ background: '#006064', width: '90%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>
              <text style={{ paddingRight: '1%', color: 'white' }}> 90%</text>
            </div>
          </div>
        </div>

        <div style={rowStyle}>
          <div style={skillText}>
            <text> JavaScript</text>
          </div>
          <div style={skillBar}>
            <div style={{ background: '#006064', width: '80%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>
              <text style={{ paddingRight: '1%', color: 'white' }}> 80%</text>
            </div>
          </div>
        </div>

        <div style={rowStyle}>
          <div style={skillText}>
            <text> React</text>
          </div>
          <div style={skillBar}>
            <div style={{ background: '#006064', width: '80%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>
              <text style={{ paddingRight: '1%', color: 'white' }}> 80%</text>
            </div>
          </div>
        </div>

        <div style={rowStyle}>
          <div style={skillText}>
            <text> React Native</text>
          </div>
          <div style={skillBar}>
            <div style={{ background: '#006064', width: '70%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>
              <text style={{ paddingRight: '1%', color: 'white' }}> 70%</text>
            </div>
          </div>
        </div>

        <div style={rowStyle}>
          <div style={skillText}>
            <text> PHP</text>
          </div>
          <div style={skillBar}>
            <div style={{ background: '#006064', width: '60%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>
              <text style={{ paddingRight: '1%', color: 'white' }}> 60%</text>
            </div>
          </div>
        </div>

        <div style={rowStyle}>
          <div style={skillText}>
            <text> Node.js</text>
          </div>
          <div style={skillBar}>
            <div style={{ background: '#006064', width: '60%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>
              <text style={{ paddingRight: '1%', color: 'white' }}> 50%</text>
            </div>
          </div>
        </div>

        <div style={rowStyle}>
          <div style={skillText}>
            <text> UI Design</text>
          </div>
          <div style={skillBar}>
            <div style={{ background: '#006064', width: '80%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>
              <text style={{ paddingRight: '1%', color: 'white' }}> 80%</text>
            </div>
          </div>
        </div>

        <div style={rowStyle}>
          <div style={skillText}>
            <text> Java</text>
          </div>
          <div style={skillBar}>
            <div style={{ background: '#006064', width: '50%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>
              <text style={{ paddingRight: '1%', color: 'white' }}> 50%</text>
            </div>
          </div>
        </div>

        <div style={rowStyle}>
          <div style={skillText}>
            <text> C++</text>
          </div>
          <div style={skillBar}>
            <div style={{ background: '#006064', width: '50%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>
              <text style={{ paddingRight: '1%', color: 'white' }}> 50%</text>
            </div>
          </div>
        </div>




      </div>
      <div>
        <div style={rowStyle}>
          <text style={{ fontWeight: 'bold', fontSize: '18px' }}>Other Skills</text>
        </div>
          <div style={otherSkill}>
            <text style={{fontWeight: 'bold'}}>Experience working using Agile practices</text>
            <text style={{}}> -	During my industrial placement year, I worked as part of the “Rapid Prototyping team,” this team was made up of mainly junior developers, creating web applications for both internal and external clients. This team was run in an Agile way with daily stand-up meetings and weekly team meetings. As part of this team I gained experience pair-programming, writing user stories and using Trello to manage projects. At the end of my degree I chose to run my major project using the, “Scrum-of-one” methodology (modified Scrum for a single person project)</text>
          </div>
          <br></br>
          <div style={otherSkill}>
            <text style={{fontWeight: 'bold'}}>Experience with engineering practices</text>
            <text> - Familiar with both GitHub and GitLab for version control and different branches for Dev, Test and Production versions of applications</text>
          </div>
          <br></br>
          <div style={otherSkill}>
            <text style={{fontWeight: 'bold'}}>Work with others</text>
            <text> - Professionally in former jobs as European Technical Sales support, Rapid Prototyper, senior waiter in catering team and Counsellor team</text>
          </div>
      </div>

    </div>
  );
};

export default SkillsContent;