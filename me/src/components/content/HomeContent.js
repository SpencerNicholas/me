import React from "react";

const HomeContent = ({ styles }) => {
  
  const contentStyle = {
    borderTop: "5vh solid #00363a",
    borderBottom: "5vh solid #00363a",
    borderRight: "5vh solid #00363a",
    borderLeft: "2vh solid #00363a",
    marginLeft: '20%',
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
  };

  const col1 ={ 
    backgroundColor: 'white',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    height: '85vh',
    width: '50%',
  }

  const col2 ={ 
    backgroundColor: 'white',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    height: '85vh',
    width: '50%',
  }

  return (
    <div style={contentStyle}>
      <div style={col1}>
        <p>Home</p> 
      </div>
      <div style={col2}>
     
      </div>
    </div>
  );
};

export default HomeContent;