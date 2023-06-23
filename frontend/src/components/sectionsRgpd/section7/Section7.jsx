import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { TypographyText, TypographyTitle, SBox } from "./style";
import Button from "../../ui/buttons/button";

export default function Sec7() {
  return (
    <Container maxWidth="false" disableGutters>
      <Container maxWidth="false" disableGutters>
        <Grid container maxWidth="false">
          <Grid
            item
            xs={10}
            sx={{
              background: "var(--blue)",
              boxShadow: " 0px 0px 6px var(--blue-second)",
              padding: "184px 0px",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
              display: "flex",
            }}
          >
            <Grid item xs={4}></Grid>
            <Grid item xs={6.5}>
              <SBox>
                <TypographyTitle>
                  Está em conformidade com o Regime Jurídico de Segurança do
                  Ciberespaço?
                </TypographyTitle>
                <TypographyText>
                  Proteja o seu negócio contra violações de dados. O cumprimento
                  do RGPD reduz o dano em caso de incidente, mas é a adoção das
                  melhores práticas de cibersegurança que impede que esses
                  incidentes ocorram. Invista na prevenção e garanta a segurança
                  dos seus dados. Não há solução mais eficaz!
                </TypographyText>
                <Box align="start">
                  <Button>Saber mais</Button>
                </Box>
              </SBox>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Container>
    </Container>
  );
}
