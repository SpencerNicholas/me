import React from "react";

import Back from '@material-ui/icons/ArrowBack';

import { useDispatch, useSelector } from 'react-redux';
import { setExperience, selectExperience } from '../../redux/experienceSlice'


const ExperienceMobile = () => {
  const dispatch = useDispatch();
  const experience = useSelector(selectExperience);

  const contentStyle = {
    background: 'linear-gradient(to bottom, lightgray, white)',
    color: '#00363a',
    paddingTop: '12vh',
    height: '88vh',
  };

  const mobColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  };

  const experienceItem = {
    background: 'white',
    width: '90%',
    alignSelf: 'center',
    padding: '2%',
    textAlign: 'center',
    marginBottom: '2vh',
  }

  const experienceDetails = {
    background: 'white',
    width: '90%',
    alignSelf: 'center',
    padding: '2%',
    textAlign: 'left',
    marginBottom: '2vh',
  }







  return (
    <div style={contentStyle}>
      {(experience === 'ibm') ? (
        <div style={mobColumnStyle}>
          <div style={experienceDetails} >
            <text style={{ fontSize: '4vw', fontWeight: 'bold' }}> Rapid Prototype Developer / European Technical Sales Leadership Support</text><br></br>
            <text style={{ fontSize: '4vw', fontStyle: 'italics' }}> IBM (June 2018 – August 2019)</text><br></br><br></br>
            <text style={{ fontSize: '4vw' }}> During my third academic year at University I decided to complete a placement year at IBM. In my role as European Technical Sales Leadership Support I provided support the European Team on monthly calls as well as any Ad-hoc tasks they may have. I also helped organise Interconnect Events such as Women in Technology networking opportunities. Alongside this I worked as a Rapid Prototype developer, creating web applications using Vue.js for both internal and external clients. These projects were run in small teams of 1-4 with a very fast turnaround following agile methodologies</text>
          </div>
          <Back style={{ fontSize: '10vw', color: 'black', position: 'absolute', bottom: '2%', paddingLeft: '5%' }} onClick={() => { dispatch(setExperience('none')) }}></Back>
        </div>
      ) : (experience === 'skylake') ? (
        <div style={mobColumnStyle}>
          <div style={experienceDetails} >
            <text style={{ fontSize: '4vw', fontWeight: 'bold', }}> Camp Counsellor  </text><br></br>
            <text style={{ fontSize: '4vw' }}> Skylake Yosemite Camp (June 2017 - August 2017</text><br></br><br></br>
            <text style={{ fontSize: '4vw' }}>During the summer of 2017 I worked at a kid’s camp in America through Camp America. At camp I was responsible for my cabin as well as the tennis instructor. This role involved working in a large team with all the other counsellors to make sure all the kids were looked after and enjoying themselves. I loved working at a Summer Camp as there was a great team spirit across camp</text>
          </div>
          <Back style={{ fontSize: '10vw', color: 'black', position: 'absolute', bottom: '2%', paddingLeft: '5%' }} onClick={() => { dispatch(setExperience('none')) }}></Back>
        </div>
      ) : (experience === 'rococo') ? (
        <div style={mobColumnStyle}>
          <div style={experienceDetails} >
            <text style={{ fontSize: '4vw', fontWeight: 'bold', }}> Senior Waiter </text><br></br>
            <text style={{ fontSize: '4vw' }}> Rococo Catering (April 2015 - September 2018)</text><br></br><br></br>
            <text style={{ fontSize: '4vw' }}>Part time Senior Waiter for a highly respected catering company. As part of this role I had to serve guests both food and drink alongside helping new members of the catering team with any issues they are having during a shift. I really enjoyed this job as there is a great team atmosphere and a feeling of joy after finishing a long shift at a wedding </text>
          </div>
          <Back style={{ fontSize: '10vw', color: 'black', position: 'absolute', bottom: '2%', paddingLeft: '5%' }} onClick={() => { dispatch(setExperience('none')) }}></Back>
        </div>
      ) : (
              <div style={mobColumnStyle}>
                <div style={experienceItem} onClick={() => { dispatch(setExperience('ibm')) }} >
                  <text style={{ fontSize: '4vw', fontWeight: 'bold' }}> IBM</text>
                </div>

                <div style={experienceItem} onClick={() => { dispatch(setExperience('skylake')) }}>
                  <text style={{ fontSize: '4vw', fontWeight: 'bold' }}> Skylake Yosemite Camp</text>
                </div>

                <div style={experienceItem} onClick={() => { dispatch(setExperience('rococo')) }}>
                  <text style={{ fontSize: '4vw', fontWeight: 'bold' }}> Rococo Catering</text>
                </div>

              </div>
            )}

    </div>
  );
};

export default ExperienceMobile;