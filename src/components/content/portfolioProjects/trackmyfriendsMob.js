import React from "react";

import ss1 from "./assets/tmfss1.png"
import ss2 from "./assets/tmfss2.png"
import ss3 from "./assets/tmfss3.png"
import ss4 from "./assets/tmfss4.png"
import ss5 from "./assets/tmfss5.png"
import vid from "./assets/tmfvid.mp4"

const trackmyfriendsMob = () => {

    const contentStyle = {
        paddingTop: '1vh',
        padding: '5%',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(to right, white, white)',
        minHeight: '75vh',
        color: '#00363a',
    };

    const picCol = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop: '2%',
        paddingBottom: '2%'
    }

    const picRow = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: '2% 2%',
    }



    return (
        <div style={contentStyle}>
            <text style={{ fontSize: '2em', fontWeight: 'bold', paddingBottom: '1%' }}>Track My Friends </text>
            <text> Track my Friends is a mobile application created using React Native that helps with the planning of all kinds of events from small parties to large receptions.
                This project was my first experience with React Native as I created this application for my major project at university. The application is currently functional as a
            prototype, I have plans to redevelop the app further in the future using the knowledge gained from this project </text><br></br>

            <text style={{ fontStyle: 'italic', fontSize: '0.8em' }}> Below you can see a short video of the app as well as some screenshots of different pages of the application </text>
            <div style={picCol}>
                <div style={picRow}>
                <video width='45%' controls>
                    <source src={vid} type='video/mp4' />
                    Your browser does not support the video tag
                </video>
                <img src={ss1} alt="Track my Friends login screen" style={{ width: '45%' }}></img>
                </div>
                <div style={picRow}>
                <img src={ss2} alt="Track my Friends home screen" style={{ width: '45%' }}></img>
                <img src={ss3} alt="Track my Friends events screen" style={{ width: '45%' }}></img>
                </div>
                <div style={picRow}>
                <img src={ss4} alt="Track my Friends friends screen" style={{ width: '45%' }}></img>
                <img src={ss5} alt="Track my Friends add friend popup" style={{ width: '45%' }}></img>
                </div>
            </div>
            <div>
                <text style={{}}> This project can be found on </text>
                <text style={{ fontWeight: 'bold' }}  onClick={() => { window.open("https://github.com/SpencerNicholas/MMP-Track-my-Friends", "_blank")}}> GitHub </text>
            </div>

        </div>
    );
};

export default trackmyfriendsMob;