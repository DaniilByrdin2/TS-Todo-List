import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import SettingsIcon from '@mui/icons-material/Settings';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


import { Outlet, Link } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Box sx={{ minWidth: 500, margin: 0  }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >

          <Link to={`Calendar`}>
            <BottomNavigationAction id={"Calendar"} label="Calendar" icon={<CalendarMonthIcon />} sx={{ minWidth: 200  }} />
          </Link>
          <Link to={`Today`}>
            <BottomNavigationAction id={"Today"} label="Today" icon={<FormatListBulletedIcon />} sx={{ minWidth: 200 }} />
            </Link>
          <Link to={`Setting`}>
            <BottomNavigationAction id={"Setting"} label="Settings" icon={<SettingsIcon />} sx={{ minWidth: 200 }} />
          </Link>

        </BottomNavigation>
      </Box>
      
    </>
  );
}


