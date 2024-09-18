import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/logo.png";
import { ButtonBase, Link } from "@mui/material";
import "./styles.css";

const pages = ["About", "Services", "Contact"];

function Navbar({ aboutRef, servicesRef }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // anchorElNav -> variable
  // setAnchorElNav -> function
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      className="appbar"
      position="sticky"
      elevation={0}
      color="secondary"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              sx={{ height: 54, marginRight: 3 }}
              alt="Logo"
              src={Logo}
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              fontSize: 22,
              textDecoration: "none",
            }}
          >
            Cat Care
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                width: "100vw", // Ensure menu takes full viewport width
                // maxWidth: "100%", // Prevent menu from exceeding viewport
                left: 0, // Align the menu to the left to avoid shrinking
                right: 0,
                marginTop: "0.5rem", // Ensure it stretches the full width
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem
                key={"about"}
                onClick={() => {
                  aboutRef.current?.scollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <Typography sx={{ textAlign: "center" }}>About</Typography>
              </MenuItem>
              <MenuItem
                key={"services"}
                onClick={() => {
                  servicesRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <Typography sx={{ textAlign: "center" }}>Services</Typography>
              </MenuItem>
              <MenuItem key={"contact"} onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: "center" }}>Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Link
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              sx={{ height: 54, marginRight: 3 }}
              alt="Logo"
              src={Logo}
            />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              mr: 10,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  servicesRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                sx={{ my: 2, display: "block", color: "black" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button color="primary" variant="contained">
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
