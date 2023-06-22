import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { TypographyText, TypographyTitle, SBox } from "./style";
import Button from "../../ui/buttons/buttonwhite";

export default function Sec8() {
  return (
    <Container maxWidth="false">
      <Container maxWidth="lg" disableGutters>
        <Grid
          container
          sx={{ marginTop: "580px", display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={8}>
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
                <Button>Saber mais</Button>
              </Box> 
            </SBox>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
