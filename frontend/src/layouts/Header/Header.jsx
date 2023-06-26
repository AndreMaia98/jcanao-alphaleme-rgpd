import React, { useEffect, useState } from "react";
import { SButton, SContainer, Simg } from "./styles";
import { Grid, Container } from "@mui/material";
import Logo from "../../assets/logo/Alphaleme.png";
import { Link,  useLocation } from "react-router-dom";

export default function Header() {
  const [activeRoute, setActiveRoute] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

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
          <Grid item sx={{ display: "flex", gap: { xs: "16px", sm: "32px" } }}>
            <Link to={activeRoute === "/" ? "/rgpd" : "/"}>
              <SButton disableRipple>
                {activeRoute === "/" ? "RGPD" : "Cibersegurança"}
              </SButton>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </SContainer>
  );
}
