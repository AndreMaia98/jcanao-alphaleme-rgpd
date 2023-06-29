import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { TypographyText, TypographyTitle, SBox, SImg } from "./style";
import Button from "../../ui/buttons/buttonwhite";
import DotBg from "../../../assets/images/253.svg";
import { Link } from "react-router-dom";

export default function Sec8() {
  return (
    <Container maxWidth="false">
      <Container maxWidth="lg" disableGutters>
        <Grid
          container
          sx={{
            marginTop: { xs: "352px", lg: "580px" },
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <SImg src={DotBg} alt="dot" />
          <Grid item xs={12} lg={8}>
            <SBox>
              <TypographyTitle>
                Está em conformidade com o Regulamento Geral de Proteção de
                Dados - RGPD?
              </TypographyTitle>
              <TypographyText>
                Sabia que ao cumprir com o RGPD não só está a proteger-se de
                inconformidades legais mas também a proteger-se em diminuir o
                impacto que ciberataques possam criar?
              </TypographyText>
              <Box align="end">
                <a href="/rgpd#rgpd">
                  <Button>Saber mais</Button>
                </a>
              </Box>
            </SBox>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
