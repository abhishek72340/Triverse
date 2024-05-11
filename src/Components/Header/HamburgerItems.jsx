import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Drawer } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function HaburgerItems() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <img src="./images/logo1.png" alt="logo" className="hamburger-logo" />
      <div className="hamburger-navbar-buttons">
        <button>Contact Us</button>
        <button>Admissions</button>
        <button>Franchise</button>
      </div>
      <ul className="hamburger-navbar-nav">
        <li>
          <Link to="/">discover welmont</Link>
        </li>
        <li>
          <Link to="/">programs</Link>
        </li>
        <li>
          <Link to="/">facilities</Link>
        </li>
        <li>
          <Link to="/">about us</Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            blog
          </Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)} id="menu-icon">
        <MenuRoundedIcon />
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
