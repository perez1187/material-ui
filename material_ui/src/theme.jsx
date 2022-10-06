


// here we can creatae our own shapes
// you need to wrap what you want to use in theme to change it https://www.youtube.com/watch?v=fzxEECHnsvU
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette:{
    primary:{
      main: "#1760a5",
      light: "skyblue"
    },
    secondary:{
      main: '#15c630',
    },
    otherColor:{
      main:"#999"
    }
  }
})