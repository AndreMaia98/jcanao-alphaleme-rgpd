import React from "react";
import { Container, Grid } from "@mui/material";
import { SContainer, STypography, STypographyDesc } from "./styles";

export default function AdditionalInfo() {
  return (
    <SContainer maxWidth={false}>
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Grid
          container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={3} lg={1}>
            <STypography>Legal</STypography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2}
            sx={{ textAlign: { lg: "center" } }}
          >
            <STypographyDesc>Política de Cookies</STypographyDesc>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2}
            sx={{ textAlign: { lg: "center" } }}
          >
            <STypographyDesc>Política de Privacidade</STypographyDesc>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2}
            sx={{ textAlign: { lg: "center" } }}
          >
            <STypographyDesc>Termos e Condições</STypographyDesc>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2}
            sx={{ textAlign: { lg: "center" } }}
          >
            <STypographyDesc>Livro de Reclamações</STypographyDesc>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{ textAlign: { lg: "end" } }}
          >
            <STypographyDesc>
              ©2023 JCanão. All rights reserved.
            </STypographyDesc>
          </Grid>
        </Grid>
      </Container>
    </SContainer>
  );
}
