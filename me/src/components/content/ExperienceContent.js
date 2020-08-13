import React from "react";

const ExperienceContent = ({ styles }) => {
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

  const experienceItem = {
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
      <div style={experienceItem}>
       <text style={{ fontSize: '32px', fontWeight: 'bold', }}> Rapid Prototype Developer / European Technical Sales Support </text>
       <text style={{ fontSize: '20px', fontWeight: 'bold', }}> IBM (June 2018 – August 2019)</text><br></br>
       <text style={{ fontSize: '16px' }}> During my third academic year at University I decided to complete a placement year at IBM. In my role as European Technical Sales Leadership Support I provided support the European Team on monthly calls as well as any Ad-hoc tasks they may have. I also helped organise Interconnect Events such as Women in Technology networking opportunities. Alongside this I worked as a Rapid Prototype developer, creating web applications using Vue.js for both internal and external clients. These projects were run in small teams of 1-4 with a very fast turnaround following agile methodologies</text>
    </div> 
    <div style={experienceItem}>
       <text style={{ fontSize: '32px', fontWeight: 'bold', }}> Camp Counsellor  </text>
       <text style={{ fontSize: '20px', fontWeight: 'bold', }}> Skylake Yosemite Camp (June 2017 - August 2017</text><br></br>
       <text style={{ fontSize: '16px' }}>During the summer of 2017 I worked at a kid’s camp in America through Camp America. At camp I was responsible for my cabin as well as the tennis instructor. This role involved working in a large team with all the other counsellors to make sure all the kids were looked after and enjoying themselves. I loved working at a Summer Camp as there was a great team spirit across camp</text>
    </div>
    <div style={experienceItem}>
       <text style={{ fontSize: '32px', fontWeight: 'bold', }}> Senior Waiter </text>
       <text style={{ fontSize: '20px', fontWeight: 'bold', }}> Rococo Catering (April 2015 - September 2018)</text><br></br>
       <text style={{ fontSize: '16px' }}>Part time Senior Waiter for a highly respected catering company. As part of this role I had to serve guests both food and drink alongside helping new members of the catering team with any issues they are having during a shift. I really enjoyed this job as there is a great team atmosphere and a feeling of joy after finishing a long shift at a wedding </text>
    </div>
    </div>
  );
};

export default ExperienceContent;