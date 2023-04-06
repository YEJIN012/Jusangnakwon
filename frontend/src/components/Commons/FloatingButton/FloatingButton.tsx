import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import EditIcon from "@mui/icons-material/Edit";
import FloatingButtonList from "./FloatingButtonList";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   speedDialFab: {
//     backgroundColor: "rgb(176, 112, 144)", // Change the background color here
//   },
// }));


const FloatingButton = () => {
  const [open, setOpen] = useState(false);
  // const classes = useStyles();

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{
          position: "fixed",
          bottom: 70,
          right: 16,
          display: "flex",
          alignItems: "end",
        }}
        FabProps={{
          sx: {
            bgcolor: ' rgb(176, 112, 144)',
            '&:hover': {
              bgcolor: ' rgb(176, 112, 144)',
            }
          }
        }}
        icon={<SpeedDialIcon  openIcon={<EditIcon />} />}
        onClose={() => setOpen(!open)}
        onOpen={() => setOpen(!open)}
        open={open}
      >
        {open && <FloatingButtonList></FloatingButtonList>}
      </SpeedDial>
    </>
  );
};

export default FloatingButton;
