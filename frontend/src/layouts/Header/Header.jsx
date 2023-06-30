import React, { useEffect, useState } from "react";
import { SButton, SContainer, Simg } from "./styles";
import { Grid, Container, Drawer, List, ListItem } from "@mui/material";
import Logo from "../../assets/logo/LogoAlphaleme.svg";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/MenuRounded";

export default function Header() {
  const [activeRoute, setActiveRoute] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <SContainer maxWidth={false}>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          height: "100%",
        }}
      >
        <Grid
          container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <Simg src={Logo} alt="" />
          </Grid>
          <Grid
            item
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { xs: "16px", sm: "16px" },
              height: "100%",
            }}
          >
            <Link to="/rgpd">
              <SButton
                disableRipple
                disableFocusRipple
                activeRoute={activeRoute}
                route="/rgpd"
              >
                RGPD
              </SButton>
            </Link>
            <Link to="/">
              <SButton
                disableRipple
                disableFocusRipple
                activeRoute={activeRoute}
                route="/"
              >
                Cibersegurança
              </SButton>
            </Link>
          </Grid>
          <Grid item sx={{ display: { xs: "flex", md: "none" } }}>
            <MenuIcon
              onClick={toggleMobileMenu}
              sx={{ width: "40px", height: "40px", color: "var(--blue)" }}
            />
            <Drawer
              anchor="right"
              open={isMobileMenuOpen}
              onClose={toggleMobileMenu}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                },
              }}
            >
              <List>
                <ListItem
                  disablePadding
                  sx={{
                    marginBottom: "6px",
                    width: "50%",
                  }}
                >
                  <Link to="/rgpd">
                    <SButton
                      disableRipple
                      disableFocusRipple
                      activeRoute={activeRoute}
                      route="/rgpd"
                    >
                      RGPD
                    </SButton>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link to="/">
                    <SButton
                      disableRipple
                      disableFocusRipple
                      activeRoute={activeRoute}
                      route="/"
                    >
                      Cibersegurança
                    </SButton>
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </Grid>
        </Grid>
      </Container>
    </SContainer>
  );
}
