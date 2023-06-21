import React from "react";
import { SContainer, SButton, Simg } from "./styles";
import { Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Alphaleme.png";

export default function Header() {
  
  const buttonData = [
    { name: "Sobre Nós", link: "/about" },
    { name: "Serviços", link: "/services" },
  ];

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
            {buttonData.map((button) => (
              <Link to={button.link} key={button.name}>
                <SButton>{button.name}</SButton>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Container>
    </SContainer>
  );
}
