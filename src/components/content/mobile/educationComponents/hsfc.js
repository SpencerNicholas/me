import React from "react";

const hsfc = () => {

  return (
    <div style={{paddingLeft: '2%', paddingRight: '2%'}}>
      <div style={{  width: '96%', textAlign: 'left', padding: '2%'}}>
        <text style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Hereford Sixth Form College</text><br></br>
        <text style={{ fontStyle: 'italic', fontSize: '0.9em' }}>2014-2016 (A-Level)</text>
      </div>

      <div style={{ padding: '2%', width: '96%',  textAlign: 'left', display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '90%', fontSize: '0.9em' }}>
        Computing <br></br>
        Geography <br></br>
        Maths <br></br>
        Phyics (AS)
      </div>
      <div style={{ width: '10%', fontSize: '0.9em' }}>
        C <br></br>
        B <br></br>
        D <br></br>
        D
      </div>
    </div>
    </div>
  );
};

export default hsfc;