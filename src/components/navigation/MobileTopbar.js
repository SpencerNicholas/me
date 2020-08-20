import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setPage, selectPage, setMenuOpen, selectMenu } from './navigation'
import Menu from '@material-ui/icons/Menu';

import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';


const MobileTopbar = () => {
  const page = useSelector(selectPage);
  const menu = useSelector(selectMenu);
  const dispatch = useDispatch();

  const mobileTopbarStyle = {
    height: "10vh",
    width: "100%",
    position: "fixed",
    backgroundColor: "#428e92",
    alignItems: "center",
    justifyContent: 'center',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    zIndex: '10',
  };

  const mobileTopbarExpandedStyle = {
    height: "70vh",
    width: "100%",
    position: "fixed",
    backgroundColor: "#428e92",
    alignItems: "center",
    justifyContent: 'center',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    zIndex: '10',
  };

  const menuItemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `2vh`,
    color: 'white',
    fontSize: '5vw',
  };

  const activeMenuItemStyle = {
    borderBottom: '3px solid red'
  }

  const pageTitle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: 'white',
    fontSize: '6vw',
  }

  const footerStyle = {
    color: 'white',
    flexDirection: 'row',
    position: 'absolute',
    bottom: '3vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
  }

  const iconStyle = {
    fontSize: '7vw',
  }

  const menuItems = [
    { text: "ABOUT", active: 1 },
    { text: "EXPERIENCE", active: 2 },
    { text: "EDUCATION", active: 3 },
    { text: "SKILLS", active: 4 },
    { text: "PORTFOLIO", active: 5 }
  ];




  return (
    <div>
      {!menu ? (
        <div style={mobileTopbarStyle}>
          {menuItems.map((item, i) => (
            <div key={i} style={pageTitle}>
              {item.active === (page) ? (
                <div>
                  {item.text}
                  <Menu style={{ fontSize: '32px', position: 'absolute', right: '5%' }} onClick={() => { dispatch(setMenuOpen(true)) }}></Menu>
                </div>
              ) : (<div></div>)}
            </div>))}
        </div>
      ) : (
          <div style={mobileTopbarExpandedStyle}>
            {menuItems.map((item, i) => (
              <div key={i} style={menuItemStyle} onClick={() => { dispatch(setPage(item.text)); dispatch(setMenuOpen(false)) }}>
                {item.active === (page) ? (
                  <div style={activeMenuItemStyle}>
                    {item.text}
                  </div>
                ) : (
                    <div>
                      {item.text}
                    </div>)}


              </div>
            ))}
            <div style={footerStyle}>
              <div onClick={() => { window.open("https://linkedin.com/in/spencer-nicholas", "_blank") }}>
                <LinkedIn style={iconStyle} ></LinkedIn>
              </div>
              <div onClick={() => { window.open("https://www.instagram.com/spencerndev/?hl=en", "_blank") }}>
                <Instagram style={iconStyle}></Instagram>
              </div>
              <div onClick={() => { window.open("https://twitter.com/SpencerNDev", "_blank") }}>
                <Twitter style={iconStyle}></Twitter>
              </div>
              <div onClick={() => { window.open("https://github.com/SpencerNicholas", "_blank") }}>
                <GitHub style={iconStyle}></GitHub>
              </div>
            </div>
          </div>



        )}
    </div>

  );
};




export default MobileTopbar;