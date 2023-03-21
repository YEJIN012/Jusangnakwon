import * as React from "react";
import styles from "./BottomBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function BottomBar() {
  const { pathname } = useLocation();
  const feedPath = pathname.split("/").slice(0, 2).join("/");
  const [value, setValue] = React.useState(pathname);

  React.useEffect(() => {
    if (feedPath !== "/details") {
    setValue(feedPath);}
  }, [pathname]);

  return (
    <Box className={`${styles[`bottom-bar-container`]}`}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: "black",
          "& .Mui-selected > svg": {
            backgroundColor: "#363636",
            borderRadius: "10px",
            paddingX: "20px",
            paddingY: "2px",
          },
        }}
      >
        <BottomNavigationAction
          component={Link}
          to={"/"}
          value={"/"}
          icon={<HomeIcon />}
          style={{ color: "white" }}
          disableRipple
        />
        <BottomNavigationAction
          component={Link}
          to={"/feed"}
          value={"/feed"}
          icon={<LanguageIcon />}
          style={{ color: "white" }}
          disableRipple
        />
        <BottomNavigationAction
          component={Link}
          to={"/playground"}
          value={"/playground"}
          icon={<LocalBarIcon />}
          style={{ color: "white" }}
          disableRipple
        />
        <BottomNavigationAction
          component={Link}
          to={"/mypage"}
          value={"/mypage"}
          icon={<AccountCircleIcon />}
          style={{ color: "white" }}
          disableRipple
        />
      </BottomNavigation>
    </Box>
  );
}

export default BottomBar;
