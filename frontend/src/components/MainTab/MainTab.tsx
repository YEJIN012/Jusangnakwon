import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function MainTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: '#06031A',width: '100%', height: '500px', color: 'white' }}>
      <AppBar position="static">
        <Tabs
          // sx={{bgcolor: '#06031A', color: 'white' }}
          sx={{
            bgcolor: '#06031A',
            '& .Mui-selected': {
              color: 'white',
              bgcolor: 'purple',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            '& .MuiTab-root': {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              border: '1px solid gray',
            },
          }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="칵테일" sx={{ fontSize: { xs: 12, md: 16 } }} {...a11yProps(0)} disableRipple/>
          <Tab label="위스키" sx={{ fontSize: { xs: 12, md: 16 } }}{...a11yProps(1)} disableRipple/>
          <Tab label="와인" sx={{ fontSize: { xs: 12, md: 16 } }}{...a11yProps(2)} disableRipple/>
          <Tab label="전통주" sx={{ fontSize: { xs: 12, md: 16 } }}{...a11yProps(3)} disableRipple/>
          <Tab label="맥주" sx={{ fontSize: { xs: 12, md: 16 } }}{...a11yProps(4)} disableRipple/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          칵테일
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          위스키
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          와인
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          전통주
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          맥주
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}