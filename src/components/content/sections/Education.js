import React from "react";

// import aylestoneLogo from "../../assets/aylestone.png"
// import hsfcLogo from "../../assets/hsfc.png"
// import aberLogo from "../../assets/aber-small.png"

const Education = () => {
  const section = {
    padding: '10%  5%',
    borderBottom: '2px solid rgb(200, 200, 200)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const educationItem = {
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    width: '100%',
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
       <div style={educationItem}>
       {/* <img src={aberLogo} alt="" style={{width: '10%', paddingRight: '3%'}}></img><br></br> */}
      <div>
       <text style={title}> Aberystwyth University </text><br></br>
       <text style={sub}> September 2016 - August 2020</text><br></br><br></br>
       <text style={text}>Computer Science (Inc. Integrated Industrial and Professional Training) BSc - Second Class Honours, Division 1 (68.9%)</text>
    </div> 
    </div>
    <div style={educationItem}>
    {/* <img src={hsfcLogo} alt="" style={{width: '10%', paddingRight: '3%'}}></img><br></br> */}
      <div>
       <text style={title}> Hereford Sixth Form College </text><br></br>
       <text style={sub}> September 2014 - July 2016</text><br></br><br></br>
       <text style={text}>A Level Geography – B</text><br></br>
       <text style={text}>A Level Computing – C</text><br></br>
       <text style={text}>A level Mathematics – D</text><br></br>
       <text style={text}>A-S level Physics - D</text><br></br>
       </div>
    </div>
    <div style={educationItem}>
    {/* <img src={aylestoneLogo} alt="" style={{width: '10%', paddingRight: '3%'}}></img><br></br> */}
      <div>
       <text style={title}> Aylestone Business and Enterprise College</text><br></br>
       <text style={sub}> September 2009 - July 2014)</text><br></br><br></br>
       <text style={text}>GCSE’s: 7 A’s, 2 B’s, 2 C’s, 1 Merit, 1 Distinction</text>
    </div>
    </div>
    </div>
  );
};

export default Education;