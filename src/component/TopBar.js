import {
  AppBar,
  Button,
  createTheme,
  Grid,
  IconButton,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CottageIcon from '@mui/icons-material/Cottage';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export function TopBar() {
  const navigate = useNavigate();
  const handleClickCapsules = () => {
    navigate("/capsules");
  };
  const handleClickHome=()=>{
    navigate("/")
  }
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" className="topBarHeigth">
          <Grid container>
            <Grid item xs={12} md={3}>
              <IconButton sx={{backgroundColor:'#ccd5ae' , color:'black' , margin:'5px'}} id='buttonHover' onClick={handleClickCapsules}>
                <RocketLaunchIcon />
              </IconButton>
              <IconButton sx={{backgroundColor:'#ccd5ae' , color:'black' , margin:'5px'}} id='buttonHover' onClick={handleClickHome}>
                <CottageIcon />
              </IconButton>
            </Grid>
          </Grid>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
