import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
// import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchForm from "./SearchForm";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2), //8px
  },
  title: {
    flexGrow: 1, //cuanto espacio del disponible ocupa mi objeto
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar
        position="fixed"
        color="primary"
        // onClick={() => alert("soy el navbar")}
      >
        <Toolbar>
          {/* <IconButton
            aria-label="menu"
            color="inherit"
            className={classes.menuButton}
          >
            <span class="material-icons">menu</span>
          </IconButton> */}

          <Typography variant="h6" component="h1" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              ELECTRONIC HOUSE
            </Link>
          </Typography>

          <Button
            id="basic-button"
            color="inherit"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Perifericos <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="basic-menu"
            color="inherit"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to={"/category/14"} style={{ textDecoration: "none" }}>
                Auriculares
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"/category/15"} style={{ textDecoration: "none" }}>
                Mouse
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"/category/18"} style={{ textDecoration: "none" }}>
                Teclados
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"/category/13"} style={{ textDecoration: "none" }}>
                Monitores
              </Link>
            </MenuItem>
          </Menu>
          <Button variant="text" color="inherit">
            Quienes somos
          </Button>

          <SearchForm />

          <Button color="inherit">Login</Button>
          <Link to={"/cart"}>
            <Button variant="text" color="inherit">
              <CartWidget />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
};

export default Navbar;
