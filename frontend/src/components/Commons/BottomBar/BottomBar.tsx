import { useState, useEffect } from "react";
import styles from "./BottomBar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { updateTabActions } from "@/slices/tabSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";

const BottomBar = () => {
  const dispatch = useDispatch();
  const focusedTab = useSelector((state: RootState) => state.tab);
  const [value, setValue] = useState(focusedTab);
  const { pathname } = useLocation();
  const rootPathList = ["/", "/feed", "/playground", "/mypage"];
  const rootPathName = `/${pathname.split("/")[1]}`;
  useEffect(() => {
    dispatch(updateTabActions.updateTab(value));
  }, [value]);

  // url 직접 입력을 고려해, rootpath가 탭과 연결된 main rootpathlist 들 중 하나로 변경되면 활성화tab값 변경
  useEffect(() => {
    if (rootPathList.includes(rootPathName)) {
      setValue(rootPathName);
    }
  }, [rootPathName]);

  return (
    <>
      {pathname.includes("write") || pathname.includes("loading") ? (
        <></>
      ) : (
        <Box className={`${styles[`bottom-bar-container`]}`}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{
              backgroundColor: "#06031a",
              // backgroundColor: "black",
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
      )}
    </>
  );
};

export default BottomBar;
