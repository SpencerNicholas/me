import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setPage, selectPage, selectHover, setHover } from './navigation'
import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';

const Sidebar = ({ }) => {
  const hovering = useSelector(selectHover);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  const sidebarStyle = {
    height: "90vh",
    width: "15%",
    position: "fixed",
    backgroundColor: "#428e92",
    borderBottom: "5vh solid #006064",
    borderTop: "5vh solid #006064",
    alignItems: "center",
    justifyContent: 'center',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  };

  const menuItemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `2vh`,
    color: 'white',
    fontSize: '24px',
    fontWeight: "bold",
  };

  const activeMenuItemStyle = {
    borderBottom: '3px solid red'
  }

  const footerStyle = {
    color: 'white',
    flexDirection: 'row',
    position: 'absolute',
    bottom: '1vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
  }

  const iconStyle = {
    fontSize: '32px',
  }

  const iconHovered = {
    fontSize: '32px',
    color: 'red',
    cursor: 'pointer',
  }

  const menuItems = [
    { text: "About", active: 1 },
    { text: "Experience", active: 2 },
    { text: "Education", active: 3 },
    { text: "Skills", active: 4 },
    { text: "Portfolio", active: 5 }
  ];




  return (
    <div style={sidebarStyle}>
      {menuItems.map((item, i) => (
        <div key={i} style={menuItemStyle} onClick={() => { dispatch(setPage(item.text)) }}>
          {item.active === (page) ? (
            <div style={activeMenuItemStyle}>
              {item.text}
            </div>
          ) : (
              <div onMouseOver={() => { dispatch(setHover(item.text)) }} onMouseLeave={() => { dispatch(setHover())}}>
                {item.active === (hovering) ? (
                  <div style={{ color: 'lightgrey', cursor: 'pointer' }}>
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




export default Sidebar;