import React from "react";

const Skills = () => {
  const section = {
    padding: '10%  5%',
    borderBottom: '2px solid rgb(200, 200, 200)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
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
    width: '15%',
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
  };

  const title = {
    fontSize: '24px',
    fontWeight: 'bold',
    userSelect: 'none',
    color: 'rgb(65,141,146)',
    fontFamily: 'Poppins'

  };

  const sub = {
    fontSize: '18px',
    fontWeight: 'bold',
    userSelect: 'none',
    color: 'rgb(20,20,20)',
    fontFamily: 'Poppins'
  };

  const text = {
    fontSize: '16px',
    fontWeight: 'bold',
    userSelect: 'none',
    color: 'rgb(240,240,240)',
    fontFamily: 'Poppins',
    paddingRight: '1%'
  };

  const textDark = {
    fontSize: '16px',
    fontWeight: 'bold',
    userSelect: 'none',
    color: 'rgb(20,20,20)',
    fontFamily: 'Poppins'
  };

  const textDarkNarrow = {
    fontSize: '16px',
    userSelect: 'none',
    color: 'rgb(20,20,20)',
    fontFamily: 'Poppins'
  };



  const otherSkill = {

  }


  const skills = [
    { title: 'HTML', percentage: '90%' },
    { title: 'CSS', percentage: '90%' },
    { title: 'JavaScript', percentage: '90%' },
    { title: 'React', percentage: '80%' },
    { title: 'React Native', percentage: '90%' },
    { title: 'Redux', percentage: '75%'},
    { title: 'Node.js', percentage: '50%' },
    { title: 'UI Design', percentage: '80%' },
  ]



  return (
    <div style={section}>
      <div>
        <div style={rowStyle}>
          <text style={title}>Technical Skills</text>
        </div>
        {skills.map((skill) => {
          return(
          <div style={rowStyle}>
            <div style={skillText}>
              <text style={text}>{skill.title}</text>
            </div>
            <div style={skillBar}>
              <div style={{ background: '#006064', width: skill.percentage, height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' }}>
                <text style={{ paddingRight: '1%', color: 'white' }}>{skill.percentage}</text>
              </div>
            </div>
          </div>
          )
        })
        }


      <div>
        <div style={rowStyle}>
          <text style={sub}>Other Skills</text>
        </div>
        <div style={otherSkill}>
          <text style={textDark}>Experience working using Agile practices</text>
          <text style={textDarkNarrow}> -	During my industrial placement year, I worked as part of the “Rapid Prototyping team,” this team was made up of mainly junior developers, creating web applications for both internal and external clients. This team was run in an Agile way with daily stand-up meetings and weekly team meetings. As part of this team I gained experience pair-programming, writing user stories and using Trello to manage projects. At the end of my degree I chose to run my major project using the, “Scrum-of-one” methodology (modified Scrum for a single person project)</text>
        </div>
        <br></br>
        <div style={otherSkill}>
          <text style={textDark}>Experience with engineering practices</text>
          <text style={textDarkNarrow}> - Familiar with both GitHub and GitLab for version control and different branches for Dev, Test and Production versions of applications</text>
        </div>
        <br></br>
        <div style={otherSkill}>
          <text style={textDark}>Work with others</text>
          <text style={textDarkNarrow}> - Professionally in former jobs as European Technical Sales support, Rapid Prototyper, senior waiter in catering team and Counsellor team</text>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Skills;