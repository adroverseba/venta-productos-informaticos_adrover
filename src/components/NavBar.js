import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
// import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

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
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {/* <IconButton
            aria-label="menu"
            color="inherit"
            className={classes.menuButton}
          >
            <span class="material-icons">menu</span>
          </IconButton> */}
          <Typography variant="h6" component="h1" className={classes.title}>
            ELECTRONIC HOUSE
          </Typography>
          <Button variant="text" color="inherit">
            productos
          </Button>
          <Button variant="text" color="inherit">
            Quienes somos
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
};

export default Navbar;
