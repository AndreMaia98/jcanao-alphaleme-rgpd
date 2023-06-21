import React from "react";
import { SContainer, SButton } from "./styles";
import { Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/jcanaoLogo.svg";

export default function Header() {
  const buttonData = [
    { name: "Home", link: "/" },
    { name: "About", link: "/contact" },
  ];

  return (
    <SContainer maxWidth={false}>
      <Container maxWidth="lg">
        <Grid container sx={{ height: "100%", margin: "0px 30px" , display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Grid item>
            <img src={Logo} alt="" height={70} />
          </Grid>
          <Grid item >
            {buttonData.map((button) => (
              <Link to={button.link} key={button.name}>
                <SButton
                  variant="text"
                  sx={{
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                >
                  {button.name}
                </SButton>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Container>
    </SContainer>
  );
}
