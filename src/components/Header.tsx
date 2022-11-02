import GitHubIcon from "@mui/icons-material/GitHub"
import {
  AppBar,
  AppBarProps,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material"
import React from "react"
import muiVersion from "src/muiVersion"
import TutorialButton from "./Tutorial/TutorialButton"

const Header = (props: AppBarProps) => {
  return (
    <AppBar position="static" color="default" {...props}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography
            variant="h6"
            sx={{ typography: "h6", lineHeight: "1.25rem" }}
          >
            Superlunar Surface
          </Typography>
          <Typography variant="caption" sx={{ typography: "caption" }}>
            <Link
              href="https://mui.com/"
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              {`@mui/material@${muiVersion}`}
            </Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
