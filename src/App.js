import { ThemeProvider } from "@mui/material/styles";
import theme from "./temaConfig";
// import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/styles";
// import Icon from "@mui/material/Icon";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";

import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <div class="App">
        <Navbar />
        <ItemListContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
