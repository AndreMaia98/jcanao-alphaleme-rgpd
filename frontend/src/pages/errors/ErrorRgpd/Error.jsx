import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Button from "../../../components/ui/buttons/buttonwhite";
import { TypographyTitle, TypographyText } from "./styles";
import RGPDError from "../../../assets/images/rgpd_error.svg";

export default function ErrorRGPD() {
  return (
    <Container
      maxWidth="false"
      sx={{
        background: "linear-gradient(118deg,var(--blue), var(--light-blue))",
        paddingTop: "256px",
        paddingBottom: "334px",
        position: "relative",
      }}
    >
      <img
        src={RGPDError}
        alt=""
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          zIndex: -1,
        }}
      />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} lg={4}>
            <TypographyTitle>
              A página solicitada não foi encontrada.
            </TypographyTitle>
            <Box sx={{ marginBottom: "44px" }}>
              <TypographyText>
                Isso pode acontecer devido aos seguintes motivos:
              </TypographyText>
              <br />
              <TypographyText>
                A página ou o arquivo está desatualizado, renomeado, movido ou
                não existe.
              </TypographyText>
              <br />
              <TypographyText>
                Você digitou o endereço incorretamente, como
                http://www.example.com/pgae.html em vez de
                http://www.example.com/page.html
              </TypographyText>
            </Box>
            <Button>Voltar</Button>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
