import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "@/components/MainTab/MainTab.module.css";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: "white", // 글씨색 변경
          backgroundColor: "#06031A", // 배경색 변경
        },
        selected: {
          backgroundColor: "red",
          color: "red",
        },
      },
    },
  },
});

export default function MainTab2() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Tab label="칵테일" value="1" disableRipple />
              <Tab label="위스키" value="2" disableRipple />
              <Tab label="와인" value="3" disableRipple />
              <Tab label="전통주" value="4" disableRipple />
              <Tab label="맥주" value="5" disableRipple />
            </TabList>
          </Box>
          <TabPanel value="1">칵테일</TabPanel>
          <TabPanel value="2">위스키</TabPanel>
          <TabPanel value="3">와인</TabPanel>
          <TabPanel value="4">전통주</TabPanel>
          <TabPanel value="5">맥주</TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
}
