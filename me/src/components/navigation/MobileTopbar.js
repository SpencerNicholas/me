import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setPage, selectPage, selectHover, setHover, setMenuOpen, selectMenu } from './navigation'
import Menu from '@material-ui/icons/Menu';

const MobileTopbar = ({ }) => {
  const hovering = useSelector(selectHover);
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
  };

  const mobileTopbarExpandedStyle = {
    height: "60vh",
    width: "100%",
    position: "fixed",
    backgroundColor: "#428e92",
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

  const pageTitle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: 'white',
    fontSize: '24px',
    fontWeight: "bold",
  }

  const menuItems = [
    { text: "About", active: 1 },
    { text: "Experience", active: 2 },
    { text: "Education", active: 3 },
    { text: "Skills", active: 4 },
    { text: "Portfolio", active: 5 }
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
                    <Menu style={{fontSize: '32px', position: 'absolute', right: '5%'}} onClick={() => {dispatch(setMenuOpen(true))}}></Menu>
                    </div>
                ):(<div></div>)}
                  </div>))}
                  </div>
      ) : (
          <div style={mobileTopbarExpandedStyle}>
            {menuItems.map((item, i) => (
              <div key={i} style={menuItemStyle} onClick={() => { dispatch(setPage(item.text));  dispatch(setMenuOpen(false)) } }>
                {item.active === (page) ? (
                  <div style={activeMenuItemStyle}>
                    {item.text}
                  </div>
                ) : (
                    <div onMouseOver={() => { dispatch(setHover(item.text)) }} onMouseLeave={() => { dispatch(setHover()) }}>
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
          </div>

        )}
    </div>

  );
};




export default MobileTopbar;