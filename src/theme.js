// theme.js
import { createTheme } from '@mui/material/styles';

// Create a theme instance
const theme = createTheme({
  palette: {
    background: {
      default: '#F1F3F4',
    },
    primary:{
      main:"#4194C",
    },
    pink:"linear-gradient(138.72deg, #DC8295 0%, #DC687C 95.83%)"
          
  },
  typography:{
h5:{
  fontWeight:800
}
  }
});

export default theme;
