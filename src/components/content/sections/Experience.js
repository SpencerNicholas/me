import React from "react";

// import ibm from "../../../assets/ibmLogo.png"
// import skylake from "../../../assets/skylakeLogo.jpg"
// import rococo from "../../../assets/rococoLogo.jpg"


const Experience = () => {
  const section = {
    padding: '10%  5%',
    borderBottom: '2px solid rgb(200, 200, 200)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const experienceItem = {
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    width: '100%',
    justifyContent: 'space-evenly',
    textAlign: 'left',
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
    color: 'rgb(80,80,80)', 
    fontFamily: 'Poppins' 
  };






  return (
    <div style={section}>
      <div style={experienceItem}>
      {/* <img src={ibm} alt="" style={{width: '10%', paddingRight: '3%'}}></img><br></br> */}
      <div>
       <text style={title}> Full Stack Mobile / Web Developer (React Native, React) </text><br></br>
       <text style={sub}> Starfish Labs (September 2020 –  Present)</text><br></br><br></br>
       <text style={text}> 
       I have worked as a full stack JavaScript developer working with React Native, React, Express.js, MongoBD and Google Firebase. This role involved me working as part of a very small team and also independently to develop mobile and web applications. Working in such a small team gave me access to every part of the project lifecycle from initial idea, client communications and design to the final deliver of the apps on the App Store and Google Play Store. I have also had the opportunity to present some of our apps on conferences, workshops and during interviews for the Wales Start-up Awards.
       </text>
       </div>
    </div> 

    <div style={experienceItem}>
      {/* <img src={ibm} alt="" style={{width: '10%', paddingRight: '3%'}}></img><br></br> */}
      <div>
       <text style={title}> Rapid Prototype Developer / European Technical Sales Support </text><br></br>
       <text style={sub}> IBM (June 2018 – August 2019)</text><br></br><br></br>
       <text style={text}> During my third academic year at University I decided to complete a placement year at IBM. In my role as European Technical Sales Leadership Support I provided support the European Team on monthly calls as well as any Ad-hoc tasks they may have. I also helped organise Interconnect Events such as Women in Technology networking opportunities. Alongside this I worked as a Rapid Prototype developer, creating web applications using Vue.js for both internal and external clients. These projects were run in small teams of 1-4 with a very fast turnaround following agile methodologies</text>
       </div>
    </div> 

    
    <div style={experienceItem}>
    {/* <img src={skylake} alt="" style={{width: '10%', paddingRight: '3%'}}></img><br></br> */}
      <div>
       <text style={title}> Camp Counsellor  </text><br></br>
       <text style={sub}> Skylake Yosemite Camp (June 2017 - August 2017)</text><br></br><br></br>
       <text style={text}>During the summer of 2017 I worked at a kid’s camp in America through Camp America. At camp I was responsible for my cabin as well as the tennis instructor. This role involved working in a large team with all the other counsellors to make sure all the kids were looked after and enjoying themselves. I loved working at a Summer Camp as there was a great team spirit across camp</text>
       </div>
    </div>
    <div style={experienceItem}>
    {/* <img src={rococo} alt="" style={{width: '10%', paddingRight: '3%'}}></img><br></br> */}
      <div>
       <text style={title}> Senior Waiter </text><br></br>
       <text style={sub}> Rococo Catering (April 2015 - September 2018)</text><br></br><br></br>
       <text style={text}>Part time Senior Waiter for a highly respected catering company. As part of this role I had to serve guests both food and drink alongside helping new members of the catering team with any issues they are having during a shift. I really enjoyed this job as there is a great team atmosphere and a feeling of joy after finishing a long shift at a wedding </text>
       </div>
    </div>
    </div>
  );
};

export default Experience;