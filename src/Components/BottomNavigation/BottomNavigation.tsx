import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import SettingsIcon from '@mui/icons-material/Settings';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import HomeIcon from '@mui/icons-material/Home';
// import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import './BtnFooter.css'


export default function SimpleBottomNavigation( props: any ) {
  const [value, setValue] = React.useState(0);


  const navigate = useNavigate();

  function handleClick( page: string | null ) {

    if(page !== null) { navigate(`/${page}`) } else { navigate("/") }
  }


  return (
    <>

      <Box sx={{ minWidth: 500, margin: 0, width: "100%"  }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <div className='Btn-footer' onClick={ props.ClickScroll }><KeyboardDoubleArrowUpIcon  /></div>
          
          
          <div onClick={ () => handleClick( "Calendar" ) }>
            <BottomNavigationAction id={"Calendar"} label="Calendar" icon={<CalendarMonthIcon />} sx={{ minWidth: 200  }} />
          </div>
          <div onClick={ () => handleClick( null ) }>
            <BottomNavigationAction id={"Today"} label="Today" icon={<HomeIcon />} sx={{ minWidth: 200 }} />
            </div>
          <div onClick={ () => handleClick( "Setting" ) }>
            <BottomNavigationAction id={"Setting"} label="Settings" icon={<SettingsIcon />} sx={{ minWidth: 200 }} />
          </div>

        </BottomNavigation>
      </Box>
      
    </>
  );
}


