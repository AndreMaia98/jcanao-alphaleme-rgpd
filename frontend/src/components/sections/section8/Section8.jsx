import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { TypographyText, TypographyTitle, SBox } from "./style";
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
            marginTop: "580px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            src={DotBg}
            alt="dot"
            style={{
              position: "absolute",
              top: "-43%",
              left: "-30%",
              zIndex: -1,
            }}
          />
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
                <Link to="/rgpd">
                  <Button>Saber mais</Button>
                </Link>
              </Box>
            </SBox>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
