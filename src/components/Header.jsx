import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import '../App.css';
import { useSelector } from "react-redux";

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Drivers/redux
      </Typography>
      <Divider />
      <List>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/drivers">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Drivers"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/favorites">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Favorites"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const favorites = useSelector((state) => state.favoriteReducer);
  
  return (
    <Box sx={{ display: "flex",marginBottom:'80px' }}>
    <AppBar
      sx={{
        justifyContent: "center",
        background:
          "linear-gradient(90deg, rgba(47,4,4,1) 0%, rgba(41,2,2,1) 25%, rgba(121,17,17,1) 55%, rgba(88,0,0,1) 99%)",
        height: "80px",
      }}
      component="nav"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            cursor: "pointer",
          }}
        >
          Drivers/redux
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Link to="/">
            <Button className="link" sx={{ color: "#fff" }}>Home</Button>
          </Link>
          <Link to="drivers">
            <Button className="link" sx={{ color: "#fff" }}>Drivers</Button>
          </Link>
          <Link to="favorites">
            <Button className="link" sx={{ color: "#fff" }}>Favorites <sup className="sup"> {favorites.length}</sup></Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  </Box>
  )
}

export default Header