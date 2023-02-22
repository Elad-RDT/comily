// import React from "react";
import * as React from "react";

import Button from "@mui/material/Button";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./login";
import { useEffect } from "react";

////active the menu button
const NavBar = () => {
  const { be, setBe } = useContext(AuthContext);

  useEffect(() => {
    console.log("be changed");
  }, [be]);
  // const [name,setName]=useState('')

  //      const token = localStorage.getItem("token");
  //      if(token!=null){

  //        const decodedToken = jwtDecode(token);
  //        console.log(decodedToken);
  //        const decodeName = decodedToken.name;
  //        setName(decodeName)
  //       }

  const [state, setState] = React.useState({
    left: false,
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
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar>
            {/* icon of menu button with his funcnality */}
            <div>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    onClick={toggleDrawer(anchor, true)}
                    style={{ color: "#7C78B8" }}
                  >
                    {" "}
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ marginLeft: "2%", color: "#7C78B8" }}
            >
              <b style={{ fontFamily: "Courgette" }}>
                {" "}
                welcome {localStorage.getItem("name")}{" "}
              </b>
            </Typography>

            <div>
              <Link className="links">
                <Button color="inherit" style={{ color: "#7C78B8" }}>
                  Home
                </Button>
              </Link>
              <Link to="/login" className="links">
                <Button color="inherit" style={{ color: "#7C78B8" }}>
                  Login
                </Button>
              </Link>
              <Link className="links" to="/signUp">
                <Button color="inherit" style={{ color: "#7C78B8" }}>
                  Sign up
                </Button>
              </Link>
              <Link to="/" className="links">
                <Button color="inherit" style={{ color: "#7C78B8" }}>
                  Comments
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;
