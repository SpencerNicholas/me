import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setPage, selectPage, selectHover, setHover, setMenuOpen, selectMenu } from './navigation';
import Menu from '@material-ui/icons/Menu';

import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';


const Topbar = ({ }) => {
  const hovering = useSelector(selectHover);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  const topbarStyle = {
    height: "5vh",
    width: "100%",
    position: "fixed",
    backgroundColor: "#428e92",
    borderBottom: "0.5vh solid #006064",
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '12%',
    alignItems: 'center',
    zIndex: '10',
    userSelect: 'none',
  };

  const menuItemStyle = {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    paddingRight: `3%`,
    color: 'white',
    fontSize: '18px',
  };

  const activeMenuItemStyle = {
    color: '#b71c1c'
  }

  const footerStyle = {
    color: 'white',
    flexDirection: 'row',
    position: 'absolute',
    width: '10%',
    display: 'flex',
    justifyContent: 'space-evenly',
    right: '20%',
    alignItems: 'center'
  }

  const iconStyle = {
    fontSize: '28px',
  }

  const iconHovered = {
    fontSize: '28px',
    color: '#b71c1c',
    cursor: 'pointer',
    transition: 'color 0.5s',
  }

  const menuItems = [
    { text: "ABOUT", active: 1 },
    { text: "EXPERIENCE", active: 2 },
    { text: "EDUCATION", active: 3 },
    { text: "SKILLS", active: 4 },
    { text: "PORTFOLIO", active: 5 }
  ];




  return (
    <div style={topbarStyle}>
      {menuItems.map((item, i) => (
        <div key={i} style={menuItemStyle} onClick={() => { dispatch(setPage(item.text)) }}>
          {item.active === (page) ? (
            <div style={activeMenuItemStyle}>
              {item.text}
            </div>
          ) : (
              <div onMouseOver={() => { dispatch(setHover(item.text)) }} onMouseLeave={() => { dispatch(setHover())}}>
                {item.active === (hovering) ? (
                  <div style={{ color: '#b71c1c', cursor: 'pointer', transition: 'color 0.5s', }}>
                    {item.text}
                  </div>
                ) : (
                    <div>
                      {item.text}
                    </div>)}
            
              </div>
          )}
        </div>
      ))}
      <div style={footerStyle}>
        <div onMouseOver={() => { dispatch(setHover("LinkedIn"))}} onMouseLeave={() => { dispatch(setHover())}} onClick={() => { window.open("https://linkedin.com/in/spencer-nicholas", "_blank")}}>
                  {(hovering) === 6 ? (
                     <LinkedIn style={iconHovered} ></LinkedIn>
                  ) : (
                    <LinkedIn style={iconStyle} ></LinkedIn>
                  )}
        </div>
        <div onMouseOver={() => { dispatch(setHover("Instagram"))}} onMouseLeave={() => { dispatch(setHover())}} onClick={() => { window.open("https://www.instagram.com/spencerndev/?hl=en", "_blank")}}>
                  {(hovering) === 7 ? (
                     <Instagram style={iconHovered}></Instagram>
                  ) : (
                    <Instagram style={iconStyle}></Instagram>
                  )}
        </div>
        <div onMouseOver={() => { dispatch(setHover("Twitter"))}} onMouseLeave={() => { dispatch(setHover())}} onClick={() => { window.open("https://twitter.com/SpencerNDev", "_blank")}}>
                  {(hovering) === 8 ? (
                     <Twitter style={iconHovered}></Twitter>
                  ) : (
                    <Twitter style={iconStyle}></Twitter>
                  )}
        </div>
        <div onMouseOver={() => { dispatch(setHover("GitHub"))}} onMouseLeave={() => { dispatch(setHover())}} onClick={() => { window.open("https://github.com/SpencerNicholas", "_blank")}}>
                  {(hovering) === 9 ? (
                     <GitHub style={iconHovered}></GitHub>
                  ) : (
                    <GitHub style={iconStyle}></GitHub>
                  )}
        </div>
      </div>
    </div>

  );
};




export default Topbar;