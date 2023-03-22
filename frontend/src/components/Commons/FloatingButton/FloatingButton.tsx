import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./FloatingButton.module.css";
import FloatingButtonItem from "./FloatingButtonItem";

export default function FloatingButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "fixed", bottom: 70, right: 16, display: "flex", alignItems: "end" }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {open && (
          <div className={`${styles[`dial-box`]}`}>
            <FloatingButtonItem></FloatingButtonItem>
          </div>
        )}
        
      </SpeedDial>
    </>
  );
}
