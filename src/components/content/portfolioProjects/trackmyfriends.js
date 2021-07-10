import React from "react";

import ss1 from "./assets/tmfss1.png"
import ss2 from "./assets/tmfss2.png"
import ss3 from "./assets/tmfss3.png"
import ss4 from "./assets/tmfss4.png"
import ss5 from "./assets/tmfss5.png"
import vid from "./assets/tmfvid.mp4"

const trackmyfriends = () => {

    const section = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    const picRow = {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        paddingTop: '2%',
        paddingBottom: '2%'
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

    const link = {
        fontSize: '16px',
        fontWeight: 'bold',
        userSelect: 'none',
        color: 'rgb(20,20,20)',
        fontFamily: 'Poppins',
        cursor: 'pointer'
    };





    return (
        <div style={section}>
            <text style={title}>Track My Friends </text>
            <text style={text}> Track my Friends is a mobile application created using React Native that helps with the planning of all kinds of events from small parties to large receptions.
            This project was my first experience with React Native as I created this application for my major project at university. The application is currently functional as a
            prototype, I have plans to redevelop the app further in the future using the knowledge gained from this project </text><br></br>

            <text style={text}> Below you can see a short video of the app as well as some screenshots of different pages of the application </text>
            <div style={picRow}>
                <video width='12%' controls>
                    <source src={vid} type='video/mp4' />
                    Your browser does not support the video tag
                </video>
                <img src={ss1} alt="Track my Friends login screen" style={{ width: '12%' }}></img>
                <img src={ss2} alt="Track my Friends home screen" style={{ width: '12%' }}></img>
                <img src={ss3} alt="Track my Friends events screen" style={{ width: '12%' }}></img>
                <img src={ss4} alt="Track my Friends friends screen" style={{ width: '12%' }}></img>
                <img src={ss5} alt="Track my Friends add friend popup" style={{ width: '12%' }}></img>
            </div>
            <div>
                <text style={text}> This project can be found on </text>
                <text style={link} onClick={() => { window.open("https://github.com/SpencerNicholas/MMP-Track-my-Friends", "_blank") }}> GitHub </text>
            </div>

        </div>
    );
};

export default trackmyfriends;