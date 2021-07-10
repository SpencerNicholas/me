import React from 'react';
import MobileTopbar from "./components/navigation/MobileTopbar";

import Page from "./components/content/Page";

import { useSelector, useDispatch } from 'react-redux';
import { getPage } from './components/navigation/navigation'
import { selectWidth, setWidth, setHeight } from './components/redux/responsiveSlice'
import './App.css';
import Topbar from './components/navigation/Topbar';
import Sidebar from './components/navigation/Sidebar'

const App = () => {
  const page = useSelector(getPage);
  const width = useSelector(selectWidth);
  const dispatch = useDispatch();

  /**
   * This function runs when the component is loaded. I am using it to get the width a height of the display
   * for resizing the display between mobile and desktop
   */
  React.useEffect(() => {
    dispatch(setWidth());
    dispatch(setHeight());
    window.addEventListener('resize', handleResize, false)
    function handleResize() {
      dispatch(setWidth())
    }
  });



  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      {width > 1000 ? (
        <div style={{display: 'flex', flexDirection: 'row', width:'100%', height: '100%'}}>
          <div style={{flex: 2}}>
          <Sidebar />
          </div>
          <div style={{flex: 8}}>
          <Page />
          </div>
        </div>
      ) : (
        <div style={{display: 'flex', flexDirection: 'column', width:'100%', height: '100%'}}>
          <div style={{flex: 1}}>
          <MobileTopbar />
          </div>
          <div style={{flex: 9}}>
          <Page />
          </div>
        </div>
        )}
    </div>
  );
}

export default App;
