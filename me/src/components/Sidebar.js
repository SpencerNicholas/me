import React from "react";
import App from "../App";
import store from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, selectPage } from './navigation'

const Sidebar = ({ }) => {
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

  const menuItems = [
    { text: "Home", active: 1 },
    { text: "Experience", active: 2 },
    { text: "Education", active: 3 },
    { text: "Skills", active: 4 },
    { text: "Portfolio", active: 5 },
    { text: "Contact", active: 6 }
  ];

  

  return (
    <div style={sidebarStyle}>
      {menuItems.map((item, i) => (
        <div key={i} style={menuItemStyle} onClick={() => {dispatch(setPage(item.text)) }}>
          {item.active === (page) ? (
            <div style={activeMenuItemStyle}>
              {item.text}
            </div>
          ) : (
              <div>
                {item.text}
              </div>
            )}
        </div>
      ))}
    </div>
  );
};




export default Sidebar;