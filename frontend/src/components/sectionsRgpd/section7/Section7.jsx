import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { TypographyText, TypographyTitle, SBox, SButton } from "./style";
import { Link } from "react-router-dom";

export default function Sec7() {
  return (
    <Container maxWidth="false" disableGutters>
      <Container maxWidth="false" disableGutters>
        <Grid container maxWidth="false">
          <Grid
            item
            xs={12}
            lg={10}
            sx={{
              background: "var(--blue)",
              boxShadow: " 0px 0px 6px var(--blue-second)",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
              display: "flex",
              padding: { xs: "16px", lg: " 184px 0px" },
            }}
          >
            <Grid
              item
              xs={4}
              sx={{ display: { xs: "none", lg: "block" } }}
            ></Grid>
            <Grid item xs={12} lg={6.5}>
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
                  <a href="/#ciberseguranca">
                    <SButton>Saber mais</SButton>
                  </a>
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
