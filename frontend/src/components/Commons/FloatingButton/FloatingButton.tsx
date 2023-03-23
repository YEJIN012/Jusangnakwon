import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import EditIcon from "@mui/icons-material/Edit";
import FloatingButtonList from "./FloatingButtonList";
import { useNavigate } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import LocalBarIcon from "@mui/icons-material/LocalBar";

const types = [
  { icon: <CreateIcon />, name: "리뷰", path: "review" },
  { icon: <QuestionMarkIcon />, name: "질문글", path: "question" },
  { icon: <LocalBarIcon />, name: "레시피", path: "recipe" },
];

const FloatingButton = () => {
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
        {open && <FloatingButtonList></FloatingButtonList>}
      </SpeedDial>
    </>
  );
};

export default FloatingButton;
